import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Product.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux-toolkit/slice/ProductSlice";
const Product = () => {
  const [ProductList, setProductList] = useState([]);
 const dispatch = useDispatch()

  const getProductList = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProductList(response.data);
    } catch (e) {}
  };

  useEffect(() => {
    getProductList();
  }, []);
  return (
    <div className="row d-flex justify-content-evenly w-100">
      {ProductList?.map((e) => (
        <div
          key={e?.id}
          className="card col-md-4 m-3"
          style={{
            width: "18rem",
            marginBottom: "10px",
          }}
        >
          <div className="text-center h-100">
            <img
              src={e?.image}
              className="pt-2 card-img-top"
              alt="..."
              style={{ width: "100px", height: "130px" }}
            />
          </div>
          <div className="card-body">
            <h5 className="cart-title">{e?.title}</h5>
            <p className="card-title">${e?.price}</p>
            <button onClick={() => dispatch(addToCart(e))} className="btn btn-primary add-cart-btn">
              Add To Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
