import React from "react";
import Meta from "../mainpageComponents/Meta";
import BreadCrumb from "../mainpageComponents/BreadCrumb";
import Color from "../mainpageComponents/Color";
import { useDispatch, useSelector } from "react-redux";
import ReactStars from "react-rating-stars-component";
import { removeItemFromComp } from "../slices/compSlice";
import { Link } from "react-router-dom";

const CompareProducts = () => {
  const { items } = useSelector((state) => state.compareState);
  const dispatch = useDispatch();
  return (
    <div>
      <Meta title={"Compare Products"} />
      <BreadCrumb title="Compare Products" />
      {items.length == 0 ? (
        <h2 className="mt-5">Your Compare Products is Empty</h2>
      ) : (
        
        <div className="compare-product-wrapper py-5 home-wrapper-2">
          <div className="container-xxl">
            <div className="row">
              {items.map((item) => (
                <div className="col-3" key={item.product}>
                  <div className="compare-product-card position-relative">
                    <img
                      src="/Images/cross-23.png"
                      alt=""
                      className="position-absolute cross"
                   
                      onClick={() => dispatch(removeItemFromComp(item.product))}
                    />
                    <br />
                    <div className="product-card-image" >
                      <img
                        src={item.image}
                        className="img-fluid"
                        alt="macreme"
                        style={{width:"250px"}}
                        
                      />
                    </div>
                    <div className="compare-product-details">
                  <Link to={`/product/${item.product}`}>
                      <h5 className="title">{item.name}</h5>
                          </Link>
                      <h6 className="price mb-3 mt-3">₹{item.price}</h6>
                      <div>
                        <div className="product-details">
                          <h5>Category:</h5>
                          <p>{item.category}</p>
                        </div>
                        <div className="product-details">
                          <h5>Seller:</h5>
                          <p>{item.seller}</p>
                        </div>
                        <div className="product-details">
                          <h5>Availability:</h5>
                          <span
                            className={
                              item.stock > 0 ? "greenColor" : "redColor"
                            }
                            id="stock_status"
                          >
                            {item.stock > 0 ? "In Stock" : "Out of Stock"}
                          </span>
                        </div>
                        <div className="product-details">
                          <h5>Rating:</h5>
                          <ReactStars
                            count={5}
                            size={24}
                            value={item.ratings}
                            edit={false}
                            activeColor="#ffd700"
                          />
                        </div>
                        <div className="product-details">
                          <h5>Size:</h5>
                          <div className="d-flex gap-10">
                            <p>S</p>
                            <p>M</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {/* <div className='col-3'>
                            <div className='compare-product-card position-relative'>
                                <img src='/Images/cross-23.png' alt='' className='position-absolute cross' />
                                <div className='product-card-image'>
                                    <img src='/Images/macreme-5.jpeg' className='img-fluid' alt='macreme' />
                                </div>
                                <div className='compare-product-details'>
                                    <h5 className='title'>Lorem ispum</h5>
                                    <h6 className='price mb-3 mt-3'>$100.00</h6>
                                    <div>
                                        <div className='product-details'>
                                            <h5>Brand:</h5>
                                            <p>Havels</p>
                                        </div>
                                        <div className='product-details'>
                                            <h5>Type:</h5>
                                            <p>Macreme</p>
                                        </div>
                                        <div className='product-details'>
                                            <h5>Availability:</h5>
                                            <p>In stock</p>
                                        </div>
                                        <div className='product-details'>
                                            <h5>Color:</h5>
                                            <Color />
                                        </div>
                                        <div className='product-details'>
                                            <h5>Size:</h5>
                                            <div className='d-flex gap-10'>
                                                <p>S</p>
                                                <p>M</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='compare-product-card position-relative'>
                                <img src='/Images/cross-23.png' alt='' className='position-absolute cross' />
                                <div className='product-card-image'>
                                    <img src='/Images/macreme-5.jpeg' className='img-fluid' alt='macreme' />
                                </div>
                                <div className='compare-product-details'>
                                    <h5 className='title'>Lorem ispum</h5>
                                    <h6 className='price mb-3 mt-3'>$100.00</h6>
                                    <div>
                                        <div className='product-details'>
                                            <h5>Brand:</h5>
                                            <p>Havels</p>
                                        </div>
                                        <div className='product-details'>
                                            <h5>Type:</h5>
                                            <p>Macreme</p>
                                        </div>
                                        <div className='product-details'>
                                            <h5>Availability:</h5>
                                            <p>In stock</p>
                                        </div>
                                        <div className='product-details'>
                                            <h5>Color:</h5>
                                            <Color />
                                        </div>
                                        <div className='product-details'>
                                            <h5>Size:</h5>
                                            <div className='d-flex gap-10'>
                                                <p>S</p>
                                                <p>M</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='compare-product-card position-relative'>
                                <img src='/Images/cross-23.png' alt='' className='position-absolute cross' />
                                <div className='product-card-image'>
                                    <img src='/Images/macreme-5.jpeg' className='img-fluid' alt='macreme' />
                                </div>
                                <div className='compare-product-details'>
                                    <h5 className='title'>Lorem ispum</h5>
                                    <h6 className='price mb-3 mt-3'>$100.00</h6>
                                    <div>
                                        <div className='product-details'>
                                            <h5>Brand:</h5>
                                            <p>Havels</p>
                                        </div>
                                        <div className='product-details'>
                                            <h5>Type:</h5>
                                            <p>Macreme</p>
                                        </div>
                                        <div className='product-details'>
                                            <h5>Availability:</h5>
                                            <p>In stock</p>
                                        </div>
                                        <div className='product-details'>
                                            <h5>Color:</h5>
                                            <Color />
                                        </div>
                                        <div className='product-details'>
                                            <h5>Size:</h5>
                                            <div className='d-flex gap-10'>
                                                <p>S</p>
                                                <p>M</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompareProducts;
