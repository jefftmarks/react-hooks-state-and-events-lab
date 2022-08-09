import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false);

  const cartStatus = isInCart ? "in-cart" : "";

  const handleCartStatus = () => {
    setIsInCart((isInCart) => !isInCart)
  }

  return (
    <li className={cartStatus}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleCartStatus} className="add">{isInCart ? "Add to Cart" : "Remove From Cart"}</button>
    </li>
  );
}

export default Item;
