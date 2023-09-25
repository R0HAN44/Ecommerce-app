import React from "react";
import Header from "./Header";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";
import Order from "./Order";
import Currency from "react-currency-formatter";

function Orders() {
  const items = useSelector(selectItems);
  const grandTotal = items.reduce((total, item) => total + item.price, 0);
  const counts = {};
  let jsonObject = items.map(JSON.stringify);
  let uniqueSet = new Set(jsonObject);
  let newItems = Array.from(uniqueSet).map(JSON.parse);
  items.forEach((item) => {
    counts[item.id] = (counts[item.id] || 0) + 1;
  });
  return (
    <div>
      <Header />
      <main className="max-w-screen-lg mx-auto p-10">
        <h1 className="text-3xl border-b mb-2 pb-1 border-yellow-400">
          Your Orders
        </h1>
        {items.length > 0 ? (
          <h2 className="font-bold">{items.length} Orders</h2>
        ) : (
          <h2 className="font-bold">No Orders</h2>
        )}
        <div className="mt-5 space-y-4 flex flex-col">
          {newItems?.map((item, i) => (
            <Order
              key={i}
              id={item.id}
              title={item.title}
              rating={item.rating}
              price={item.price}
              description={item.description}
              category={item.category}
              image={item.image}
              hasPrime={item.hasPrime}
              quantity={counts[item.id]}
            />
          ))}
          {items.length > 0 && (
            <div className="border rounded-md flex items-center space-x-10 p-5 bg-gray-100  text-gray-600 font-bold text-2xl justify-between">
              <div>
                Grand total ={" "}
                <Currency
                  quantity={Math.floor(grandTotal * 80)}
                  currency="INR"
                />
              </div>
              <div>{items.length} Items</div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default Orders;
