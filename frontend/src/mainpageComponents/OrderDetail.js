import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Loader from '../layouts/Loader';
import { orderDetail as orderDetailAction } from '../actions/orderActions';
import { Card } from 'antd';
export default function OrderDetail() {
    const { orderDetail, loading } = useSelector(state => state.orderState)
    const { shippingInfo = {}, user = {}, orderStatus = "Processing", orderItems = [], totalPrice = 0, paymentInfo = {} } = orderDetail;
    const isPaid = paymentInfo && paymentInfo.status === "succeeded" ? true : false;
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(orderDetailAction(id))
    }, [id])

    return (
        <Fragment>
            {loading ? <Loader /> :
                <Fragment>
                    <div className=" d-flex justify-content-between">
                        <div className="col-12 mt-5 order-details">
                            <div style={{display:"flex"}}>
                            <Card className='card-wrapper' style={{marginRight:"10%"}}>


                                <h1 className="my-5">Order No: {orderDetail._id}</h1>

                                <h4 className="mb-4">Shipping Info</h4>
                                <p><b>Name:</b> {user.name}</p>
                                <p><b>Phone:</b> {shippingInfo.phoneNo}</p>
                                <p className="mb-4"><b>Address:</b>{shippingInfo.address}, {shippingInfo.city}, {shippingInfo.postalCode}, {shippingInfo.state}, {shippingInfo.country}</p>
                                <p><b>Amount:</b> ${totalPrice}</p>

                            </Card>
                            {/* <hr /> */}
                            <Card className='card-wrapper' style={{width:"30%"}}>
                                <h4 className="my-4">Payment</h4>
                                <p className={isPaid ? 'greenColor' : 'redColor'} ><b>{isPaid ? 'PAID' : 'NOT PAID'}</b></p>
                                <h4 className="my-4">Paid At</h4>
                                <p className={isPaid ? 'greenColor' : 'redColor'} ><b>{isPaid ? `${orderDetail.paidAt}` : 'NOT PAID'}</b></p>


                                <h4 className="my-4">Order Status:</h4>
                                <p className={orderStatus && orderStatus.includes('Delivered') ? 'greenColor' : 'redColor'} ><b>{orderStatus}</b></p>
                                <h4 className="my-4">Total Amount:</h4>
                                <p><b>₹{orderDetail.totalPrice}</b></p>

                            </Card>
                            </div>
                            <center><h4 className="my-4">Order Items</h4></center>
                            <hr style={{width:"10%",marginLeft:"45%"}}/>

                            <Card className='card-wrapper mb-5'>
                                <div className="cart-item my-1">
                                    {orderItems && orderItems.map(item => (
                                        <div className="row my-5">
                                            <div className="col-4 col-lg-2">
                                                <img src={item.image} alt={item.name} height="45" width="65" />
                                            </div>

                                            <div className="col-5 col-lg-5 title">
                                                <Link to={`/product/${item.product}`} style={{ color: "#43355E" }}>{item.name}</Link>
                                            </div>


                                            <div className="col-4 col-lg-2 mt-4 mt-lg-0">
                                                <p>${item.price}</p>
                                            </div>

                                            <div className="col-4 col-lg-3 mt-4 mt-lg-0">
                                                <p>{item.quantity} Piece(s)</p>
                                            </div>
                                            {/* <hr /> */}
                                        </div>
                                    ))}

                                </div>
                            </Card>
                        </div>
                    </div>
                </Fragment>
            }
        </Fragment>
    )
}