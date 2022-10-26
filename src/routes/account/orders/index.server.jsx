import { Link, Image } from "@shopify/hydrogen";
import { Layout } from "../../../components/Layout.server";

function Orders() {
  return (
    <Layout>
      <div>
        <h2 className="mb-8">You have 3 orders!</h2>
        <ul className="orders grid gap-4 ">
          <li className="shadow-md p-8 border border-stone-300">
            <Link to="/orders/1">
              <div className="order-meta grid gap-2 text-center">
                <p>4 Items</p>
                <p>
                  4 Products
                  {/*  {4 === 1 ? "" : "s"} */}
                </p>
                <p>350 USD</p>
              </div>
              <div className="order-images grid gap-x-3 mt-4">
                <img
                  className="h-28 object-cover w-full"
                  src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt="an example of product"
                />
              </div>
            </Link>
          </li>

          <li className="shadow-md p-8 border border-stone-300">
            <Link to="/orders/1">
              <div className="order-meta grid gap-2 text-center">
                <p>4 Items</p>
                <p>
                  4 Products
                  {/*  {4 === 1 ? "" : "s"} */}
                </p>
                <p>350 USD</p>
              </div>
              <div className="order-images grid gap-x-3 mt-4">
                <img
                  className="h-28 object-cover w-full"
                  src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt="an example of product"
                />
                <img
                  className="h-28 object-cover w-full"
                  src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt="an example of product"
                />
                <img
                  className="h-28 object-cover w-full"
                  src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt="an example of product"
                />
                <img
                  className="h-28 object-cover w-full"
                  src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt="an example of product"
                />
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </Layout>
  );
}

export default Orders;
