import { createSlice } from "@reduxjs/toolkit";


export const pageAnimateSlice = createSlice({
    name:'page-animate',
    initialState: {
        animate: '',
        explorerFixed: false
    },
    reducers: {
        setAnimate(state,action) {
           state.animate = action.payload;
        },
        setExplorerFixed(state, action) {
            state.explorerFixed = action.payload
        }

    }
})

export const { setAnimate, setExplorerFixed } = pageAnimateSlice.actions;

export default pageAnimateSlice.reducer;
