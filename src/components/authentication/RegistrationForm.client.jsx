import { Link } from "@shopify/hydrogen";
import { useState } from "react";
export const INPUT_STYLE_CLASSES =
  "appearance-none rounded dark:bg-transparent border focus:border-primary/50 focus:ring-0 w-full py-2 px-3 text-primary/90 placeholder:text-primary/50 leading-tight focus:shadow-outline";

export const getInputStyleClasses = (isError) => {
  return `${INPUT_STYLE_CLASSES} ${
    isError ? "border-red-500" : "border-primary/20"
  }`;
};

function RegistrationForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function registerUser(e) {
    e.preventDefault();
    const accountCreateResponse = await callAccountCreateApi({
      email,
      password,
    });

    console.log(accountCreateResponse);
  }
  return (
    <div className="flex justify-center my-24 px-4">
      <div className="max-w-md w-full">
        <h1 className="text-4xl">Create an Account.</h1>
        <form
          noValidate
          className="pt-6 pb-8 mt-4 mb-4"
          onSubmit={registerUser}
        >
          {/* {submitError && (
            <div className="flex items-center justify-center mb-6 bg-zinc-500">
              <p className="m-4 text-s text-contrast">{submitError}</p>
            </div>
          )} */}
          <div className="mb-3">
            <input
              className={`mb-1 ${getInputStyleClasses(null)}`}
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="Email address"
              aria-label="Email address"
              autoFocus
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            {/* {!emailError ? (
              ""
            ) : (
              <p className={`text-red-500 text-xs`}>{emailError} &nbsp;</p>
            )} */}
          </div>
          <div className="mb-3">
            <input
              className={`mb-1 ${getInputStyleClasses(null)}`}
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              placeholder="Password"
              aria-label="Password"
              value={password}
              minLength={8}
              required
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
            {/*  {!passwordError ? (
              ""
            ) : (
              <p className={`text-red-500 text-xs`}>{passwordError} &nbsp;</p>
            )} */}
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-red-600 text-white  text-contrast shadow py-2 px-4 focus:shadow-outline block w-full"
              type="submit"
            >
              Create Account
            </button>
          </div>
          <div className="flex items-center mt-4">
            <p className="align-baseline text-sm">
              Already have an account? &nbsp;
              <Link className="inline underline" to="/account">
                Sign in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export async function callAccountCreateApi({
  email,
  password,
  firstName,
  lastName,
}) {
  try {
    const res = await fetch(`/account/register`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, firstName, lastName }),
    });
    if (res.status === 200) {
      return {};
    } else {
      return res.json();
    }
  } catch (error) {
    return {
      error: error.toString(),
    };
  }
}

export default RegistrationForm;
