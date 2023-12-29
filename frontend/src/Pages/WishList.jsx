import React from "react";
import Meta from "../mainpageComponents/Meta";
import BreadCrumb from "../mainpageComponents/BreadCrumb";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../layouts/Loader";
import { removeItemFromWish } from "../slices/wishSlice";
import { Link } from "react-router-dom";

const WishList = () => {
  const { items, loading } = useSelector((state) => state.wishState);
  const dispatch = useDispatch();
  return (
    <div>
      <Meta title={"Your Favorites"} />
      <BreadCrumb title="Your Favorites" />
      {loading ? (
        <Loader />
      ) : (
        <div className="wishlist-wrapper home-wrapper-2 py-5">
          <div className="container-xxl">
            <div className="row">
              {items &&
                items.map((item) => (
                  // <Link to={`/product/${item.product}`}>
                  <div className="col-3" key={item.product}>
                    {/* <Link to={`/product/${item._id}`}> */}

                    <div className="wishlisst-card position-relative">
                      <img
                        src="/Images/cross-23.png"
                        alt=""
                        className="position-absolute cross img-fluid"
                        style={{marginBottom:"20px"}}
                        onClick={()=>dispatch(removeItemFromWish(item.product))}
                      />

                      <div className="wishlist-card-image">
                        <img
                          src={item.image}
                          className="img-fluid w-100"
                          style={{objectFit:"contain"}}
                          alt="macreme"
                        />
                      </div>
                      <div className="py-3 details">
                      <Link to={`/product/${item.product}`}> <h5 className="title">{item.name}</h5></Link>
                        <h6 className="price">₹{item.price}</h6>
                      </div>
                    </div>
                    
                  </div>
                  // </Link>
                  
                  ))}
        
              {/* <div className='col-3'>
                            <div className='wishlisst-card position-relative'>
                                <img src='/Images/cross-23.png' alt='' className='position-absolute cross img-fluid' />
                                <div className='wishlist-card-image'>
                                    <img src='/Images/macreme-5.jpeg' className='img-fluid w-100' alt='macreme' />
                                </div>
                                <div className='py-3 details'>
                                    <h5 className='title'>Lorem ispum</h5>
                                    <h6 className='price'>$100.00</h6>
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='wishlisst-card position-relative'>
                                <img src='/Images/cross-23.png' alt='' className='position-absolute cross img-fluid' />
                                <div className='wishlist-card-image'>
                                    <img src='/Images/macreme-5.jpeg' className='img-fluid w-100' alt='macreme' />
                                </div>
                                <div className='py-3 details'>
                                    <h5 className='title'>Lorem ispum</h5>
                                    <h6 className='price'>$100.00</h6>
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

export default WishList;
