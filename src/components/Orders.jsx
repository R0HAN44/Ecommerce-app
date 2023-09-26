import React from "react";
import Header from "./Header";
import { useSelector } from "react-redux";
import { selectOrders } from "../slices/basketSlice";
import Order from "./Order";

function Orders() {
  const orders = useSelector(selectOrders);
  // console.log(orders, "orfra page");
  return (
    <div>
      <Header />
      <main className="max-w-screen-lg mx-auto p-10">
        <h1 className="text-3xl border-b mb-2 pb-1 border-yellow-400">
          Your Orders
        </h1>
        {orders.length > 0 ? (
          <h2 className="font-bold">{orders.length} Orders</h2>
        ) : (
          <h2 className="font-bold">No Orders</h2>
        )}
        <div className="mt-5 space-y-4 flex flex-col">
          {orders?.map(({ date, it, id }) => (
            <Order key={id} id={id} date={date} items={it} />
          ))}
          {/* {items.length > 0 && (
            <div className="border rounded-md flex items-center space-x-10 p-5 bg-gray-100  text-gray-600 font-bold text-2xl justify-between">
              <div>
                Grand total ={"₹"}
                {Math.floor(grandTotal * 80)}
              </div>
              <div>{items.length} Items</div>
            </div>
          )} */}
        </div>
      </main>
    </div>
  );
}

export default Orders;
