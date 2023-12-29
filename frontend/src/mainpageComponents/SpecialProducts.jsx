import React, { useState, useEffect } from 'react'
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';
import ProgressBar from '../Pages/ProgressBar';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../actions/productActions';
import { toast } from "react-toastify";
import Loader from '../layouts/Loader';
import { addCartItem } from '../actions/cartActions';

const SpecialProducts = () => {
    // const initialTime = 3 * 24 * 60 * 60; // 3 days in seconds
    const initialTime = 1 * 24 * 60 * 60; // 3 days in seconds
  const [timeLeft, setTimeLeft] = useState(initialTime);
    const [quantity,setQuantity]=useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

    const dispatch = useDispatch();
    const { products, loading, error, productsCount, resPerPage } = useSelector(
    (state) => state.productsState
  );
   useEffect(() => {
    if (error) {
      return toast.error(error, { position: toast.POSITION.BOTTOM_CENTER });
    }
    dispatch(getProducts(null, null, null, null, 1));
    // console.log(currentPage);
  }, [error, dispatch]);
    return (
        <div>
            <section className='special-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <h3>Special Products</h3>
                        </div>
                    </div>
                    {loading ? (
        <Loader />
      ) : (
                    <div className='row'>
                         {products &&
                products.map((product) => (
                        <div className='col-6 mb-3' key={product._id}>
                            <div className='special-product-card' style={{height:"420px"}}>
                                <div className='d-flex justify-content-between'>
                                    <div>
                                        <img src={product.images[0].image} className='img-fluid' alt='copper pot' height={200} />
                                    </div>&nbsp;
                                    <div className='special-product-content'>
                                        <h5 className='brand'>{product.name}</h5>
                                        {/* <h6 className='title'>Lorem ispum</h6> */}
                                        <ReactStars count={5} size={24} value={product.ratings} edit={false} activeColor={'#ffd700'} />
                                        <p className='price'>
                                            <span className='red-p'>₹{product.price}</span>&nbsp;<strike>$200</strike>
                                        </p>
                                        <div className='discount-till d-flex align-items-center gap-10'>
                                            <p className='mb-0'><b>1</b>day</p>
                                            <div className='d-flex gap-10 align-items-center'>
                                                <span className='badge rounded-circle p-3 bg-danger'>{hours < 10 ? `0${hours}` : hours}</span>:
                                                <span className='badge rounded-circle p-3 bg-danger'>{minutes < 10 ? `0${minutes}` : minutes}</span>:
                                                <span className='badge rounded-circle p-3 bg-danger'>{seconds < 10 ? `0${seconds}` : seconds}</span>
                                            </div>
                                        </div>
                                        <div className='prod-count my-3'>
                                            <p>Products: {product.stock}</p>
                                            <div className="progress">
                                                {/* <div className="progress-bar" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div> */}
                                                <ProgressBar />
                                            </div>
                                        </div>
                                        <Link className='button' disabled={product.stock == 0 ? true : false} onClick={() => { dispatch(addCartItem(product._id, quantity)) }}>Add to Cart</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                ))}
                        {/* <div className='col-6 mb-3'>
                            <div className='special-product-card'>
                                <div className='d-flex justify-content-between'>
                                    <div>
                                        <img src='/Images/pot.jpg' className='img-fluid' alt='copper pot' />
                                    </div>&nbsp;
                                    <div className='special-product-content'>
                                        <h5 className='brand'>Lorem ispum</h5>
                                        <h6 className='title'>Lorem ispum</h6>
                                        <ReactStars count={5} size={24} value={3} edit={false} activeColor={'#ffd700'} />
                                        <p className='price'>
                                            <span className='red-p'>$100</span>&nbsp;<strike>$200</strike>
                                        </p>
                                        <div className='discount-till d-flex align-items-center gap-10'>
                                            <p className='mb-0'><b>5</b>days</p>
                                            <div className='d-flex gap-10 align-items-center'>
                                                <span className='badge rounded-circle p-3 bg-danger'>2</span>:
                                                <span className='badge rounded-circle p-3 bg-danger'>2</span>:
                                                <span className='badge rounded-circle p-3 bg-danger'>2</span>
                                            </div>
                                        </div>
                                        <div className='prod-count my-3'>
                                            <p>Products: 5</p>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                        <Link className='button'>Add to Cart</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-6 mb-3'>
                            <div className='special-product-card'>
                                <div className='d-flex justify-content-between'>
                                    <div>
                                        <img src='/Images/pot.jpg' className='img-fluid' alt='copper pot' />
                                    </div>&nbsp;
                                    <div className='special-product-content'>
                                        <h5 className='brand'>Lorem ispum</h5>
                                        <h6 className='title'>Lorem ispum</h6>
                                        <ReactStars count={5} size={24} value={3} edit={false} activeColor={'#ffd700'} />
                                        <p className='price'>
                                            <span className='red-p'>$100</span>&nbsp;<strike>$200</strike>
                                        </p>
                                        <div className='discount-till d-flex align-items-center gap-10'>
                                            <p className='mb-0'><b>5</b>days</p>
                                            <div className='d-flex gap-10 align-items-center'>
                                                <span className='badge rounded-circle p-3 bg-danger'>2</span>:
                                                <span className='badge rounded-circle p-3 bg-danger'>2</span>:
                                                <span className='badge rounded-circle p-3 bg-danger'>2</span>
                                            </div>
                                        </div>
                                        <div className='prod-count my-3'>
                                            <p>Products: 5</p>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                        <Link className='button'>Add to Cart</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-6 mb-3'>
                            <div className='special-product-card'>
                                <div className='d-flex justify-content-between'>
                                    <div>
                                        <img src='/Images/pot.jpg' className='img-fluid' alt='copper pot' />
                                    </div>&nbsp;
                                    <div className='special-product-content'>
                                        <h5 className='brand'>Lorem ispum</h5>
                                        <h6 className='title'>Lorem ispum</h6>
                                        <ReactStars count={5} size={24} value={3} edit={false} activeColor={'#ffd700'} />
                                        <p className='price'>
                                            <span className='red-p'>$100</span>&nbsp;<strike>$200</strike>
                                        </p>
                                        <div className='discount-till d-flex align-items-center gap-10'>
                                            <p className='mb-0'><b>5</b>days</p>
                                            <div className='d-flex gap-10 align-items-center'>
                                                <span className='badge rounded-circle p-3 bg-danger'>2</span>:
                                                <span className='badge rounded-circle p-3 bg-danger'>2</span>:
                                                <span className='badge rounded-circle p-3 bg-danger'>2</span>
                                            </div>
                                        </div>
                                        <div className='prod-count my-3'>
                                            <p>Products: 5</p>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                        <Link className='button'>Add to Cart</Link>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
      )}
                </div>
            </section>
        </div>
    )
}

export default SpecialProducts
