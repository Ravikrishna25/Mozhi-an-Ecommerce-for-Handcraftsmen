import React from 'react';
import BreadCrumb from '../mainpageComponents/BreadCrumb';
import Meta from '../mainpageComponents/Meta';
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { BsInfoLg } from "react-icons/bs";
import { BsHouseFill } from "react-icons/bs"

const Contact = () => {
  return (
    <div>
      <Meta title={"Contact Us"} />
      <BreadCrumb title="Contact Us" />
      <div className='contact-wrapper py-5 home-wrapper-2' >
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31337.138654118226!2d76.93228583707905!3d10.952619309233938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85bdeb7818fcb%3A0xbce7d490fd8f3738!2sKuniyamuthur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1689290477600!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: "0" }}
                allowfullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className='w-100'
                title='map'
              >
              </iframe>
            </div>
            <div className='col-12 mt-5'>
              <div className='contact-inner-wrapper d-flex justify-content-between'>
                <div>
                  <h3 className='contact-title mb-4'>Contact</h3>
                  <form action='' className='d-flex flex-column gap-15'>
                    <div>
                      <input type='text' className='form-control' placeholder='Name' />
                    </div>
                    <div>
                      <input type='email' className='form-control' placeholder='Email' />
                    </div>
                    <div>
                      <input type='tel' className='form-control' placeholder='Mobile Number' />
                    </div>
                    <div>
                      <textarea name='' id='' className='w-100 form-control' cols={80} rows={4} placeholder='Comments' />
                    </div>
                    <div>
                      <button className='button border-0'>Submit</button>
                    </div>
                  </form>
                </div>
                <div style={{ width: '40%' }}>
                  <h3 className='contact-title'>Get In Touch With US</h3>
                  <div style={{ marginTop: '5%' }}>
                    <ul className='ps-0'>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <BsHouseFill className='fs-5' />
                        <address className='mb-0'>0185 Baby Mission , Dreamland , Dholakpur , 566663 </address>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <BsFillTelephoneFill className='fs-5' />
                        <a href="tel: +91 7780672099" >+91 7780672099</a>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <GrMail className='fs-5' />
                        <a href='mailto:baby123@gmail.com'>baby123@gmail.com</a>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <BsInfoLg className='fs-5' />
                        <p className='mb-0'>Monday - Sunday 10AM - 10PM</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
