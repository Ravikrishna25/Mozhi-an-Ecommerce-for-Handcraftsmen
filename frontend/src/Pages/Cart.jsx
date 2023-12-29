import React, { useEffect, useState } from "react";
import Meta from "../mainpageComponents/Meta";
import BreadCrumb from "../mainpageComponents/BreadCrumb";
import Wood from "../Images/woodMandala.jpeg";
import { AiFillDelete } from "react-icons/ai";
// import React, { Fragment } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  decreaseCartItemQty,
  increaseCartItemQty,
  removeItemFromCart,
} from "../slices/cartSlice";
import ReactStars from "react-rating-stars-component";

const Cart = () => {
  const [number, setNumber] = useState("1");
  useEffect(() => {
    console.log(number);
  }, [number]);
  const { items } = useSelector((state) => state.cartState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const increaseQty = (item) => {
    const count = item.quantity;
    if (item.stock == 0 || count >= item.stock) return;
    dispatch(increaseCartItemQty(item.product));
  };
  const decreaseQty = (item) => {
    const count = item.quantity;
    if (count == 1) return;
    dispatch(decreaseCartItemQty(item.product));
  };
  const checkOutHandler = () => {
    navigate("/login?redirect=shipping");
  };
  return (
    <div>
      <Meta title={"Cart"} />
      <BreadCrumb title="Cart" />
      {items.length == 0 ? (
        <h2 className="mt-5">Your Cart is Empty</h2>
      ) : (
        <section className="cart-wrapper home-wrapper-2">
          <h2 className="ms-5">
            Your Cart: <b>{items.length} items</b>
          </h2>

          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <div className="cart-header py-3 d-flex justify-content-between align-items-center">
                  <h4 className="cart-col-1">Product</h4>
                  <h4 className="cart-col-2">Price</h4>
                  <h4 className="cart-col-3">Quantity</h4>
                  <h4 className="cart-col-4">Total</h4>
                </div>
                {items.map((item) => (
                  <div className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center">
                    <div className="cart-col-1 gap-15 d-flex align-items-center">
                      <div className="w-25">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="img-fluid"
                        />
                      </div>
                    <Link to={`/product/${item.product}`}>
                      <div className="w-75">
                        <p>{item.name}</p>
                        <ReactStars
                          count={5}
                          size={24}
                          value={item.ratings}
                          edit={false}
                          activeColor="#ffd700"
                        />
                        <p>Category : {item.category}</p>
                        <p>Seller : {item.seller}</p>
                      </div>
                    </Link>
                    </div>
                    <div className="cart-col-2">
                      <h5 className="price">₹{item.price}</h5>
                    </div>
                    <div
                      className="cart-col-3 d-flex align-items-center gap-15"
                      key={item.product}
                    >
                      <div style={{display:"flex",justifyContent:"space-between"}}>
                        {/* <input
                        className="form-control"
                        min={1}
                        max={item.stock}
                        type="number"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                      /> */}
                        <span
                          className="btn  minus"
                          onClick={() => decreaseQty(item)}
                          style={{color:"white"}}
                        >
                          -
                        </span>
                        <input
                          type="number"
                          className="form-control count d-inline"
                          value={item.quantity}
                          style={{ width: "55px" }}
                          readOnly
                        />

                        <span
                          className="btn  plus"
                          onClick={() => increaseQty(item)}
                        >
                          +
                        </span>
                      </div>
                      <div>
                        <AiFillDelete type="button" className="text-danger" onClick={()=>dispatch(removeItemFromCart(item.product))} />
                      </div>
                    </div>
                    <div className="cart-col-4">
                      <h5 className="price">₹{item.price * item.quantity}</h5>
                    </div>
                  </div>
                ))}
              </div>
              <div className="col-12 py-2 mt-4">
                <div className="d-flex justify-content-between align-items-baseline">
                  <Link to={"/"} className="button">
                    Continue To Shopping
                  </Link>
                  <div className="d-flex flex-column align-items-end">
                    <h4>Items:{items.reduce((acc,item)=>(acc + item.quantity),0)} (Units)</h4>
                    <h4>SubTotal: ₹{items.reduce((acc,item)=>(acc + item.quantity*item.price),0)}</h4>
                    <p>Taxes and Shipping caluculated at checkout</p>
                    <button  className="button" onClick={checkOutHandler}>
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Cart;
