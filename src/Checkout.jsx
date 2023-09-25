import React from "react";
import Header from "./components/Header";
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "./slices/basketSlice";
import CheckoutProduct from "./components/CheckoutProduct";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);

  const navigateTo = useNavigate();

  return (
    <div className="bg-gray-100 ">
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto">
        <div className="flex-grow m-5 shadow-sm">
          <img
            src="https://links.papareact.com/ikj"
            width={1020}
            height={250}
          />

          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">
              {items.length === 0
                ? "Your Amazon Basket is Empty"
                : "Shopping basket"}
            </h1>

            {items.map((item, i) => (
              <CheckoutProduct
                key={i}
                id={item.id}
                title={item.title}
                rating={item.rating}
                price={item.price}
                description={item.description}
                category={item.category}
                image={item.image}
                hasPrime={item.hasPrime}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col bg-white p-10 shadow-md">
          {items.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">
                Subtotal ({items.length} items):{" "}
                <span className="font-bold">
                  {"₹"}
                  {Math.floor(total * 80)}
                </span>
              </h2>
              <button
                role="link"
                onClick={() => {
                  navigateTo("/success");
                }}
                className={`button mt-2`}
              >
                Proceed to checkout
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default Checkout;
