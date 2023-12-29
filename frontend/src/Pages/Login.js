// import React from 'react';
// import Meta from '../mainpageComponents/Meta';
// import BreadCrumb from '../mainpageComponents/BreadCrumb';
// import { Link } from 'react-router-dom';
// import CustomInputs from '../mainpageComponents/CustomInputs';

// const Login = () => {
//     return (
//         <div>
//             <Meta title={"Singin"} />
//             <BreadCrumb title="Singin" />
//             <div className='login-wrapper py-5 home-wrapper-2'>
//                 <div className='container-xxl'>
//                     <div className='row'>
//                         <div className='col-12'>
//                             <div className='auth-card'>
//                                 <h3 className='mb-3' style={{ marginTop: '5px' }}>Login</h3>
//                                 <form action='' className='d-flex flex-column gap-15'>
//                                     <CustomInputs type='email' name='email' placeholder='Email' />
//                                     <CustomInputs type='password' name='password' placeholder='Password' />
//                                     <div>
//                                         <Link to={"/forgotPassword"}>Forgot Password?</Link>
//                                         <div className='mt-3 d-flex justify-content-center gap-30 align-items-center'>
//                                             <button className='button border-0' type='submit'>Login</button>
//                                             <Link to={"/signup"} className='button signup'>SignUp</Link>
//                                         </div>
//                                     </div>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Login
import React, { Fragment, useEffect, useState } from 'react';
import Meta from '../mainpageComponents/Meta';
import BreadCrumb from '../mainpageComponents/BreadCrumb';
import { login, clearAuthError } from '../actions/userActions';
import { toast } from "react-toastify";

import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';

import CustomInputs from '../mainpageComponents/CustomInputs';


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // const email="test@gmail.com";
    // const password = "123456";
    const location = useLocation();
    const redirect = location.search ? '/' + location.search.split('=')[1] : '/';

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, error, isAuthenticated } = useSelector(state => state.authState)

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(email);
        dispatch(login(email, password));
    }
    useEffect(() => {
        if (isAuthenticated) {
            navigate(redirect);
            // window.location.reload(); 
            // console.log("success");  
            // // // window.location.href = '/';
            // // console.log("login to home ");  
        }
        if (error) {
            toast(error, {
                position: toast.POSITION.BOTTOM_CENTER,
                type: "error",
                onOpen: () => {
                    dispatch(clearAuthError)
                }
            })
            return

        }
    }, [error, isAuthenticated, dispatch, navigate])

    return (
        <div>
            <Meta title={"Signin"} />
            <BreadCrumb title="SignIn" />
            <div className='login-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='auth-card'>
                                <h3 className='mb-3' style={{ marginTop: '5px' }}>Login</h3>
                                <form onSubmit={submitHandler} className='d-flex flex-column gap-15'>

                                    <input
                                        type='email'
                                        name='email'
                                        placeholder='Email'
                                        className={`form-control`}
                                        value={email}
                                        onChange={(e) => { setEmail(e.target.value) }}

                                    />
                                    <input
                                        type='password'
                                        name='password'
                                        placeholder='Password'
                                        className={`form-control`}

                                        value={password}
                                        onChange={(e) => { setPassword(e.target.value) }}

                                    />


                                    <div>
                                        <Link to={"/Password/forgot"}>Forgot Password?</Link>
                                        <div className='mt-3 d-flex justify-content-center gap-30 align-items-center'>
                                            <button className='button border-0' type='submit' >Login</button>
                                            <Link to={"/signup"} className='button signup'>SignUp</Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
