import React, { useEffect, useState } from "react";
import ProductCard from "./productCard";

const BookSection = ({setLoader}) => {
  const [array,setArray] = useState([]);
  const xyz = async()=> {
    setLoader(true);
    const response = await fetch('http://localhost:4500/api/product/findProductsByCategory',{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({category: 'apparel'})
    });
    const data = await response.json();
    setArray(data.slice(0,5));
    setLoader(false);
  }
  useEffect(()=>{
    xyz();
  },[])
  return (
    <div className="productCardContainer">
      <h1 className="recommendedH1">Apparels</h1>
      {array.map((product,index)=>
        <ProductCard data={product} key={index} />
      )}
    </div>
  );
};

export default BookSection;
