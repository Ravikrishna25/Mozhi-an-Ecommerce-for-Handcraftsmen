import React from 'react';
import Meta from '../mainpageComponents/Meta';
import BreadCrumb from '../mainpageComponents/BreadCrumb';

const RefundPolicy = () => {
    return (
        <div>
            <Meta title={"Refund Policy"} />
            <BreadCrumb title="Refund Policy" />
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

export default RefundPolicy
