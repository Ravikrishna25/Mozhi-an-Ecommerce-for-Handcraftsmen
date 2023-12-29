import React,{useState} from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import { BsFillHeartFill } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import { BsFillEyeFill } from "react-icons/bs";
import { BiGitCompare } from "react-icons/bi";
import handweaving from "../Images/handweaving.jpg";
import handloom from "../Images/handloomsaree.jpeg";
import { addWishItem } from "../actions/wishActions";
import { useDispatch } from "react-redux";
import { addCompItem } from "../actions/compActions";
import { addCartItem } from "../actions/cartActions";

const Product = ({ product, col }) => {
  const [ quantity,setQuantity]= useState(1)

  const { grid } = col;
  let location = useLocation();
  const dispatch = useDispatch();

  return (
    <>
      <div className="container-xxl">
        <div className="row">
          <div className="col-5">
            <Link
              to={`/product/${product._id}`}
              className="product-card position-relative"
            >
              <div className="wishlist-icon position-absolute">
                <Link>
                  <BsFillHeartFill
                    size={20}
                    color="black"
                    onClick={() => {
                      dispatch(addWishItem(product._id));
                    }}
                  />
                </Link>
              </div>

              <div className="product-image">
                <img
                  src={product.images[0].image}
                  className="img-fluid"
                  alt="first product"
                  style={{width:"250px",height:"250px"}}
                  // height={400}
                  // width={400}
                  />
                <img
                  src={product.images[1].image}
                  className="img-fluid"
                  alt="first product"
                  style={{width:"250px",height:"250px"}}
                  // height={400}
                  // width={400}
                />
              </div>
              <br />
              <div className="product-details">
                <h6 className="brand">{product.name}</h6>
                <h5 className="product-title">{product.description}</h5>
                <ReactStars
                  count={5}
                  size={24}
                  value={product.ratings}
                  edit={false}
                  activeColor="#ffd700"
                />

                <p className="price">₹{product.price}</p>
              </div>

              <div className="action-bar position-absolute">
                <div className="d-flex flex-column gap-15">
                  <Link to={`/product/${product._id}`}>
                    <BsFillEyeFill size={20} color="black" />
                  </Link>
                  <Link>
                    <BiCart
                      size={20}
                      color="black"
                      onClick={() => {
                        dispatch(addCartItem(product._id, quantity));
                      }}
                    />
                  </Link>
                  <Link>
                    <BiGitCompare
                      size={20}
                      color="black"
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(addCompItem(product._id, quantity));
                      }}
                    />
                  </Link>
                </div>
              </div>
            </Link>
          </div>
          {/* <div className={` ${location.pathname == "/store" ? `gr-${grid}` : "col-4"} `}>
                        <Link to={"/product/:id"} className='product-card position-relative'>
                            <div className='wishlist-icon position-absolute'>
                                <Link>
                                    <BsFillHeartFill size={20} color='black' />
                                </Link>
                            </div>
                            <div className='product-image'>
                                <img src={handweaving} className='img-fluid' alt='first product' />
                                <img src={handloom} className='img-fluid' alt='first product' />
                            </div>
                            <div className='product-details'>
                                <h6 className='brand'>Handweaved cloths</h6>
                                <h5 className='product-title'>
                                     Alpha heaadphones bulk 10 pack multi colored for students
                                </h5>
                                <ReactStars
                                    count={5}
                                    size={24}
                                    value={3}
                                    edit={false}
                                    activeColor="#ffd700"
                                />
                                <p className={` description ${grid === 12 ? "d-block" : "d-none"}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua</p>
                                <p className='price'>$100.00</p>
                            </div>
                            <div className='action-bar position-absolute'>
                                <div className='d-flex flex-column gap-15'>
                                    <Link>
                                        <BsFillEyeFill size={20} color='black' />
                                    </Link>
                                    <Link>
                                        <BiCart size={20} color='black' />
                                    </Link>
                                    <Link>
                                        <BiGitCompare size={20} color='black' />
                                    </Link>
                                </div>
                            </div>
                        </Link>
                    </div> */}
        </div>
      </div>
    </>
  );
};

export default Product;
