import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: 'Category',
    initialState:{
        loading: false
    },
    reducers: { //how it changes is given in reducer
        categoryProductsRequest(state,action){
          return {
            loading:true,
          }
        },
        categoryProductsSuccess(state,action){
            return {
                loading:false,
                products:action.payload.products,   //to store the data in get request 
                productsCount:action.payload.count,
                resPerPage:  action.payload.resPerPage
            } 
        },
        categoryProductsFail(state,action){
            return {
                loading:false,
                error: action.payload
            }
        }
    }
});

//we need to create a actioncreator to use 
const {actions,reducer} = productsSlice;

export const {categoryProductsRequest,categoryProductsSuccess,categoryProductsFail} = actions

export default reducer;