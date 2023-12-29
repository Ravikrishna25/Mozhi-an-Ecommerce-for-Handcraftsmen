import React from 'react';
import Meta from '../mainpageComponents/Meta';
import BreadCrumb from '../mainpageComponents/BreadCrumb';

const ShippingPolicy = () => {
    return (
        <div>
            <Meta title={"Shipping Policy"} />
            <BreadCrumb title="Shipping Policy" />
            <section className='policy-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='policy'>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ShippingPolicy
