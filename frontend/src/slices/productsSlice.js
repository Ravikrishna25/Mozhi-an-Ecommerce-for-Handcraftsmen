import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: 'products',
    initialState:{
        loading: false
    },
    reducers: { //how it changes is given in reducer
        productsRequest(state,action){
          return {
            loading:true,
          }
        },
        productsSuccess(state,action){
            return {
                loading:false,
                products:action.payload.products,   //to store the data in get request 
                productsCount:action.payload.count,
                resPerPage:  action.payload.resPerPage
            } 
        },
        productsFail(state,action){
            return {
                loading:false,
                error: action.payload
            }
        }
    }
});

//we need to create a actioncreator to use 
const {actions,reducer} = productsSlice;

export const {productsRequest,productsSuccess,productsFail} = actions

export default reducer;