import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import pot from "../Images/pot-4.jpg";
import { useDispatch, useSelector } from "react-redux";
import { Fragment, useState } from "react";
import { countries } from "countries-list";
import { saveShippingInfo } from "../slices/cartSlice";
import { useNavigate } from "react-router-dom";
import CheckoutSteps from "./CheckoutSteps";
import { toast } from "react-toastify";

export const validateShipping = (shippingInfo, navigate) => {
  if (
    !shippingInfo.address ||
    !shippingInfo.city ||
    !shippingInfo.state ||
    !shippingInfo.country ||
    !shippingInfo.phoneNo ||
    !shippingInfo.postalCode
  ) {
    toast.error("Please fill the shipping information", {
      position: toast.POSITION.BOTTOM_CENTER,
    });
    navigate("/shipping");
  }
};

const Shipping = () => {
  const { shippingInfo = {} } = useSelector((state) => state.cartState);

  const [address, setAddress] = useState(shippingInfo.address);
  const [city, setCity] = useState(shippingInfo.city);
  const [phoneNo, setPhoneNo] = useState(shippingInfo.phoneNo);
  const [postalCode, setPostalCode] = useState(shippingInfo.postalCode);
  const [country, setCountry] = useState(shippingInfo.country);
  const [state, setState] = useState(shippingInfo.state);
  const countryList = Object.values(countries);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveShippingInfo({ address, city, phoneNo, postalCode, country, state })
    );
    navigate("/order/confirm");
  };

  return (
    <div>
      <CheckoutSteps shipping />
      <div className="checkout-wrapper">
        <div className="container-xxl">
          <div className="row">
            <div className="col-7" style={{ marginBottom: "30px" }}>
              <div className="checkout-left-data">
                {/* <h3
                  className="website-name"
                  style={{ marginRight: "85%", textShadow: "none" }}
                >
                  Mozhi
                </h3> */}
                {/* <nav style={{ "--bs-breadcrumb-divider": ">" }} aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link className='text-dark total-price' to={"/cart"}>Cart</Link></li>&nbsp;&#62;
                                        <li className="breadcrumb-item  active" aria-current="page">Shipping</li>&nbsp;&#62;
                                        <li className="breadcrumb-item  active">Information</li>&nbsp;&#62;&nbsp;
                                        <li className="breadcrumb-item  active" aria-current="page">Payment</li>
                                    </ol>
                                </nav> */}
                {/* <h4 className='title total'>Contact Information</h4>
                                <p className='user-details total'>
                                    Nithya Sivan (baby123@gamil.com)
                                </p> */}
                <h4
                  className="mb-3"
                  style={{ marginLeft: "70%", textShadow: "none" }}
                >
                  Shipping Address
                </h4>
                <form
                  onSubmit={submitHandler}
                  className="d-flex gap-15 flex-wrap justify-content-between"
                  style={{ marginLeft: "40%", width: "100%" }}
                >
                  <div className="w-100">
                    {/* <select name="" className="form-control form-select" id="">
                      <option value={""} selected disabled>
                        Select Country
                      </option>
                    </select> */}
                    <select
                      id="country_field"
                      className="form-control"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      required
                    >
                      {countryList.map((country, i) => (
                        <option key={i} value={country.name}>
                          {country.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  {/* <div className='flex-grow-1'>
                                        <input type='text' placeholder='First Name' className='form-control' />
                                    </div> */}
                  {/* <div className='flex-grow-1'>
                                        <input type='text' placeholder='Last Name' className='form-control' />
                                    </div> */}
                  <div className="w-100">
                    <input
                      type="text"
                      placeholder="Address"
                      className="form-control"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      required
                    />
                  </div>
                  <div className="w-50">
                    <input
                      type="phone"
                      placeholder="Phone Number"
                      className="form-control"
                      value={phoneNo}
                      onChange={(e) => setPhoneNo(e.target.value)}
                      required
                    />
                  </div>
                  {/* <div className='w-100'>
                                        <input type='text' placeholder='Apartment, Suite, etc' className='form-control' />
                                    </div> */}
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="City"
                      className="form-control"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      required
                    />
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      id="state_field"
                      className="form-control"
                      value={state}
                      placeholder="State"
                      onChange={(e) => setState(e.target.value)}
                      required
                    />
                  </div>
                  <div className="flex-grow-1">
                    <input
                      placeholder="Zipcode"
                      type="number"
                      id="postal_code_field"
                      className="form-control"
                      value={postalCode}
                      onChange={(e) => setPostalCode(e.target.value)}
                      required
                    />
                  </div>
                  <div className="w-100">
                    <div className="d-flex justify-content-between align-items-center">
                      <Link to={"/cart"} className="text-dark">
                        <IoIosArrowBack className="me-2" />
                        Return to Cart
                      </Link>
                      {/* <Link to={"/cart"} className="button"> */}
                      <button
                        id="shipping_btn"
                        type="submit"
                        className="button"
                      >
                        Continue Shipping
                      </button>
                      {/* </Link> */}
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* <div className='col-5'>
                            <div className='border-bottom py-4'>
                                <div className='d-flex gap-10 mb-2 align-items-center'>
                                    <div className='w-75 d-flex gap-10'>
                                        <div className='w-25 position-relative'>
                                            <span style={{top:'-10px',right:'2px'}} className='badge bg-secondary text-white rounded-circle p-2 position-absolute'>1</span>
                                            <img className='img-fluid' src={pot} alt='pot' />
                                        </div>
                                        <div>
                                            <h5 className='total-price'>kfjjwvkvvkfpw</h5>
                                            <p className='total-price'>odsjvmviofmormv</p>
                                        </div>
                                    </div>
                                    <div className='flex-grow-1'>
                                        <h5 className='total'>$ 100</h5>
                                    </div>
                                </div>
                            </div>
                            <div className='border-bottom py-4'>
                                <div className="d-flex justify-content-between align-items-center">
                                    <p className='total'>Subtotal</p>
                                    <p className='total-price'>$ 10000</p>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <p className='mb-0 total'>Shipping</p>
                                    <p className='mb-0 total-price'>$ 10000</p>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center border-bottom py-4">
                                <h4 className='total'>Total</h4>
                                <h5 className='total-price'>$ 10000</h5>
                            </div>
                        </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
