// import React, { useState } from 'react'
// import BreadCrumb from '../mainpageComponents/BreadCrumb'
// import Meta from '../mainpageComponents/Meta';
// import ReactStars from 'react-rating-stars-component';
// import Product from '../mainpageComponents/Product';
// import Color from '../mainpageComponents/Color';

// const OurStore = () => {
//     const [grid, setGrid] = useState(4);

//     return (
//         <div>
//             <Meta title={"Our Store"} />
//             <BreadCrumb title="Our Store" />
//             <div className='store-wrapper home-wrapper-2 py-5'>
//                 <div className='container-xxl'>
//                     <div className='row'>
//                         <div className='col-3'>
//                             <div className='filter-card mb-3'>
//                                 <h3 className='filter-title'>Shop By Categories</h3>
//                                 <div>
//                                     <ul className='ps-0'>
//                                         <li>Watch</li>
//                                         <li>Tv</li>
//                                         <li>Camera</li>
//                                         <li>Laptop</li>
//                                     </ul>
//                                 </div>
//                             </div>
//                             <div className='filter-card mb-3'>
//                                 <h3 className='filter-title'>Filter By</h3>
//                                 <div>
//                                     <h5 className='sub-title'>Availability</h5>
//                                     <div>
//                                         <div className='form-check'>
//                                             <input className='form-check-input' type='checkbox' value={""} id='' />
//                                             <label className='form-check-label' htmlFor="">In Stock(1)</label>
//                                         </div>
//                                         <div className='form-check'>
//                                             <input className='form-check-input' type='checkbox' value={""} id='' />
//                                             <label className='form-check-label' htmlFor="">Out Of Stock(0)</label>
//                                         </div>
//                                     </div>
//                                     <h5 className='sub-title'>Price</h5>
//                                     <div className='d-flex align-items-center gap-10'>
//                                         <div className="form-floating">
//                                             <input type="email" className="form-control" id="floatingInput" placeholder="From" />
//                                             <label htmlFor="floatingInput">From</label>
//                                         </div>
//                                         <div className="form-floating">
//                                             <input type="email" className="form-control" id="floatingInput1" placeholder="To" />
//                                             <label htmlFor="floatingInput1">To</label>
//                                         </div>
//                                     </div>
//                                     <h5 className='sub-title'>Colors</h5>
//                                     <div>
//                                         <Color />
//                                     </div>
//                                     <h5 className='sub-title'>Size</h5>
//                                     <div>
//                                         <div className='form-check'>
//                                             <input className='form-check-input' type='checkbox' value="" id="color-1" />
//                                             <label className='from-check-label' htmlFor='color-1'>S (2)</label>
//                                         </div>
//                                     </div>
//                                     <div>
//                                         <div className='form-check'>
//                                             <input className='form-check-input' type='checkbox' value="" id="color-2" />
//                                             <label className='from-check-label' htmlFor='color-2'>M (2)</label>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className='filter-card mb-3'>
//                                 <h3 className='filter-title'>Product Tags</h3>
//                                 <div>
//                                     <div className='product-tags d-flex flex-wrap align-items-center gap-10'>
//                                         <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
//                                             Headphone
//                                         </span>
//                                         <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
//                                             Laptop
//                                         </span>
//                                         <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
//                                             Mobile
//                                         </span>
//                                         <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
//                                             Wire
//                                         </span>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className='filter-card mb-3'>
//                                 <h3 className='filter-title'>Random Products</h3>
//                                 <div>
//                                     <div className='random-product mb-3 d-flex'>
//                                         <div className='w-50'>
//                                             <img src='/Images/macreme-2.jpeg' className='img-fluid' alt='' />
//                                         </div>
//                                         <div className='w-50'>
//                                             <h5>Lorem ipsum dolor sit amet, consectetur </h5>
//                                             <ReactStars
//                                                 count={5}
//                                                 size={24}
//                                                 value={4}
//                                                 edit={false}
//                                                 activeColor="#ffd700"
//                                             />
//                                             <b style={{ marginLeft: '6px', color: 'white' }}>$ 300</b>
//                                         </div>
//                                     </div>
//                                     <div className='random-product d-flex'>
//                                         <div className='w-50'>
//                                             <img src='/Images/macreme-2.jpeg' className='img-fluid' alt='' />
//                                         </div>
//                                         <div className='w-50'>
//                                             <h5>Lorem ipsum dolor sit amet, consectetur </h5>
//                                             <ReactStars
//                                                 count={5}
//                                                 size={24}
//                                                 value={4}
//                                                 edit={false}
//                                                 activeColor="#ffd700"
//                                             />
//                                             <b style={{ marginLeft: '6px', color: 'white' }}>$ 300</b>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className='col-9'>
//                             <div className='filter-sort-grid mb-4'>
//                                 <div className='d-flex justify-content-between align-items-center'>
//                                     <div className='d-flex align-items-center gap-10'>
//                                         <p className='mb-0 d-block' style={{ width: '100px' }}>Sort By:</p>
//                                         <select name='' className='form-control form-select' id=''>
//                                             <option value="manual">Featured</option>
//                                             <option value="best-selling">Alphabetically, Z-A</option>
//                                             <option value="price-ascending">Price, low to high</option>
//                                             <option value="price-descending">Price, high to low</option>
//                                             <option value="created-ascending">Date, old to new</option>
//                                             <option value="created-descending">Date, new to old</option>
//                                         </select>
//                                     </div>
//                                     <div className='d-flex align-items-center gap-10'>
//                                         <p className='totalproducts mb-0'>21 Product</p>
//                                         <div className='d-flex gap-10 align-items-center grid'>
//                                             <img
//                                                 onClick={() => {
//                                                     setGrid(3);
//                                                 }}
//                                                 src="/Images/menu3.png" className='d-block img-fluid' alt='grid' />
//                                             <img
//                                                 onClick={() => {
//                                                     setGrid(4);
//                                                 }}
//                                                 src="/Images/Menu1.png" className='d-block img-fluid' alt='grid' />
//                                             <img
//                                                 onClick={() => {
//                                                     setGrid(6);
//                                                 }}
//                                                 src="/Images/menu-4.png" cxlassName='d-block img-fluid' alt='grid' />
//                                             <img
//                                                 onClick={() => {
//                                                     setGrid(12);
//                                                 }}
//                                                 src="/Images/menu2.png" className='d-block img-fluid' alt='grid' />
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className='products-list pb-5'>
//                                 <div className='gap-10 flex-wrap' style={{ display: 'flex' }}>
//                                     <Product grid={grid} />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default OurStore;
import React, { Fragment, useEffect, useState } from "react";

