import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'product',
    initialState: {
        loading: false,
        product: {},
        isReviewSubmitted: false,
    },
    reducers: { //how it changes is given in reducer
        productRequest(state, action) {
            return {
                ...state,
                loading: true,
            }
        },
        productSuccess(state, action) {
            return {
                ...state,
                loading: false,
                product: action.payload.product   //to store the data in get request 
            }
        },
        productFail(state, action) {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        },
        createReviewRequest(state, action) {
            return {
                ...state,
                loading: true,
            }
        },
        createReviewSuccess(state, action) {
            return {
                loading: false,
                isReviewSubmitted: true,
            }
        },
        createReviewFail(state, action) {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        },
        clearReviewSubmitted(state, action) {
            return {
                ...state,
                isReviewSubmitted: false
            }
        },
        clearError(state, action) {
            return {
                ...state,
                error: null
            }
        },
        clearProduct(state, action) {
            return {
                ...state,
                product: {}
            }
        },

    }
});

//we need to create a actioncreator to use 
const { actions, reducer } = productSlice;

export const { productRequest, 
    productSuccess,
     productFail,
     createReviewRequest,
     createReviewSuccess,
     createReviewFail,
     clearReviewSubmitted,
     clearError,
     clearProduct
     } = actions

export default reducer;