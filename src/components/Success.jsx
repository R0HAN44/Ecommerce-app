import React from "react";
import Header from "./Header";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToOrder } from "../slices/basketSlice";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { selectUser } from "../slices/userSlice";
function Success() {
  const navigateTo = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const handleButton = () => {
    navigateTo("/orders");
  };
  return (
    <div className="bg-gray-100 h-screen">
      <Header />
      <main className="max-w-screen-lg mx-auto">
        <div className="flex flex-col p-10 bg-white">
          <div className="flex items-center space-x-2 mb-5">
            <CheckCircleIcon className="text-green-500 h-10 " />
            <h1 className="text-3xl">
              Thank you, your order has been confirmed!
            </h1>
          </div>
          <p>
            Thank you for shopping with us. If you would like to check the
            status of order(s) please click the link below.
          </p>
          <button onClick={handleButton} className="button mt-8">
            Go to my orders
          </button>
        </div>
      </main>
    </div>
  );
}

export default Success;
