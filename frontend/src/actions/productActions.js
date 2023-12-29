import axios from "axios";
import { createReviewFail, createReviewRequest, createReviewSuccess, productFail, productRequest, productSuccess } from "../slices/productSlice";
import { productsFail, productsRequest, productsSuccess } from "../slices/productsSlice";
import { categoryProductsFail, categoryProductsRequest, categoryProductsSuccess } from "../slices/categorySlice";

export const getProducts =(keyword,price,category,rating,currentPage) =>  async (dispatch)=>{//dispatch is a hook to change the state
    try{
        dispatch(productsRequest());//here productRequest is the payload
        let link=`/api/v1/products?page=${currentPage}`;


        if(keyword){
            link +=`&keyword=${keyword}`
        }

        if(price){
            link +=`&price[gte]=${price[0]}&price[lte]=${price[1]}`;
        }
        if(category){
            link +=`&category=${category}`;
        }
        if(rating){
            link +=`&ratings=${rating}`;
        }
        const {data} = await axios.get(link);
        dispatch(productsSuccess(data));

    }catch(error){ 
        //handle error
        dispatch(productsFail(error.response.data.message))

    }
}  

export const getCategoryProducts =(category,currentPage) =>  async (dispatch)=>{//dispatch is a hook to change the state
    try{
        dispatch(categoryProductsRequest());//here productRequest is the payload
        let link=`/api/v1/products?page=${currentPage}`;

        if(category){
            link +=`&category=${category}`;
        }
       
        const {data} = await axios.get(link);
        dispatch(categoryProductsSuccess(data));

    }catch(error){ 
        //handle error
        dispatch(categoryProductsFail(error.response.data.message))

    }
}  

export const getProduct = id => async (dispatch)=>{//dispatch is a hook to change the state and id is a parametr to get a specific product thru url
    try{
        dispatch(productRequest());//here productRequest is the payload
        const {data} = await axios.get(`/api/v1/product/${id}`);
        dispatch(productSuccess(data));

    }catch(error){ 
        //handle error
        dispatch(productFail(error.response.data.message))

    }
}  


export const createReview = reviewData => async (dispatch) => {

    try {  
        dispatch(createReviewRequest()) 
        const config = {
            headers : {
                'Content-type': 'application/json'
            }
        } //to send these review data  into json we use this config
        const { data }  =  await axios.put(`/api/v1/review`,reviewData, config);
        dispatch(createReviewSuccess(data))
    } catch (error) {
       
        dispatch(createReviewFail(error.response.data.message))
    }
    
}