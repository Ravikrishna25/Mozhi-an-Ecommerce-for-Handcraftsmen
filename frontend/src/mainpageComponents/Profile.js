import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

function Profile() {
    const {user} = useSelector((state)=> state.authState);

  return (
    <div className="row justify-content-around mt-5 user-info">
    <div className="col-12 col-md-3">
        <figure className='avatar-pxxxxrofile' style={{marginRight:"25%"}}>
            <img className="rounded-circle img-fluid" src={user.avatar ?? ',/images/default_avatar.png'} alt='' width={500}/>
        </figure>
        <Link to="/myprofile/update"  className="button signup btn-primary btn-block my-5" style={{marginLeft:'20%'}}>
            Edit Profile
        </Link>
    </div>

    <div className="col-12 col-md-5 sum-card">
         <h4>Full Name</h4>
         <p>{user.name}</p>

         <h4>Email Address</h4>
         <p>{user.email}</p>
         <h4>Joined</h4>
         <p>{String(user.createdAt).substring(0,10)}</p>

         <Link href="javascript;" className="button btn-danger btn-block mt-5 me-4" to="/orders">
            My Orders
        </Link>

        <Link to="/myprofile/update/password" className="button signup btn-primary btn-block mt-3">
            Change Password
        </Link>
    </div>
</div>
  )
}

export default Profile