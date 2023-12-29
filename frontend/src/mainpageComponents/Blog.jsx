import React from 'react'
import { Link } from 'react-router-dom'

const Blog = () => {
    return (
        <div>
            <section className='blog-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <h3 className='section-heading'>Our Latest Blogs</h3>
                        </div>
                        <div className='col-3'>
                           <div className='blog-card'>
                                <div className='card-image'>
                                    <img src="/Images/handweaving.jpg" className='img-fluid' alt='first blog' />
                                    <div className='blog-content'>
                                        <p className='date'>October 15, 2023</p>
                                        <h5 className='title'>Handweaved cloths</h5>
                                        <p className='desc'>In this blog post, we dive into the enchanting world of Kashmiri products and introduce you to a unique ecommerce platform that brings the rich cultural heritage of Kashmir right to your doorstep. From exquisite Pashmina shawls to intricate handcrafted jewelry, get ready to discover the magic of Kashmir through your screen.</p>
                                        <Link className='button' to={"/blog/:id"}>READ MORE</Link>
                                    </div>
                                </div>
                            </div>
                         
                        </div>
                        <div className='col-3'>
                            <div className='blog-card'>
                                <div className='card-image'>
                                    <img src="/Images/handweaving.jpg" className='img-fluid' alt='first blog' />
                                    <div className='blog-content'>
                                        <p className='date'>November 12, 2023</p>
                                        <h5 className='title'>Winter Essentials: The Charm of Kashmiri Shawls and Pashminas</h5>
                                        <p className='desc'>In this installment, we shift the spotlight to the talented artisans of Kashmir who create the region's exquisite products. Learn about their traditions, techniques, and the impact of ecommerce on their livelihoods. Discover the stories behind the crafts.</p>
                                        <Link className='button' to={"/"}>READ MORE</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='blog-card'>
                                <div className='card-image'>
                                    <img src="/Images/handweaving.jpg" className='img-fluid' alt='first blog' />
                                    <div className='blog-content'>
                                        <p className='date'>October 24, 2023</p>
                                        <h5 className='title'>The Kashmiri Culinary Journey: Saffron, Spices, and More</h5>
                                        <p className='desc'>This blog post tantalizes the taste buds by exploring the culinary treasures of Kashmir.  Learn about their traditions, techniques, and the impact of ecommerce on their livelihoods.From the world's finest saffron to aromatic spices and delectable cuisine, discover how the platform brings Kashmiri flavors to your kitchen.</p>
                                        <Link className='button' to={"/"}>READ MORE</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='blog-card'>
                                <div className='card-image'>
                                    <img src="/Images/handweaving.jpg" className='img-fluid' alt='first blog' />
                                    <div className='blog-content'>
                                        <p className='date'> October 31, 2023</p>
                                        <h5 className='title'>The Future of Kashmiri Ecommerce: Sustainability and Growth</h5>
                                        <p className='desc'>In this final blog post of the series, we explore the future prospects of the Kashmir products ecommerce platform. Learn about its sustainability initiatives, plans for expansion, and the continued support for the artisans and culture of Kashmir.</p>
                                        <Link className='button' to={"/"}>READ MORE</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Blog
