import { createSlice } from "@reduxjs/toolkit";


export const pageAnimateSlice = createSlice({
    name:'page-animate',
    initialState: {
        animate: ''
    },
    reducers: {
        setAnimate(state,action) {
           state.animate = action.payload;
        },

    }
})

export const {setAnimate} = pageAnimateSlice.actions;

export default pageAnimateSlice.reducer;
