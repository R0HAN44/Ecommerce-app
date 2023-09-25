import React, { useEffect, useState } from "react";
import {
  ShoppingCartIcon,
  MagnifyingGlassIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
// import { useDispatch, useSelector } from "react-redux";
import { getAuth, signInWithPopup, signOut } from "firebase/auth";
// import {login, logout, selectUser } from "../slices/userSlice";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

function Header() {
  // const user = useSelector(selectUser)
  // const dispatch = useDispatch();
  const navigateTo = useNavigate();
  const [username, setusername] = useState("");
  const [value, setValue] = useState("");
  const items = useSelector(selectItems);
  const handlelogout = () => {
    setValue(localStorage.getItem("email"));
    if (!value) {
      signInWithPopup(auth, provider).then((data) => {
        setValue(data.user.email);
        setusername(data.user.displayName);
        localStorage.setItem("email", data.user.email);
        localStorage.setItem("username", data.user.displayName);
      });
      //   dispatch(login({
      //   email:localStorage.getItem('email')
      // }))
    } else {
      // dispatch(logout())
      signOut(getAuth());
      localStorage.clear();
      setValue("");
      setusername("");
    }
  };

  useEffect(() => {
    setusername(localStorage.getItem("username"));
    setValue(localStorage.getItem("email"));
  }, []);

  return (
    <header>
      {/* Top header */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <img
            src="https://links.papareact.com/f90"
            alt="adadad"
            className="cursor-pointer mx-2 w-36 object-contain"
            onClick={() => {
              navigateTo("/");
            }}
          />
        </div>
        {/* Search bar */}
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500 mx-2">
          <input
            type="text"
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
          />

          <MagnifyingGlassIcon className="h-12 p-4" />
        </div>
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div onClick={handlelogout} className="link cursor-pointer">
            <p className="hover:underline">
              {`Hello, ${value ? username : "Sign In"}`}
            </p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>
          <div className="link">
            <p>Return</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <div
            onClick={() => {
              navigateTo("/checkout");
            }}
            className="relative link flex items-center"
          >
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
              {items.length}
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="font-extrabold md:text-sm hidden md:inline mt-2">
              Basket
            </p>
          </div>
        </div>
      </div>
      {/* Bottom header */}
      <div className="flex items-center bg-amazon_blue-light text-white text-sm space-x-3 p-2 pl-6">
        <p className="link flex items-center">
          <Bars3Icon className="h-6 mr-1" />
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Todays's Deals</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Health & Personal Care</p>
      </div>
    </header>
  );
}

export default Header;
