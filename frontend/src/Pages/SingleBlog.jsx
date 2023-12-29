import React from 'react';
import Meta from '../mainpageComponents/Meta';
import BreadCrumb from '../mainpageComponents/BreadCrumb';
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from "react-icons/ai";
import Pot2 from "../Images/pot-2.png"

const SingleBlog = () => {
  return (
    <div>
      <Meta title={"Dynamic Blog Name"} />
      <BreadCrumb title="Dynamic Blog Name" />
      <div className='blog-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='single-blog-card'>
                <Link to={"/blogs"} className='d-flex align-items-center gap-10'><AiOutlineArrowLeft />Go Back to Blogs</Link>
                <h3 className='title mt-0'>A Beautiful Sunday Morning Renaissance.</h3>
                <img src={Pot2} className='img-fluid w-100 my-4' alt='blog' />
                <p>
                  Lorem ipsum dolor sit amet, pro quot paulo probatus et, eam perfecto singulis
                  disputationi ne. Usu ex utamur scripta adolescens, eu facete ornatus patrioque
                  eos, et pri recusabo instructior. Est stet eros persius id, nam facete atomorum ad,
                  ex per facilisi tincidunt. Mel ex choro luptatum. Qui ea omnis legimus dolorem, movet
                  paulo suscipiantur ad sit. Ad mei prompta mediocrem iudicabit, quas laudem omnium eu per.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleBlog
