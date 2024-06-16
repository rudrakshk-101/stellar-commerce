import React from "react";
import { useNavigate } from "react-router-dom";
import CartIcon from "../Icons/CartIcon";
import QuantityButton from "./QuantityButton";

const Description = ({ quant, onAdd, onRemove,title , description, price, discount,brand,productId,setLoader}) => {
  const navigateTo = useNavigate();
const handleAddToCart = async() => {
  setLoader(true);
  const response = await fetch('http://localhost:4500/api/user/addToCart',
  {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({productId,quantity: quant,userId: localStorage.getItem('userId')})
  });
  const data = await response.json();
  setLoader(false);
  navigateTo('/cart');
}
  return (
    <section className="description" style={{
      marginRight: '5vw'
    }}>
      <p className="pre">{brand}</p>
      <h1 className="text-white" style={{color: 'white'}}>{title}</h1>
      <p className="desc">
        {description}
      </p>
      <div className="price">
        <div className="main-tag">
          <p>₹{Math.floor(price-(discount/100*price)).toFixed(2)}</p>
          <p>-{discount}%</p>
        </div>
        <s>₹{parseInt(price).toFixed(2)}</s>
      </div>
      <div className="buttons">
        <QuantityButton quant={quant} onRemove={onRemove} onAdd={onAdd} />
        <button
          className="add-to-cart"
          onClick={handleAddToCart}
        >
          <CartIcon />
          Add To Cart
        </button>
      </div>
    </section>
  );
};

export default Description;
