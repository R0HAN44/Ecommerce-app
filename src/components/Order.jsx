import React from "react";

function Order({ key, id, date, items }) {
  // console.log(items);
  const images = items.map((item) => item.image);
  const totalPrice = items.reduce((total, curr, index) => {
    return total + items[index].price;
  }, 0);
  // console.log(totalPrice);

  return (
    <div className="relative border rounded-md">
      <div className="flex items-center space-x-10 p-5 bg-gray-100 text-sm text-gray-600">
        <div>
          <p className="font-bold text-xs">ORDER PLACED</p>
          <p>{date}</p>
        </div>
        <div>
          <p className="text-xs font-bold">TOTAL</p>
          <p>
            {"₹"}
            {Math.floor(totalPrice * 80)}
          </p>
        </div>
        <p className="text-sm whitespace-nowrap sm:text-xl self-end flex-1 text-right text-blue-500">
          {items.length} items
        </p>
        <p className="absolute top-2 right-2 w-40 lg:w-72 truncate text-xs whitespace-nowrap">
          ORDER #{id}
        </p>
      </div>
      <div className="p-5 sm:p-10">
        <div className="flex space-x-6 overflow-x-auto ">
          {images.map((image) => (
            <img
              key={key}
              src={image}
              className="h-20 object-contain sm:h-32"
            ></img>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Order;
