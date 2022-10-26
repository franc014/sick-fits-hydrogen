import { Suspense } from "react";
import { Layout } from "../../components/Layout.server";
import { Seo, CacheNone, gql } from "@shopify/hydrogen";
import RegistrationForm from "../../components/authentication/RegistrationForm.client";
import { getApiErrorMessage } from "../../lib/utils";

const CUSTOMER_CREATE_MUTATION = gql`
  mutation customerCreate($input: CustomerCreateInput!) {
    customerCreate(input: $input) {
      customer {
        id
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`;

function Register() {
  return (
    <Layout>
      <Suspense>
        <Seo type="noindex" data={{ title: "Register" }} />
      </Suspense>
      <RegistrationForm />
    </Layout>
  );
}

export async function api(request, { queryShop }) {
  const jsonBody = await request.json();

  if (!jsonBody.email || !jsonBody.password) {
    return new Response(
      JSON.stringify({ error: "Email and password are required" }),
      { status: 400 }
    );
  }

  const { data, errors } = await queryShop({
    query: CUSTOMER_CREATE_MUTATION,
    variables: {
      input: {
        email: jsonBody.email,
        password: jsonBody.password,
        firstName: jsonBody.firstName,
        lastName: jsonBody.lastName,
      },
    },
    // @ts-expect-error `queryShop.cache` is not yet supported but soon will be.
    cache: CacheNone(),
  });

  const errorMessage = getApiErrorMessage("customerCreate", data, errors);

  if (
    !errorMessage &&
    data &&
    data.customerCreate &&
    data.customerCreate.customer &&
    data.customerCreate.customer.id
  ) {
    return new Response(null, {
      status: 200,
    });
  } else {
    return new Response(
      JSON.stringify({
        error: errorMessage ?? "Unknown error",
      }),
      { status: 401 }
    );
  }
}

export default Register;
