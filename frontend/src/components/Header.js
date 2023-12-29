// import React from 'react'
// import { NavLink, Link } from 'react-router-dom'
// import { BsSearch } from 'react-icons/bs'
// import { BsFillHeartFill } from "react-icons/bs";
// import { BsFillPersonPlusFill } from "react-icons/bs";
// import { BsCart4 } from "react-icons/bs";
// import { BsFillGrid3X3GapFill } from "react-icons/bs";
// import { SiSellfy } from "react-icons/si";
// import { BiGitCompare } from "react-icons/bi";

// const Header = () => {
//     return (
//         <div>
//             <header className='header-top-strip py-1'>
//                 <div className='container-xxl'>
//                     <div className='row align-items-center'>
//                         <div className='col-2'>
//                             <Link to="/">
//                                 <img
//                                     // className='d-block w-70'
//                                     style={{ height: 70 }}
//                                     src="/Images/mozhi.png"
//                                     alt='mozhi'
//                                 />
//                             </Link>
//                         </div>
//                         <div className='col-5'>
//                             <div className="input-group">
//                                 <input type="text" className="form-control py-2" placeholder="search product here..." aria-label="search product here..." aria-describedby="basic-addon2" />
//                                 <span className="input-group-text p-3" id="basic-addon2"><BsSearch className='fs-6' /></span>
//                             </div>
//                         </div>
//                         <div className='col-5'>
//                             <div className="header-upper-links d-flex  justify-content-between align-items-center">
//                                 <div>
//                                     <Link to={"/compare"} className='d-flex align-items-center gap-10 text-white'>
//                                         <BiGitCompare size={25} />
//                                         <p className="mb-0">Compare <br /> Products</p>
//                                     </Link>
//                                 </div>&nbsp;&nbsp;
//                                 <div>
//                                     <Link to={"/wishlist"} className='d-flex align-items-center gap-10 text-white'>
//                                         <BsFillHeartFill size={25} />
//                                         <p className="mb-0">Favorite</p>
//                                     </Link>
//                                 </div>&nbsp;&nbsp;
//                                 <div>
//                                     <Link to={"/seller"} className='d-flex align-items-center gap-10 text-white'>
//                                         <SiSellfy size={25} />
//                                         <p className="mb-0">Seller</p>
//                                     </Link>
//                                 </div>&nbsp;&nbsp;
//                                 <div>
//                                     <Link to={"/login"} className='d-flex align-items-center gap-10 text-white'>
//                                         <BsFillPersonPlusFill size={30} />
//                                         <p className="mb-0">SignIn <br /> SignUp</p>
//                                     </Link>
//                                 </div>&nbsp;&nbsp;&nbsp;&nbsp;
//                                 <div>
//                                     <Link to={"/cart"} className='d-flex align-items-center gap-10 text-white'>
//                                         <BsCart4 size={30} />
//                                         <div className='d-flex flex-column gap-10'>
//                                             <span className='badge bg-white text-dark'>0</span>
//                                             <p className='mb-0'>Add Cart</p>
//                                         </div>
//                                     </Link>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </header>
//             <header className="header-bottom py-1">
//                 <div className="container-xxl">
//                     <div className="row">
//                         <div className="col-12"></div>
//                         <div className="menu-bottom d-flex align-items-center gap-30">
//                             <div>
//                                 <div class="dropdown">
//                                     <button class="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
//                                         <BsFillGrid3X3GapFill color='#43355E' size={20} />
//                                         <span className='me-5 d-inline-block' style={{ color: '#43355E' }}>Shop Catogories</span>
//                                     </button>
//                                     <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1" >
//                                         <li><Link className="dropdown-item " style={{ color: '#D8B34E' }} to="" >Another action</Link></li>
//                                         <li><Link className="dropdown-item " style={{ color: '#D8B34E' }} to="" >Something else here</Link></li>
//                                         <li><Link className="dropdown-item " style={{ color: '#D8B34E' }} to="" >Action</Link></li>
//                                     </ul>
//                                 </div>
//                             </div>
//                             <div className="menu-links">
//                                 <div className="d-flex align-items-center gap-15" >
//                                     <NavLink to="/" style={{ color: '#43355E' }}>Home</NavLink>
//                                     <NavLink to="/store" style={{ color: '#43355E' }}>Our Store</NavLink>
//                                     <NavLink to={'/blogs'} style={{ color: '#43355E' }}>Blogs</NavLink>
//                                     <NavLink to={"/contact"} style={{ color: '#43355E' }}>Contact</NavLink>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </header>
//         </div>
//     );
// }

// export default Header

import { NavLink } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'
import { BsFillHeartFill } from "react-icons/bs";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { BsCart4 } from "react-icons/bs";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { SiSellfy } from "react-icons/si";
import { BiGitCompare } from "react-icons/bi";
import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';

