import React from 'react'
import { Link } from "react-router-dom"
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";
import newletter from "../Images/send.png";

const Footer = () => {
  return (
    <div>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-15 align-items-center">
                <img style={{ width: 30, height: 30 }} src={newletter} alt="newsletter" />
                <h2 className="mb-0 text-white">Sign up for Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input type="text" className="form-control py-1" placeholder="Your email address" aria-label="Your email address" aria-describedby="basic-addon2" />
                <span className="input-group-text p-2" id="basic-addon2">Subscribe</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact us</h4>
              <div>
                <address className='text-white fs-6'>0185 Baby Mission,<br />
                  Dreamland, Dholakpur,<br />
                  Pincode: 566663
                </address>
                <a href="tel:+91 7894561239" className='mt-3 d-block mb-1 text-white'>+91 7780672099</a>
                <a href="mailto:baby123@gmail.com" className='mt-2 d-block mb-0 text-white'>baby123@gmail.com</a>
                <div className='social_icons d-flex align-items-center gap-30 mt-4'>
                  <a className='text-white' href=''>
                    <BsLinkedin className='fs-4' />
                  </a>
                  <a className='text-white' href=''>
                    <BsInstagram className='fs-4' />
                  </a>
                  <a className='text-white' href=''>
                    <BsGithub className='fs-4' />
                  </a>
                  <a className='text-white' href=''>
                    <BsYoutube className='fs-4' />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4 ">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link to={"/privacyPolicy"} className='text-white py-2 mb-1'>Privacy Policy</Link>
                <Link to={"/refundPolicy"} className='text-white py-2 mb-1'>Refund Policy</Link>
                <Link to={"/shippingPolicy"} className='text-white py-2 mb-1'>Shipping Policy</Link>
                <Link to={"/termsAndCondition"} className='text-white py-2 mb-1'>Terms & Conditions</Link>
                <Link to={"/blogs"} className='text-white py-2 mb-1'>Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link className='text-white py-2 mb-1'>About Us</Link>
                <Link className='text-white py-2 mb-1'>FAQ</Link>
                <Link className='text-white py-2 mb-1'>Contact</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className='text-white py-2 mb-1'>Laptops</Link>
                <Link className='text-white py-2 mb-1'>Headphones</Link>
                <Link className='text-white py-2 mb-1'>Tablets</Link>
                <Link className='text-white py-2 mb-1'>Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">&copy;{new Date().getFullYear()}; Powered by Mozhi</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer

