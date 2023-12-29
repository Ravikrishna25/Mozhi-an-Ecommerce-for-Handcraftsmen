import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import OurStore from './Pages/OurStore';
import Blogs from './Pages/Blogs';
import CompareProducts from './Pages/CompareProducts';
import WishList from './Pages/WishList';
import Login from './Pages/Login';
import ForgotPassword from './Pages/ForgotPassword';
import SignUp from './Pages/SignUp';
import ResetPassword from './Pages/ResetPassword';
import SingleBlog from './Pages/SingleBlog';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import ShippingPolicy from './Pages/ShippingPolicy';
import RefundPolicy from './Pages/RefundPolicy';
import TermsAndConditions from './Pages/TermsAndConditions';
import SingleProduct from './Pages/SingleProduct';
import Cart from './Pages/Cart';
import Shipping from './Pages/Shipping';
import store from "./store"
import 'react-toastify/dist/ReactToastify.css';

import { loadUser } from './actions/userActions';
import ProtectedRoute from './components/route/ProtectedRoute'
import Profile from "./mainpageComponents/Profile"
import UpdateProfile from "./mainpageComponents/UpdateProfile"
import UpdatePassword from './mainpageComponents/UpdatePassword';
import ConfirmOrder from './Pages/ConfirmOrder';
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios';
import Payment from './Pages/Payment';
import OrderSuccess from './Pages/OrderSuccess';
import UserOrders from './mainpageComponents/UserOrders';
import OrderDetail from './mainpageComponents/OrderDetail';
import ProgressBar from './Pages/ProgressBar';
import Shome from './mainpageComponents/Shome';
import CategoryList from './mainpageComponents/CategoryList';
import Feed from './components/Feed';
// import VideoPlayer from './components/Videoplayer';


function App() {


  const [stripeApiKey, setStripeApiKey] = useState("")
  useEffect(() => {
    store.dispatch(loadUser)//alternative way of using dispatch
    async function getStripeApiKey() {
      const { data } = await axios.get('/api/v1/stripeapi')
      setStripeApiKey(data.stripeApiKey)
    }
    getStripeApiKey()
  }, [])


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path='/search/:keyword' element={<OurStore />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/category/:name" element={<CategoryList />} />
          <Route path='/myprofile' element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path='/myprofile/update' element={<ProtectedRoute><UpdateProfile /></ProtectedRoute>} />
          <Route path='/myprofile/update/password' element={<ProtectedRoute><UpdatePassword /></ProtectedRoute>} />
          <Route path="/Password/forgot" element={<ForgotPassword />} />
          <Route path='/password/reset/:token' element={<ResetPassword />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path='/order/confirm' element={<ProtectedRoute><ConfirmOrder /></ProtectedRoute>} />
          <Route path='/order/success' element={<ProtectedRoute><OrderSuccess /></ProtectedRoute>} />
          <Route path='/orders' element={<ProtectedRoute><UserOrders /></ProtectedRoute>} />
          <Route path='/order/:id' element={<ProtectedRoute><OrderDetail /></ProtectedRoute>} />
          <Route path="/progress" element={<ProgressBar />} />
          <Route path="/shome" element={<Shome />} />

          {
            stripeApiKey && <Route path='/payment'
              element={
                <ProtectedRoute>
                  <Elements stripe={loadStripe(stripeApiKey)}>
                    <Payment />
                  </Elements>
                </ProtectedRoute>
              } />
          }






          <Route path='about' element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<SingleBlog />} />
          <Route path="/compare" element={<CompareProducts />} />
          <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/refundPolicy" element={<RefundPolicy />} />
          <Route path="/shippingPolicy" element={<ShippingPolicy />} />
          <Route path="/termsAndCondition" element={<TermsAndConditions />} />
          <Route path="/feed" element={<Feed />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
