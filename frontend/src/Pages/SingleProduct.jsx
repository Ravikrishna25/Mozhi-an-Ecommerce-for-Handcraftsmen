import React, { Fragment, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Meta from "../mainpageComponents/Meta";
import BreadCrumb from "../mainpageComponents/BreadCrumb";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { BiCart } from "react-icons/bi";
import { BsFillEyeFill } from "react-icons/bs";
import { BiGitCompare } from "react-icons/bi";
import { BsFillHeartFill } from "react-icons/bs";
import ReactImageZoom from "react-image-zoom";
import Color from "../mainpageComponents/Color";
import { useSelector } from "react-redux";
import { addCartItem } from "../actions/cartActions";
import {
  clearError,
  clearProduct,
  clearReviewSubmitted,
} from "../slices/productSlice";
import { getProduct, createReview } from "../actions/productActions";
import Loader from "../layouts/Loader";
import { addWishItem } from "../actions/wishActions";
import { FrownOutlined, MehOutlined, SmileOutlined } from "@ant-design/icons";
import { Rate } from "antd";
import { addCompItem } from "../actions/compActions";
const customIcons = {
  1: <FrownOutlined />,
  2: <FrownOutlined />,
  3: <MehOutlined />,
  4: <SmileOutlined />,
  5: <SmileOutlined />,
};

const desc = ["terrible", "bad", "normal", "good", "wonderful"];

const SingleProduct = () => {
  const {
    loading,
    product = {},
    isReviewSubmitted,
    error,
  } = useSelector((state) => state.productState);
  const dispatch = useDispatch();
  const { id } = useParams();

  const [singleLoaded, setSingleLoaded] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [rating, setRating] = useState(1);
  const [value, setValue] = useState(2);

  const [comment, setComment] = useState("");
  const { user } = useSelector((state) => state.authState);

  const increaseQty = () => {
    const count = document.querySelector(".count");
    if (product.stock == 0 || count.valueAsNumber >= product.stock) {
      // console.log("it is in boundary")
      return; //boundary condition
    }
    const qty = count.valueAsNumber + 1;
    setQuantity(qty);
  };

  const decreaseQty = () => {
    const count = document.querySelector(".count");
    if (count.valueAsNumber == 1) {
      return; //boundary condition
    }
    const qty = count.valueAsNumber - 1;
    setQuantity(qty);
  };

  const [orderedProduct, setOrderedProduct] = useState(true);
  //   const { name } = useSelector((state) => state.productState);
  // const len = product.reviews.length;

  const copyToClipboard = (text) => {
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    setTimeout(() => {
      setSingleLoaded(true);
      console.log(singleLoaded);
    }, "1000");


    if (isReviewSubmitted) {
      toast("Review Submitted Successfully", {
        type: "success",
        position: "bottom-center",
        onOpen: () => dispatch(clearReviewSubmitted()),
      });
    }
    if (error) {
      toast(error, {
        position: toast.POSITION.BOTTOM_CENTER,
        type: "error",
        onOpen: () => {
          dispatch(clearError);
        },
      });
      return;
    }
    if (!product._id || isReviewSubmitted) {
      dispatch(getProduct(id));
    }
    return () => {
      dispatch(clearError);
      dispatch(clearProduct());
    };
  }, [dispatch, id, isReviewSubmitted, error]);

  const reviewHandler = () => {
    const formData = new FormData();
    formData.append("rating", rating);
    formData.append("comment", comment);
    formData.append("productId", id);
    dispatch(createReview(formData));
  };

  const props = {
    zoomWidth: 300,
    img: "https://images.pexels.com/photos/327136/pexels-photo-327136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  };

  const [selectedImageIndex, setSelectedImageIndex] = useState(0); // Initialize with the first image

  // Function to handle thumbnail click
  const handleThumbnailClick = (index) => {
    setSelectedImageIndex(index);
  };

  return (
    <div>
      {loading  ? (
        <Loader />
      ) : (
        <Fragment>
          <Meta title={`${product.name}`} />
          <BreadCrumb title={`${product.name}`} />
          <div className="main-product-wrapper py-5 home-wrapper-2">
            <div className="container-xxl">
              <div className="row">
                
              { singleLoaded && (
                  <div className="col-6">
                    <div className="main-product-image">
                      <div>
                        {console.log("clear in react zoom"+singleLoaded)}
                        <ReactImageZoom
                          zoomWidth={300}
                          img={product.images[selectedImageIndex].image}
                        />
                      </div>
                      {console.log("error in react zoom"+singleLoaded)}
                    </div>
                    <div className="other-product-images d-flex flex-wrap gap-15">
                     
                      {product.images.map((image, index) => (
                        <div
                          key={index}
                          onClick={() => handleThumbnailClick(index)}
                        >
                          <img
                            className="img-fluid"
                            src={image.image}
                            alt={`Thumbnail ${index + 1}`}
                          />
                        </div>
                      ))}
                     
                    </div>
                  </div>
                )}
                <div
                  className="col-6"
                  style={{ boxShadow: "0 0 15px #0e0e0e1a" }}
                >
                  <div
                    className="main-product-details"
                    style={{ marginTop: "-10%" }}
                  >
                    <div className="border-bottom">
                      <h3
                        className="title"
                        style={{ marginLeft: "-200px", textShadow: "none" }}
                      >
                        {product.name}
                      </h3>
                      <p className="bg-white p-3" style={{ fontSize: "20px" }}>
                        {product.description}
                      </p>
                    </div>
                    <div className="border-bottom py-3">
                      <p className="price">₹{product.price}</p>

                      <div style={{ display: "flex" }}>
                        <div className="align-items-center gap-10">
                          <ReactStars
                            count={5}
                            size={24}
                            value={product.ratings}
                            edit={false}
                            activeColor="#ffd700"
                          />
                          <p className="mb-0 t-review">
                            ({product.numOfReviews} Reviews)
                          </p>
                        </div>
                        <div>
                          {/* <a href=""> */}
                          <BsFillHeartFill
                            className="fs-5 me-2"
                            style={{ marginLeft: "300px" }}
                            size={35}
                            type="button"
                            onClick={() => {
                              dispatch(addWishItem(product._id, quantity));
                            }}
                          />
                          Add to Wishlist
                          {/* </a> */}
                        </div>
                      </div>
                      <a className="review-btn" href="#review">
                        Write a Review
                      </a>
                    </div>
                    <div className="py-3" style={{ fontSize: "20px" }}>
                      <div className="d-flex gap-10 align-items-center">
                        <h3 className="product-heading">Seller : </h3>
                        <p className="product-data">{product.seller}</p>
                      </div>
                      <div className="d-flex gap-10 align-items-center">
                        <h3 className="product-heading">Stock : </h3>
                        <p className="product-data">{product.stock}</p>
                      </div>
                      <div className="d-flex gap-10 align-items-center">
                        <h3 className="product-heading">Category : </h3>
                        <p className="product-data">{product.category}</p>
                      </div>
                      {/* <div className="d-flex gap-10 align-items-center">
                        <h3 className="product-heading">Tags : </h3>
                        <p
                          className="product-data"
                          style={{ color: "#777777" }}
                        >
                          Tea Pots
                        </p>
                      </div> */}
                      <div className="d-flex gap-10 align-items-center">
                        <h3 className="product-heading">Availability : </h3>
                        <span
                          className={
                            product.stock > 0 ? "greenColor" : "redColor"
                          }
                          id="stock_status"
                        >
                          {product.stock > 0 ? "In Stock" : "Out of Stock"}
                        </span>
                      </div>
                      {/* <div className="d-flex gap-20 flex-column mt-2 mb-3">
                        <h3
                          className="product-heading"
                          style={{ marginLeft: "-560px", marginTop: "-3px" }}
                        >
                          Size :{" "}
                        </h3>
                        <div className="d-flex flex-wrap gap-15">
                          <span className="badge border border-2 bg-white text-dark border-secondary">
                            S
                          </span>
                          <span className="badge border border-2 bg-white text-dark border-secondary">
                            M
                          </span>
                          <span className="badge border border-2 bg-white text-dark border-secondary">
                            L
                          </span>
                        </div>
                      </div>
                      <div className="d-flex gap-20 flex-column mt-2 mb-3">
                        <h3
                          className="product-heading"
                          style={{ marginLeft: "-560px" }}
                        >
                          Color :{" "}
                        </h3>
                        <Color />
                      </div> */}
                      <div className="d-flex align-items-center gap-40 flex-row mt-2 mb-3">
                        <h3
                          className="product-heading"
                          style={{ marginRight: "15px" }}
                        >
                          Quantity :{" "}
                        </h3>
                        {/* &nbsp;&nbsp;&nbsp; */}
                        {/* <div className="">
                          <input
                            type="number"
                            name=""
                            className="form-control"
                            min={1}
                            max={10}
                            style={{ width: "70px" }}
                            id=""
                          />
                        </div> */}
                        <div className="stockCounter ">
                          <span
                            className="btn  minus"
                            onClick={decreaseQty}
                            style={{ marginRight: "15px", color: "white" }}
                          >
                            -
                          </span>

                          <input
                            type="number"
                            className="form-control count d-inline"
                            value={quantity}
                            readOnly
                            style={{ marginRight: "15px" }}
                          />

                          <span
                            className="btn  plus"
                            onClick={increaseQty}
                            style={{ marginRight: "35px", color: "white" }}
                          >
                            +
                          </span>
                        </div>
                        {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
                        <div className="d-flex align-items-center gap-30">
                          {/* <button className="button border-0" type="submit">
                            Add To Cart
                          </button> */}
                          <button
                            className="button signup"
                            disabled={product.stock == 0 ? true : false}
                            onClick={() => {
                              dispatch(addCartItem(product._id, quantity));
                            }}
                          >
                            Add to Cart
                          </button>
                        </div>
                      </div>
                      <div className="d-flex align-items-center gap-15">
                        <div>
                          <a
                            href=""
                            onClick={(e) => {
                              e.preventDefault();
                              dispatch(addCompItem(product._id, quantity));
                            }}
                          >
                            <BiGitCompare className="fs-5 me-2" />
                            Add to Compare
                          </a>
                        </div>
                        {/* <div>
                          <a href="">
                            <BsFillHeartFill className="fs-5 me-2" />
                            Add to Wishlist
                          </a>
                        </div> */}
                      </div>
                      <br />

                      <div className="d-flex gap-10 flex-column my-3">
                        <h3
                          className="product-heading"
                          style={{ marginLeft: "-475px" }}
                        >
                          Shipping & Returns:{" "}
                        </h3>
                        <p
                          className="product-data"
                          style={{ color: "#777777" }}
                        >
                          Free Shipping and returns available an all orders!
                          <br />
                          we ship all Indian domestic orders within{" "}
                          <b>2-4 business days!</b>
                        </p>
                      </div>
                      <br />
                      <div className="d-flex gap-10 align-items-center my-3">
                        <h3 className="product-heading">Product Link : </h3>
                        <a
                          href="javascript:void(0);"
                          onClick={() => {
                            copyToClipboard(
                              "https://images.pexels.com/photos/327136/pexels-photo-327136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            );
                          }}
                          style={{ marginTop: "-11px" }}
                        >
                          Copy Product Link.
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <section className="description-wrapper py-5 home-wrapper-2">
            <div className="container-xxl">
              <div className="row">
                <div className="col-12">
                  <h4>Description</h4>
                  <div
                    className="bg-white p-3"
                    style={{ boxShadow: "0 0 15px #0e0e0e1a" }}
                  >
                    <p className="bg-white p-3">
                      Lorem ipsum dolor sit amet, apeirian iudicabit efficiendi
                      te duo. Te malorum salutatus scripserit sea, eos deserunt
                      mnesarchum at. Vel vituperata interesset referrentur et.
                      Per ut assum petentium, ei vitae dolore nam. Per quodsi
                      corrumpit disputando eu, ad sed maiorum adolescens,
                      malorum persecuti quo id. Vis consul copiosae evertitur
                      id, apeirian delicata has te, eam et vidit autem dolore.
                      His id ferri illum ocurreret, semper quaestio expetenda
                      vis ex.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
          <section id="review" className="reviews-wrapper home-wrapper-2">
            <div className="container-xxl">
              <div className="row">
                <div className="col-12">
                  <h4>Reviews</h4>
                  <div className="review-inner-wrapper">
                    <div className="review-head d-flex justify-content-between align-items-end">
                      <div>
                        <h4 className="mb-2">Customer Reviews</h4>
                        <div className="d-flex align-items-center gap-10">
                          <ReactStars
                            count={5}
                            size={24}
                            value={3}
                            edit={false}
                            activeColor="#ffd700"
                          />
                          <p className="mb-0">Based on Reviews</p>
                        </div>
                      </div>
                      {/* {orderedProduct && (
                        <div>
                          <a
                            className="text-dark text-decoration-underline"
                            href=""
                          >
                            Write a Review
                          </a>
                        </div>
                      )} */}
                    </div>
                    {user ? (
                      <div className="review-form py-4">
                        <h4>Write a Review</h4>
                        <form action="" className="d-flex flex-column gap-15">
                          <div>
                            {/* <ReactStars
                            count={5}
                            size={24}
                          
                            edit={true}
                            activeColor="#ffd700"
                          /> */}
                            {/* <Rate tooltips={desc} onChange={setRating} value={rating} /> */}
                            <Rate
                              tooltips={desc}
                              onChange={setRating}
                              value={rating}
                              character={({ index }) => customIcons[index + 1]}
                            />
                          </div>
                          <div>
                            <textarea
                              name=""
                              id=""
                              className="w-100 form-control"
                              cols={80}
                              rows={4}
                              placeholder="Comments"
                              onChange={(e) => setComment(e.target.value)}
                            />
                          </div>
                          <div className="d-flex justify-content-end">
                            <button
                              className="button border-0"
                              disabled={loading}
                              onClick={reviewHandler}
                            >
                              Submit Review
                            </button>
                          </div>
                        </form>
                      </div>
                    ) : (
                      <div className="alert alert-danger mt-5">
                        Login to Post a Review{" "}
                      </div>
                    )}
                    {product.reviews && product.reviews.length > 0 ? (
                      // <ProductReview reviews={product.reviews}/>
                      <div className="reviews mt-4">
                        {product.reviews &&
                          product.reviews.map((review) => (
                            <div className="review" key={review._id}>
                              <div className="d-flex gap-10 align-items-center">
                                <h6 className="mb-0">{review.user.name}</h6>
                                <ReactStars
                                  count={5}
                                  size={24}
                                  value={review.rating}
                                  edit={true}
                                  activeColor="#ffd700"
                                />
                              </div>
                              <p className="mt-3">{review.comment}</p>
                            </div>
                          ))}
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="popular-wrapper py-5 home-wrapper-2">
            <div className="container-xxl">
              {/* <div className='row'>
                            <div className='col-12'>
                                <h3 className='section-heading'>Our Popular Products</h3>
                            </div>
                        </div> */}
              <h4>Similar Products</h4>
              <div className="row">
                <div className="col-3">
                  <Link className="product-card position-relative">
                    <div className="wishlist-icon position-absolute">
                      <Link>
                        <BsFillHeartFill size={20} color="black" />
                      </Link>
                    </div>
                    <div className="product-image">
                      <img
                        src="/Images/handweaving.jpg"
                        className="img-fluid"
                        alt="first product"
                      />
                      <img
                        src="/Images/handloomsaree.jpeg"
                        className="img-fluid"
                        alt="first product"
                      />
                    </div>
                    <div className="product-details">
                      <h6 className="brand">Handweaved cloths</h6>
                      <h5 className="product-title">
                        Kids headphones bulk 10 pack multi colored for students
                      </h5>
                      <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p className="price">$100.00</p>
                    </div>
                    <div className="action-bar position-absolute">
                      <div className="d-flex flex-column gap-15">
                        <Link>
                          <BsFillEyeFill size={20} color="black" />
                        </Link>
                        <Link>
                          <BiCart size={20} color="black" />
                        </Link>
                        <Link>
                          <BiGitCompare size={20} color="black" />
                        </Link>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-3">
                  <Link className="product-card position-relative">
                    <div className="wishlist-icon position-absolute">
                      <Link>
                        <BsFillHeartFill size={20} color="black" />
                      </Link>
                    </div>
                    <div className="product-image">
                      <img
                        src="/Images/handweaving.jpg"
                        className="img-fluid"
                        alt="first product"
                      />
                      <img
                        src="/Images/handloomsaree.jpeg"
                        className="img-fluid"
                        alt="first product"
                      />
                    </div>
                    <div className="product-details">
                      <h6 className="brand">Handweaved cloths</h6>
                      <h5 className="product-title">
                        Kids headphones bulk 10 pack multi colored for students
                      </h5>
                      <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p className="price">$100.00</p>
                    </div>
                    <div className="action-bar position-absolute">
                      <div className="d-flex flex-column gap-15">
                        <Link>
                          <BsFillEyeFill size={20} color="black" />
                        </Link>
                        <Link>
                          <BiCart size={20} color="black" />
                        </Link>
                        <Link>
                          <BiGitCompare size={20} color="black" />
                        </Link>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-3">
                  <Link className="product-card position-relative">
                    <div className="wishlist-icon position-absolute">
                      <Link>
                        <BsFillHeartFill size={20} color="black" />
                      </Link>
                    </div>
                    <div className="product-image">
                      <img
                        src="/Images/handweaving.jpg"
                        className="img-fluid"
                        alt="first product"
                      />
                      <img
                        src="/Images/handloomsaree.jpeg"
                        className="img-fluid"
                        alt="first product"
                      />
                    </div>
                    <div className="product-details">
                      <h6 className="brand">Handweaved cloths</h6>
                      <h5 className="product-title">
                        Kids headphones bulk 10 pack multi colored for students
                      </h5>
                      <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p className="price">$100.00</p>
                    </div>
                    <div className="action-bar position-absolute">
                      <div className="d-flex flex-column gap-15">
                        <Link>
                          <BsFillEyeFill size={20} color="black" />
                        </Link>
                        <Link>
                          <BiCart size={20} color="black" />
                        </Link>
                        <Link>
                          <BiGitCompare size={20} color="black" />
                        </Link>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-3">
                  <Link className="product-card position-relative">
                    <div className="wishlist-icon position-absolute">
                      <Link>
                        <BsFillHeartFill size={20} color="black" />
                      </Link>
                    </div>
                    <div className="product-image">
                      <img
                        src="/Images/handweaving.jpg"
                        className="img-fluid"
                        alt="first product"
                      />
                      <img
                        src="/Images/handloomsaree.jpeg"
                        className="img-fluid"
                        alt="first product"
                      />
                    </div>
                    <div className="product-details">
                      <h6 className="brand">Handweaved cloths</h6>
                      <h5 className="product-title">
                        Kids headphones bulk 10 pack multi colored for students
                      </h5>
                      <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p className="price">$100.00</p>
                    </div>
                    <div className="action-bar position-absolute">
                      <div className="d-flex flex-column gap-15">
                        <Link>
                          <BsFillEyeFill size={20} color="black" />
                        </Link>
                        <Link>
                          <BiCart size={20} color="black" />
                        </Link>
                        <Link>
                          <BiGitCompare size={20} color="black" />
                        </Link>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </Fragment>
      )}
    </div>
  );
};

export default SingleProduct;
