// import React, { Fragment, useEffect, useState } from 'react'

// import CarouselFadeExample from '../mainpageComponents/Carousel'
// import Categories from '../mainpageComponents/Categories'
// import Blog from '../mainpageComponents/Blog'
// import ProductsPage from '../mainpageComponents/ProductsPage'
// import SpecialProducts from '../mainpageComponents/SpecialProducts'
// import PopularProducts from '../mainpageComponents/PopularProducts'
// import BigCard from '../mainpageComponents/BigCard'
// import { useDispatch, useSelector } from 'react-redux';

// import { getProducts } from '../actions/productActions'
// import Loader from '../layouts/Loader';

// import { toast } from 'react-toastify';
// import Pagination from "react-js-pagination";
// function Home() {

//     const dispatch = useDispatch();

//     const { products, loading, error, productsCount, resPerPage } = useSelector((state) => state.productsState)
//     const [currentPage, setCurrentPage] = useState(1);

//     const setCurrentPageNo = (pageNo) => {

//         setCurrentPage(pageNo)
//         // console.log(currentPage);

//     }


//     useEffect(() => {
//         if (error) {

//             return toast.error(error, { position: toast.POSITION.BOTTOM_CENTER })
//         }
//         dispatch(getProducts(null, null, null, null, currentPage))
//         console.log(currentPage);
//     }, [error, dispatch, currentPage]);

//     return (
//         <div>
//             <div className='home'>
//                 {/* <CarouselFadeExample />
//                 <Categories />
//                 <ProductsPage />
//                 <BigCard />
//                 <SpecialProducts />
//                 <PopularProducts />
//                 <Blog /> */}
//                 {/* <CarouselFadeExample />
//                 <Categories /> */}

//                 {/* <> */}
//                 <div className='col-12'>
//                     <h3 className='section-heading'>Our Featured Products</h3>
//                 </div>
//                 <ProductsPage />
//                 {/* </> */}


//                 {/* <BigCard />
//                 <SpecialProducts />
//                 <PopularProducts />
//                 <Blog /> */}
//             </div>
//         </div>
//     )
// }

// export default Home
import React, { Fragment, useEffect, useState } from 'react'

import CarouselFadeExample from '../mainpageComponents/Carousel'
import Categories from '../mainpageComponents/Categories'
import Blog from '../mainpageComponents/Blog'
import ProductsPage from '../mainpageComponents/ProductsPage'
import SpecialProducts from '../mainpageComponents/SpecialProducts'
import PopularProducts from '../mainpageComponents/PopularProducts'
import BigCard from '../mainpageComponents/BigCard'
import { useDispatch, useSelector } from 'react-redux';

import { getProducts } from '../actions/productActions'
import Loader from '../layouts/Loader';

import { toast } from 'react-toastify';
import Pagination from "react-js-pagination";
import ReactPlayer from 'react-player'
import Videoplayer from '../components/Videoplayer'

function Home() {


    const dispatch = useDispatch();

    const { products, loading, error, productsCount, resPerPage } = useSelector((state) => state.productsState)
    const [currentPage, setCurrentPage] = useState(1);

    const setCurrentPageNo = (pageNo) => {

        setCurrentPage(pageNo)
        // console.log(currentPage);

    }


    useEffect(() => {
        if (error) {

            return toast.error(error, { position: toast.POSITION.BOTTOM_CENTER })
        }
        dispatch(getProducts(null, null, null, null, currentPage))
        console.log(currentPage);
    }, [error, dispatch, currentPage]);

    return (
        <div>
            <div className='home'>
                <CarouselFadeExample />
                <Categories />

                {/* <> */}
                <div className='col-12'>
                    <h3 className='section-heading'>Our Featured Products</h3>
                </div>
                <ProductsPage />
                {/* </> */} 
                {/* <Videoplayer /> */}


                {/* <BigCard /> */}
                {/* <SpecialProducts /> */}
                {/* <PopularProducts />*/}
               
<Blog />
            </div>
        </div>
    )
}

export default Home
