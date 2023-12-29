import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = () => {
    return (

        <div className='blog-card'>
            <div className='card-image'>
                <img src="/Images/handweaving.jpg" className='img-fluid w-100' alt='first blog' />
                <div className='blog-content'>
                    <p className='date'>15/06/2023</p>
                    <h5 className='title'>Handweaved cloths</h5>
                    <p className='desc'>Beautiful handweaved cloths are now for sales at your best price</p>
                    <Link className='button' to={"/blog/:id"}>READ MORE</Link>
                </div>
            </div>
        </div>

    )
}

export default BlogCard
