import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromCart } from '../../redux-toolkit/slice/ProductSlice'
const ViewCart = () => {
    let ProductList = useSelector((state) => state.product);
    let dispatch = useDispatch();
  return (
    <div>
        <Link to="/">Back</Link>
        <div className="row d-flex justify-content-around w-100">
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
            <button onClick={() => dispatch(removeFromCart(e?.id))} className="btn btn-danger add-cart-btn">
              Remove from Cart
            </button>
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default ViewCart