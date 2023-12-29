
import React, { Fragment, useEffect, useState } from "react";

import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import { BiCart } from "react-icons/bi";
// import { BiSolidCart } from "react-icons/bi";
import { BiSolidCart } from 'react-icons/bi';

import { BsFillEyeFill } from "react-icons/bs";
import { BiGitCompare } from "react-icons/bi";
import { BsFillHeartFill } from "react-icons/bs";

import { useDispatch, useSelector } from "react-redux";

import { getProducts } from "../actions/productActions";
import Loader from "../layouts/Loader";

import { toast } from "react-toastify";
import Pagination from "react-js-pagination";
import { addWishItem } from "../actions/wishActions";
import { addCartItem } from "../actions/cartActions";
import { addCompItem } from "../actions/compActions";

function sanitizeFileName(fileName) {
  return fileName.replace(/\s+/g, ""); // Remove all whitespace
}

const ProductsPage = () => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  

  const { products, loading, error, productsCount, resPerPage } = useSelector(
    (state) => state.productsState
  );
  const [currentPage, setCurrentPage] = useState(1);

  const setCurrentPageNo = (pageNo) => {
    setCurrentPage(pageNo);
    // console.log(currentPage);
  };

  useEffect(() => {
    if (error) {
      return toast.error(error, { position: toast.POSITION.BOTTOM_CENTER });
    }
    dispatch(getProducts(null, null, null, null, currentPage));
    console.log(currentPage);
  }, [error, dispatch, currentPage]);

  return (
    <div>
      {/* <Fragment> */}
      {loading ? (
        <Loader />
      ) : (
        <section className="featured-wrapper py-5 home-wrapper-2">
          <div className="container-xxl">
            <div className="row">
              {products &&
                products.map((product) => (
                  <div className="col-3" key={product._id}>
                    <Link className="product-card position-relative">
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
                        {/* <img
                          src={product.images[0].image}
                          className="img-fluid"
                          alt="first product"
                          style={{width:"250px",height:"250px"}}
                        /> */}
                        {console.log(sanitizeFileName(product.images[0].image))}
                        <img
                          src={sanitizeFileName(product.images[0].image)}
                          className="img-fluid"
                          alt="first product"
                          style={{ width: "250px", height: "250px" }}
                        />
                       
                        <img
                          src={sanitizeFileName(product.images[1].image)}
                          className="img-fluid"
                          alt="first product"
                          style={{
                            width: "250px",
                            height: "250px",
                            objectFit: "contain",
                          }}
                        />
                      </div>
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
                            <BsFillEyeFill size={20} color="black"/>
                          </Link>
                          <Link>
                            <BiCart
                              size={20}
                              color="red"
                              onClick={() => {
                                dispatch(addCartItem(product._id, quantity));
                              }}
                              style={{fill:"black"}}
                              
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
                ))}
            </div>
          </div>
          {productsCount > 0 && productsCount > resPerPage ? (
            <div className="d-flex justify-content-center mt-5">
              <Pagination
                activePage={currentPage}
                onChange={setCurrentPageNo}
                totalItemsCount={productsCount}
                itemsCountPerPage={resPerPage}
                nextPageText={"Next"}
                firstPageText={"First"}
                lastPageText={"Last"}
                itemClass={"page-item"} //bootstrap class
                linkClass={"page-link"}
              />
            </div>
          ) : null}
        </section>
      )}

      {/* </Fragment> */}
    </div>
  );
};

export default ProductsPage;
