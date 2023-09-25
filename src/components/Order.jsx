import React from "react";
import Currency from "react-currency-formatter";

function Order({
  key,
  id,
  title,
  rating,
  price,
  description,
  category,
  image,
  hasPrime,
  quantity,
}) {
  const date = new Date();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let day = date.getDate();
  let month = months[date.getMonth()];
  let year = date.getFullYear();
  let currentDate = `${day} ${month} ${year}`;
  return (
    <div className="relative border rounded-md">
      <div className="flex items-center space-x-10 p-5 bg-gray-100 text-sm text-gray-600">
        <div>
          <p className="font-bold text-xs">ORDER PLACED</p>
          <p>{currentDate}</p>
        </div>
        <div>
          <p className="text-xs font-bold">TOTAL</p>
          <p>
            <Currency
              quantity={Math.floor(price * quantity * 80)}
              currency="INR"
            />
          </p>
        </div>
        <p className="text-sm whitespace-nowrap sm:text-xl self-end flex-1 text-right text-blue-500">
          {quantity} items
        </p>
        <p className="absolute top-2 right-0 w-20 lg:w-20 truncate">
          ORDER # {id}
        </p>
      </div>
      <div className="p-5 sm:p-10">
        <div className="flex justify-center items-center">
          <img src={image} className="object-contain h-56" />
        </div>
      </div>
    </div>
  );
}

export default Order;
