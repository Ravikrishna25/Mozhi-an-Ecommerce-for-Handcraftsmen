import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clearAuthError, updatePassword as updatePasswordAction } from '../actions/userActions';
import { toast } from 'react-toastify';
import Meta from '../mainpageComponents/Meta';
import BreadCrumb from '../mainpageComponents/BreadCrumb';

import { Link, useNavigate } from 'react-router-dom';


function UpdatePassword() {
    const [password, setPassword] = useState("");
    const [oldPassword, setOldPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isUpdated, error } = useSelector(state => state.authState);
    const submitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('oldPassword', oldPassword);
        formData.append('password', password);
        dispatch(updatePasswordAction(formData));

    }

    useEffect(() => {
        if (isUpdated) {
            toast("Password Updated Successfully", {
                type: 'success',
                position: "bottom-center",
            })
            setOldPassword("");
            setPassword("");
            // navigate("/myprofile")
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
    }, [isUpdated, error, dispatch])
    return (
        // <div className="row wrapper">
        //             <div className="col-10 col-lg-5">
        //                 <form className="shadow-lg" onSubmit={submitHandler}>
        //                     <h1 className="mt-2 mb-5">Update Password</h1>
        //                     <div className="form-group">
        //                         <label htmlFor="old_password_field">Old Password</label>
        //                     </div>

        //                     <div className="form-group">
        //                         <label htmlFor="new_password_field">New Password</label>
        //                     </div>

        //                     <button type="submit" className="btn update-btn btn-block mt-4 mb-3">Update Password</button>
        //                 </form>
        //             </div>
        //         </div>
        <div>
            <Meta title={"Update Password"} />
            <BreadCrumb title="Update Password" />
            <div className='login-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='auth-card'>
                                <h3 className='mb-3' style={{ marginTop: '5px' }}>Update Password</h3>
                                <form onSubmit={submitHandler} className='d-flex flex-column gap-15'>

                                    <input
                                        type="password"
                                        id="old_password_field"
                                        className="form-control"
                                        value={oldPassword}
                                        placeholder='Old Password'
                                        onChange={e => setOldPassword(e.target.value)}
                                    />
                                    {/* <input
                                        type='password'
                                        name='password'
                                        placeholder='Password'
                                        className={`form-control`}
                                        
                                        value={password}
                                        onChange={(e) => { setPassword(e.target.value) }}
                                        
                                    /> */}
                                    <input
                                        type="password"
                                        id="new_password_field"
                                        className="form-control"
                                        value={password}
                                        placeholder='new Password'
                                        onChange={e => setPassword(e.target.value)}
                                        />


                                    <div>
                                        <div className='mt-3 d-flex justify-content-center gap-30 align-items-center'>
                                            <button className='button border-0' type='submit' >Update</button>
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

export default UpdatePassword
{/* <input
    type="password"
    id="old_password_field"
    className="form-control"
    value={oldPassword}
    onChange={e=> setOldPassword(e.target.value)}
/> */}
    // <input
    //     type="password"
    //     id="new_password_field"
    //     className="form-control"
    //     value={password}
    //     onChange={e=> setPassword(e.target.value)}
    // />