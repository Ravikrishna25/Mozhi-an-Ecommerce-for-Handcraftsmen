import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'wishlist',
    initialState: {
        items: localStorage.getItem('wishItems') ? JSON.parse(localStorage.getItem('wishItems')) : [],
        loading: false,
       
    },
    reducers: { //how it changes is given in reducer
        addWishItemRequest(state, action) {
            return {
                ...state,
                loading: true,
            }
        },
        addWishItemSuccess(state, action) {
            const item = action.payload
            const isItemExist = state.items.find(i => i.product === item.product); //need to store the unique items and no repeat
            if (isItemExist) {
                state = {
                    ...state,
                    loading: false
                }
            } else {

                state = {
                    items: [...state.items, item],
                    loading: false
                }
                localStorage.setItem('wishItems', JSON.stringify(state.items));
            }
            return state;
        },
        
        removeItemFromWish(state, action) {
            const filterItems = state.items.filter(item => {
                return item.product !== action.payload   //storing item of excluded items like remainin items

            })
            localStorage.setItem('wishItems', JSON.stringify(filterItems));

            return {
                ...state,
                items: filterItems
            }
        },
      
    }
}
);

//we need to create a actioncreator to use 
const { actions, reducer } = cartSlice;

export const {
    addWishItemRequest,
    addWishItemSuccess,
    
    removeItemFromWish,
    
} = actions

export default reducer;