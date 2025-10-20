import {createSlice} from "@reduxjs/toolkit";
const cart = createSlice({
    name : "cartSlicer",
    initialState : {
        items : [],
        count : 0
    },
    reducers : {
        addItems : (state, actions) => {
            state.items.push({...actions.payload, quantity : 1});
            state.count += 1;
        },
        IncremenetItems : (state, actions) => {
            const element = state.items.find(item => item.id === actions.payload.id);
            element.quantity += 1;
            state.count += 1;
        },
        DecrementItems : (state, actions) =>{
             const element = state.items.find(item => item.id === actions.payload.id);
            element.quantity -= 1;
            state.count -= 1;
            if (element.quantity === 0) {
                state.items = state.items.filter (item => item.id != actions.payload.id);
            }
        }
    }
}) 
export const {addItems, IncremenetItems, DecrementItems} = cart.actions;
export const CartReducer = cart.reducer;