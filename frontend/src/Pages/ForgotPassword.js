import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clearAuthError, forgotPassword } from '../actions/userActions';
import { toast } from 'react-toastify';

import Meta from '../mainpageComponents/Meta';
import BreadCrumb from '../mainpageComponents/BreadCrumb';
import { Link } from 'react-router-dom';
import CustomInputs from '../mainpageComponents/CustomInputs';

const ForgotPassword = () => {

    const [email, setEmail] = useState("");
    const dispatch = useDispatch();

    const { error, message } = useSelector(state => state.authState);
    const submitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('email', email);
        dispatch(forgotPassword(formData));
    }


    useEffect(() => {
        if (message) {
            toast(message, {
                type: "success",
                position: "bottom-center"
            })
            setEmail("");
            return;
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
    }, [message, error, dispatch])

    return (
        <div>
            <Meta title={"Forgot Password"} />
            <BreadCrumb title="Forgot Password" />
            <div className='login-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='auth-card'>
                                <h3 className='mb-3' style={{ marginTop: '5px' }}>Forgot Password</h3>
                                <p className='text-center mt-2 mb-3'>We Will Send you an email to reset your password</p>
                                <form onSubmit={submitHandler} className='d-flex flex-column gap-15'>
                                    <input
                                        type="email"
                                        id="email_field"
                                        className="form-control"
                                        value={email}
                                        placeholder='Enter Your Email'
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                    <div>
                                        <div className='mt-3 d-flex justify-content-center flex-column gap-30 align-items-center'>
                                            <button className='button border-0' type='submit'>Submit</button>
                                            <Link to={"/login"}>Cancel</Link>
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

export default ForgotPassword
