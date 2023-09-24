import React, { useEffect, useState } from "react";
import "./styles/App.css";
import Banner from "./components/Banner";
import Header from "./components/Header";
import ProductFeed from "./Components/ProductFeed";
export default function App() {
  const [products, setproducts] = useState([])
  useEffect(() => {
    fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  ).then((data)=>setproducts(data))
  
   
  }, [])
  
  
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="max-w-screen-2xl mx-auto">
        {/* Banner */}
        <Banner />

        {/* ProductFeed */}
        <ProductFeed products={products} />
      </main>
    </div>
  );
}



//GET >>  https://fakestoreapi.com/products