import BreadCrumb from "../mainpageComponents/BreadCrumb";
import Meta from "../mainpageComponents/Meta";
import ReactStars from "react-rating-stars-component";
import Product from "../mainpageComponents/Product";
import Color from "../mainpageComponents/Color";
import { useDispatch, useSelector } from "react-redux";
// import MetaData from '../layouts/MetaData'
import { useLocation, useNavigate } from "react-router-dom";

import Loader from "../layouts/Loader";

import { toast } from "react-toastify";
import Pagination from "react-js-pagination"; 
import { getProducts } from "../actions/productActions";
import { useParams } from "react-router-dom";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Tooltip from "rc-tooltip";
import "rc-tooltip/assets/bootstrap.css";

const OurStore = () => {
  //   const [grid, setGrid] = useState(4);
  const dispatch = useDispatch();

  const { products, loading, error, productsCount, resPerPage } = useSelector(
    (state) => state.productsState
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([1, 1000]);
  const [priceChanged, setPriceChanged] = useState(price);
  const [category, setCategory] = useState(null);
  const [rating, setRating] = useState(0);
  const { keyword } = useParams();

  const navigate = useNavigate();
  const location = useLocation();

  const [keywords, setKeywords] = useState("art");
  const searchHandler = () => {
    //   e.preventDefault();//to prevent the browser load
    navigate(`/search/${keywords}`);
  };
  const clearKeyword = () => {
    setKeywords("");
  };

  useEffect(() => {
    if (location.pathname === "/") {
      return clearKeyword();
    }
  }, [location]);

  const categories = [
    "Ceramics",
    "Woodcrafts",
    "Textiles",
    "Metalwork",
    "Glassware",
    "Jewelry",
    "Pottery",
    "Leather Goods",
    "Fiber Art",
    "Metal Sculptures",
  ];

  const setCurrentPageNo = (pageNo) => {
    setCurrentPage(pageNo);
    // console.log(currentPage);
  };

  useEffect(() => {
    if (error) {
      return toast.error(error, { position: toast.POSITION.BOTTOM_CENTER });
    }

    dispatch(getProducts(keyword, priceChanged, category, rating, currentPage));
    console.log(currentPage);
  }, [error, dispatch, currentPage, keyword, priceChanged, category, rating]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const fromValue = Number(e.target.from.value);
    const toValue = Number(e.target.to.value);

    if (!isNaN(fromValue) && !isNaN(toValue)) {
      setPrice([fromValue, toValue]);
      setPriceChanged([fromValue, toValue]);
    }
    console.log(price);
    console.log(priceChanged);
  };

  return (
    <div>
      <Meta title={"Our Store"} />
      <BreadCrumb title="Our Store" />
      {loading ? (
        <Loader />
      ) : (
        <div className="store-wrapper home-wrapper-2 py-5">
          <div className="container-xxl">
            <div className="row">
              <div className="col-3">
                <div className="filter-card mb-3">
                  <h3 className="filter-title">Shop By Categories</h3>
                  <div>
                    <ul className="ps-0">
                      {categories.map((category) => (
                        <li
                          style={{ cursor: "pointer", listStyleType: "none" }}
                          key={category}
                          onClick={() => {
                            setCategory(category);
                          }}
                        >
                          {category}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="filter-card mb-3">
                  <h3 className="filter-title">Filter By</h3>
                  <div>
                    <h5 className="sub-title">Availability</h5>
                    <div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value={""}
                          id=""
                        />
                        <label className="form-check-label" htmlFor="">
                          In Stock(1)
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value={""}
                          id=""
                        />
                        <label className="form-check-label" htmlFor="">
                          Out Of Stock(0)
                        </label>
                      </div>
                    </div>
                    <h5 className="sub-title">Price</h5>
                    {/* <div className='d-flex align-items-center gap-10'>
                                        <div className="form-floating">
                                            <input type="email" className="form-control" id="floatingInput" placeholder="From" />
                                            <label htmlFor="floatingInput">From</label>
                                        </div>
                                        <div className="form-floating">
                                            <input type="email" className="form-control" id="floatingInput1" placeholder="To" />
                                            <label htmlFor="floatingInput1">To</label>
                                        </div>
                                        <button>submit</button>
                                    </div> */}

                    <div
                      className="d-flex align-items-center gap-10"
                      style={{ display: "flex" }}
                    >
                      <form onSubmit={handleSubmit}>
                        <div style={{ display: "flex" }}>
                          <div
                            className="form-floating"
                            style={{ width: "120px", marginRight: "25px" }}
                          >
                            <input
                              type="number"
                              className="form-control"
                              name="from"
                              id="floatingInput"
                              placeholder="From"
                              min={1}
                              max={1000}
                            />
                            <label htmlFor="floatingInput">From</label>
                          </div>
                          <div
                            className="form-floating"
                            style={{ width: "120px" }}
                          >
                            <input
                              type="number"
                              className="form-control"
                              name="to"
                              id="floatingInput1"
                              placeholder="To"
                              min={1}
                              max={1000}
                            />
                            <label htmlFor="floatingInput1">To</label>
                          </div>
                        </div>

                        <button
                          type="submit"
                          style={{ marginTop: "10px" }}
                          className="button signup"
                        >
                          Price Filter
                        </button>
                      </form>
                    </div>

                    {/* <h5 className="sub-title">Colors</h5>
                    <div>
                      <Color />
                    </div>
                    <h5 className="sub-title">Size</h5>
                    <div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="color-1"
                        />
                        <label className="from-check-label" htmlFor="color-1">
                          S (2)
                        </label>
                      </div>
                    </div>
                    <div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="color-2"
                        />
                        <label className="from-check-label" htmlFor="color-2">
                          M (2)
                        </label>
                      </div>
                    </div> */}

                    {/*Ratings Filter*/}
                    <div className="mt-5">
                      <h4 className="mb-3">Ratings</h4>
                      <ul className="pl-0">
                        {[5, 4, 3, 2, 1].map((star) => (
                          <li
                            style={{ cursor: "pointer", listStyleType: "none" }}
                            key={star}
                            onClick={() => {
                              setRating(star);
                              console.log(rating);
                            }}
                          >
                            <div className="rating-outer">
                              <div
                                className="rating-inner"
                                style={{ width: `${star * 20}%` }}
                              ></div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="filter-card mb-3">
                  <h3 className="filter-title">Product Tags</h3>
                  <div>
                    <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                      <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                        <button className="button signup"
                          onClick={() => (
                            setKeywords("Frame"), searchHandler()
                          )}
                        >
                          Frame
                        </button>
                      </span>
                      <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                        <button className="button signup"
                          onClick={() => (
                            setKeywords("Box"), searchHandler()
                          )}
                        >
                          Box
                        </button>
                      </span>
                      <span className="badge bg-light text-secondary rounded-3 py-2 px-3"  >
                        <button className="button signup"
                          onClick={() => (
                            setKeywords("Tray"), searchHandler()
                          )}
                          style={{marginRight:"14px"}}
                        >
                          Tray
                        </button>
                      </span>
                      <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                        <button className="button signup"
                          onClick={() => (
                            setKeywords("Art"), searchHandler()
                          )}
                          style={{marginRight:"5px"}}
                        >
                          Art
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="filter-card mb-3">
                  <h3 className="filter-title">Random Products</h3>
                  <div>
                    <div className="random-product mb-3 d-flex">
                      <div className="w-50">
                        <img
                          src="/Images/macreme-2.jpeg"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="w-50">
                        <h5>Lorem ipsum dolor sit amet, consectetur </h5>
                        <ReactStars
                          count={5}
                          size={24}
                          value={4}
                          edit={false}
                          activeColor="#ffd700"
                        />
                        <b style={{ marginLeft: "6px", color: "white" }}>
                          $ 300
                        </b>
                      </div>
                    </div>
                    <div className="random-product d-flex">
                      <div className="w-50">
                        <img
                          src="/Images/macreme-2.jpeg"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="w-50">
                        <h5>Lorem ipsum dolor sit amet, consectetur </h5>
                        <ReactStars
                          count={5}
                          size={24}
                          value={4}
                          edit={false}
                          activeColor="#ffd700"
                        />
                        <b style={{ marginLeft: "6px", color: "white" }}>
                          $ 300
                        </b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-9">
                {/* <div className='filter-sort-grid mb-4'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div className='d-flex align-items-center gap-10'>
                                        <p className='mb-0 d-block' style={{ width: '100px' }}>Sort By:</p>
                                        <select name='' className='form-control form-select' id=''>
                                            <option value="manual">Featured</option>
                                            <option value="best-selling">Alphabetically, Z-A</option>
                                            <option value="price-ascending">Price, low to high</option>
                                            <option value="price-descending">Price, high to low</option>
                                            <option value="created-ascending">Date, old to new</option>
                                            <option value="created-descending">Date, new to old</option>
                                        </select>
                                    </div>
                                    <div className='d-flex align-items-center gap-10'>
                                        <p className='totalproducts mb-0'>21 Product</p>
                                        <div className='d-flex gap-10 align-items-center grid'>
                                            <img
                                                onClick={() => {
                                                    setGrid(3);
                                                }}
                                                src="/Images/menu3.png" className='d-block img-fluid' alt='grid' />
                                            <img
                                                onClick={() => {
                                                    setGrid(4);
                                                }}
                                                src="/Images/Menu1.png" className='d-block img-fluid' alt='grid' />
                                            <img
                                                onClick={() => {
                                                    setGrid(6);
                                                }}
                                                src="/Images/menu-4.png" cxlassName='d-block img-fluid' alt='grid' />
                                            <img
                                                onClick={() => {
                                                    setGrid(12);
                                                }}
                                                src="/Images/menu2.png" className='d-block img-fluid' alt='grid' />
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                <div className="products-list pb-5">
                  <div className="gap-10 flex-wrap" style={{ display: "flex" }}>
                    {products &&
                      products.map((product) => (
                        <Product col={15} key={product._id} product={product} />
                      ))}
                    {/* <Product grid={grid} /> */}
                  </div>
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
                    itemClass={"page-item"} //bootsstrap class
                    linkClass={"page-link"}
                  />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OurStore;
