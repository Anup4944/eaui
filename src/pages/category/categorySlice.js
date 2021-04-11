import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    status: "",
    message: "",
    categoryList: []
}


const categorySlice = createSlice({
    name: "category", 
    initialState,
    reducers:{
        requestPending:(state) =>{
            state.isLoading = true
        },

        addCategorySuccess: (state, {payload}) =>{
            state.isLoading = false
            state.status = payload.status
            state.message = payload.message

        } ,

        fetchAllCategorySuccess:(state, {payload}) =>{
            state.cateoryList = payload;
        },


        requestFail: (state, {payload}) => {
            state.isLoading = false
            state.status = payload.status
            state.message = payload.message
        }
    }
})


const {reducer,actions} =  categorySlice;
export default reducer
export const {requestPending, addCategorySuccess, fetchAllCategorySuccess, requestFail, } = actions;