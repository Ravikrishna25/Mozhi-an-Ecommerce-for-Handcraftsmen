import React from 'react'

const BigCard = () => {
    return (
        <div>
            <section className='famous-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-3'>
                            <div className='famous-card position-relative'>
                                <img src='/Images/pot-3.jpeg' className='img-fluid' alt='storage_Box' style={{ opacity: 0.6, height: 300, width: 500 }} />
                                <div className='famous-content position-absolute'>
                                    <h5><b>Big Screen</b></h5>
                                    <h6>Smart Watch Series 7</h6>
                                    <p>From $399 to $16.24</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='famous-card position-relative'>
                                <img src='/Images/clayPot-3.jpg' className='img-fluid' alt='storage_Box' style={{ opacity: 0.7, height: 300, width: 500, objectFit: "fill" }} />
                                <div className='famous-content position-absolute'>
                                    <h5 className='text-dark'><b>Studio Display</b></h5>
                                    <h6 className='text-dark'>600 nits of brightness</h6>
                                    <p className='text-dark'>27-inches 5k retina display</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='famous-card position-relative'>
                                <img src='/Images/clayPot.jpg' className='img-fluid' alt='storage_Box' style={{ opacity: 0.7, height: 300, width: 500 }} />
                                <div className='famous-content position-absolute'>
                                    <h5><b>Smartphones</b></h5>
                                    <h6>Smartphone 13 Pro</h6>
                                    <p>Now in Green.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='famous-card position-relative'>
                                <img src='/Images/woodMandala.jpeg' className='img-fluid' alt='storage_Box' style={{ opacity: 0.6, height: 300, width: 500 }} />
                                <div className='famous-content position-absolute'>
                                    <h5><b>Smartphones</b></h5>
                                    <h6>Smartphone 13 Pro</h6>
                                    <p>Now in Green.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BigCard
