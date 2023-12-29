// import React from 'react';
// import Meta from '../mainpageComponents/Meta';
// import BreadCrumb from '../mainpageComponents/BreadCrumb';
// import { Link } from 'react-router-dom';
// import CustomInputs from '../mainpageComponents/CustomInputs';

// const SignUp = () => {
//     return (
//         <div>
//             <Meta title={"Sign Up"} />
//             <BreadCrumb title="Sign Up" />
//             <div className='login-wrapper py-5 home-wrapper-2'>
//                 <div className='container-xxl'>
//                     <div className='row'>
//                         <div className='col-12'>
//                             <div className='auth-card'>
//                                 <h3 className='mb-3' style={{ marginTop: '5px' }}>Sign Up</h3>
//                                 <form action='' className='d-flex flex-column gap-15'>
//                                     <CustomInputs type='text' name='name' placeholder='Name' />
//                                     <CustomInputs type='email' name='email' placeholder='Email' />
//                                     <CustomInputs type='password' name='password' placeholder='Password' />
//                                     <CustomInputs type='tel' name='mobile' placeholder='Mobile Number' />
//                                     <div className='mt-3 d-flex justify-content-center gap-30 align-items-center'>
//                                         <button className='button border-0'>Sign Up</button>
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

// export default SignUp
import React, { useEffect, useState } from 'react'
import Meta from '../mainpageComponents/Meta';
import BreadCrumb from '../mainpageComponents/BreadCrumb';
import { useDispatch, useSelector } from 'react-redux';
import { register, clearAuthError } from '../actions/userActions';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import CustomInputs from '../mainpageComponents/CustomInputs';
const SignUp = () => {
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: ""
    });
    const [avatar, setAvatar] = useState("");
    const [avatarPreview, setAvatarPreview] = useState("/images/default_avatar.png");

    const dispatch = useDispatch();
    const { loading, error, isAuthenticated } = useSelector(state => state.authState);
    const navigate = useNavigate();
    const onChange = (e) => {
        if (e.target.name === "avatar") {
            const reader = new FileReader();
            reader.onload = () => {
                if (reader.readyState === 2) {
                    setAvatarPreview(reader.result);
                    console.log(reader.result);
                    setAvatar(e.target.files[0])
                }
            }
            reader.readAsDataURL(e.target.files[0])
        } else {

            setUserData({
                ...userData, [e.target.name]: e.target.value
            })
        }

    }

    const submitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', userData.name);
        formData.append('email', userData.email);
        formData.append('password', userData.password);
        formData.append('avatar', avatar);
        dispatch(register(formData))

    }

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/");
            return
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
            <Meta title={"Sign Up"} />
            <BreadCrumb title="Sign Up" />
            <div className='login-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='auth-card'>
                                <h3 className='mb-3' style={{ marginTop: '5px' }}>Sign Up</h3>
                                <form onSubmit={submitHandler} encType='multipart/form-data' className='d-flex flex-column gap-15'>
                                    <input name='name' onChange={onChange} type="name" id="name_field" placeholder='Name' className="form-control" />
                                    <input
                                        type="email"
                                        name='email' onChange={onChange}
                                        id="email_field"
                                        className="form-control"
                                        placeholder='Email'

                                    />
                                    <input
                                        type="password"
                                        name='password' onChange={onChange}
                                        id="password_field"
                                        className="form-control"
                                        placeholder='Password'

                                    />
                                    {/* <CustomInputs type='tel' name='mobile' placeholder='Mobile Number' /> */}
                                    <div className='d-flex align-items-center'>
                                        <div>
                                            <figure className='avatar mr-3 item-rtl'>
                                                <img
                                                    src={avatarPreview}
                                                    className='rounded-circle'
                                                    alt='Avatar'
                                                />
                                            </figure>
                                        </div>
                                        <div className='custom-file'>
                                            <input

                                                type='file'
                                                name='avatar'
                                                onChange={onChange}
                                                className='custom-file-input'
                                                id='customFile'
                                            />

                                        </div>
                                    </div>
                                    <div className='mt-3 d-flex justify-content-center gap-30 align-items-center'>
                                        <button className='button border-0'>Sign Up</button>
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

export default SignUp
