import React from "react";
import { useSelector } from "react-redux";
import "./Cart.css";
import { Link } from "react-router-dom";
const Cart = () => {
  let product = useSelector((state) => state.product);

  const totalPrice = product.reduce((a, b) => {
    return a + b.price;
  }, 0);

  return (
    <div className="cart-nav">
      <nav className="navbar navbar-light bg-light">
        <span>
          <h1>Total Price $ {totalPrice}</h1>
        </span>
        <span className="cart-notification">
          <Link to="/view-cart">
              <span>cart</span><span className="total-cart">{product?.length}</span>
          </Link>
        </span>
      </nav>
    </div>
  );
};

export default Cart;
