import { createSlice } from "@reduxjs/toolkit";

const compSlice = createSlice({
    name: 'compareList',
    initialState: {
        items: localStorage.getItem('compareItems') ? JSON.parse(localStorage.getItem('compareItems')) : [],
        loading: false,
       
    },
    reducers: { //how it changes is given in reducer
        addCompItemRequest(state, action) {
            return {
                ...state,
                loading: true,
            }
        },
        addCompItemSuccess(state, action) {
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
                localStorage.setItem('compareItems', JSON.stringify(state.items));
            }
            return state;
        },
        
        removeItemFromComp(state, action) {
            const filterItems = state.items.filter(item => {
                return item.product !== action.payload   //storing item of excluded items like remainin items

            })
            localStorage.setItem('compareItems', JSON.stringify(filterItems));

            return {
                ...state,
                items: filterItems
            }
        },
      
    }
}
);

//we need to create a actioncreator to use 
const { actions, reducer } = compSlice;

export const {
    addCompItemRequest,
    addCompItemSuccess,
    
    removeItemFromComp,
    
} = actions

export default reducer;