import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { DropdownButton, Dropdown, Image } from 'react-bootstrap'
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu'
import { logout } from '../actions/userActions'

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();



    const { isAuthenticated, user } = useSelector((state) => state.authState);
    const { items } = useSelector(state => state.cartState);



    const [keyword, setKeyword] = useState("");
    const searchHandler = (e) => {
        e.preventDefault();//to prevent the browser load
        navigate(`/search/${keyword}`);
    }
    const clearKeyword = () => {
        setKeyword("");
    }

    useEffect(() => {
        if (location.pathname === '/') {
            return clearKeyword();
        }
    }, [location])
    const logoutHandler = () => {
        dispatch(logout);
    }

    return (
        <div>
            <header className='header-top-strip py-1'>
                <div className='container-xxl'>
                    <div className='row align-items-center'>
                        <div className='col-2'>
                            <Link to="/">
                                <img
                                    // className='d-block w-70'
                                    style={{ height: 70 }}
                                    src="/Images/mozhi.png"
                                    alt='mozhi'
                                />
                            </Link>
                        </div>
                        <div className='col-5'>
                            {/* <div className="input-group">
                                <input type="text" className="form-control py-2" placeholder="search product here..." aria-label="search product here..." aria-describedby="basic-addon2" />
                                <span className="input-group-text p-3" id="basic-addon2"><BsSearch className='fs-6' /></span>
                            </div> */}
                            <form onSubmit={searchHandler}>
                                <div className="input-group">

                                    <input
                                        type="text"
                                        id="search_field"
                                        className="form-control py-2"
                                        value={keyword}
                                        onChange={(e) => { setKeyword(e.target.value) }}
                                        placeholder="Enter Product Name ..."

                                    />
                                    <span className="input-group-text" id="basic-addon2" style={{ paddingTop: "0px", paddingLeft: "20px", paddingRight: "20px" }}>
                                        <button id="search_btn" className="btn" style={{ paddingTop: "2px", paddingBottom: "2px" }}>
                                            <BsSearch className='fs-4' />
                                            {/* <i className="fa fa-search" aria-hidden="true"></i> */}
                                        </button>
                                    </span>
                                </div>
                            </form>
                        </div>
                        <div className='col-5'>
                            <div className="header-upper-links d-flex  justify-content-between align-items-center">
                                <div>
                                    <Link to={"/compare"} className='d-flex align-items-center gap-10 text-white'>
                                        <BiGitCompare size={25} />
                                        <p className="mb-0">Compare <br /> Products</p>
                                    </Link>
                                </div>&nbsp;&nbsp;
                                <div>
                                    <Link to={"/wishlist"} className='d-flex align-items-center gap-10 text-white'>
                                        <BsFillHeartFill size={25} />
                                        <p className="mb-0">Favorite</p>
                                    </Link>
                                </div>&nbsp;&nbsp;
                                {/* <div>
                                    <Link to={"/seller"} className='d-flex align-items-center gap-10 text-white'>
                                        <SiSellfy size={25} />
                                        <p className="mb-0">Seller</p>
                                    </Link>
                                </div>&nbsp;&nbsp; */}

                                {isAuthenticated ?

                                    (
                                        <Dropdown className='d-inline'>
                                            <Dropdown.Toggle variant='default-text-white pr-5' id='dropdown-basic' >
                                                <figure className='avatar avatar-nav'>
                                                    <Image width={"20px"} style={{borderRadius:'50%'}} src={user.avatar ?? './images/default_avatar.png'} />
                                                </figure>
                                                <span>{user.name}</span>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item onClick={() => { navigate("/myprofile") }} className='text-dark'>Profile</Dropdown.Item>
                                                <Dropdown.Item onClick={() => { navigate("/orders") }} className='text-dark'>Orders</Dropdown.Item>
                                                <Dropdown.Item onClick={logoutHandler} className='text-danger'>Log Out</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    )


                                    :

                                    <div>
                                        <Link to={"/login"} className='d-flex align-items-center gap-10 text-white'>
                                            <BsFillPersonPlusFill size={30} />
                                            <p className="mb-0">SignIn <br /> SignUp</p>
                                        </Link>
                                    </div>
                                }







                                <div>
                                    <Link to={"/cart"} className='d-flex align-items-center gap-10 text-white'>
                                        <BsCart4 size={30} />
                                        <div className='d-flex flex-column gap-10'>
                                            <span className='badge bg-white text-dark'>{items.length}</span>
                                            <p className='mb-0'>Add Cart</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <header className="header-bottom py-1">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12"></div>
                        <div className="menu-bottom d-flex align-items-center gap-30">
                            <div>
                                <div class="dropdown">
                                    <button class="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        <BsFillGrid3X3GapFill color='#43355E' size={20} />
                                        <span className='me-5 d-inline-block' style={{ color: '#43355E' }}>Shop By Brands</span>
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1" >
                                        <li><Link className="dropdown-item " style={{ color: '#D8B34E' }} to="" >Khadi</Link></li>
                                        <li><Link className="dropdown-item " style={{ color: '#D8B34E' }} to="" >StudioCoppre</Link></li>
                                        <li><Link className="dropdown-item " style={{ color: '#D8B34E' }} to="" >Itokri</Link></li>
                                        <li><Link className="dropdown-item " style={{ color: '#D8B34E' }} to="" >Mirraw</Link></li>
                                        <li><Link className="dropdown-item " style={{ color: '#D8B34E' }} to="" >Akkara</Link></li>
                                        <li><Link className="dropdown-item " style={{ color: '#D8B34E' }} to="" >Ekka</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="menu-links">
                                <div className="d-flex align-items-center gap-15" >
                                    <NavLink to="/" style={{ color: '#43355E' }}>Home</NavLink>
                                    {/* <NavLink to="/store" style={{ color: '#43355E' }}>Our Store</NavLink> */}
                                    <NavLink to={'/blogs'} style={{ color: '#43355E' }}>Blogs</NavLink>
                                    <NavLink to={"/contact"} style={{ color: '#43355E' }}>Contact</NavLink>
                                    <NavLink to={"/feed"} style={{ color: '#43355E' }}>Feed</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header
