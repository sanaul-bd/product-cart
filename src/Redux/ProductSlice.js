import { createSlice } from "@reduxjs/toolkit";


// object freeze method for declare a object only for use not re assign. 
export const status = Object.freeze({
    success: "success",
    error: "error",
    loading: "loading"
})

const productSlice = createSlice({
    name: "product",
    initialState: {
        data: [],
        status: status.success
    },
    reducers: {
        setProduct: (state, action) => {
            state.data = action.payload
        },
        setStatus: (state, action) => {
            state.status = action.payload
        }
    }
});

export default productSlice.reducer;
export const { setProduct, setStatus } = productSlice.actions;


// middleWare - asyncThunk : if u use this kind of middleware u should install.
export function fetchProducts() {
    // return async function fetchProductsThunk(dispatch, getState) 2 perameter use if u have multipole state . 
    return async function fetchProductsThunk(dispatch) {
        dispatch(setStatus(status.loading));
        // use try catch for more 
        try {
            const res = await fetch("https://fakestoreapi.com/products")
            const data = await res.json();
            dispatch(setProduct(data))
            dispatch.setStatus(status.success)
        } catch (error) {
            console.log(error);
            dispatch(setStatus(status.error))
        }
    }
}