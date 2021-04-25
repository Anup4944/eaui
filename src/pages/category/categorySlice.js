import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isLoading: false,
	status: "",
	message: "",
	categoryList: [],
	show: false,
	selectedCategory: "", 
	
};

const categorySlice = createSlice({
	name: "category",
	initialState,
	reducers: {
		requestPending: state => {
			state.isLoading = true;
		},

		addCategorySuccess: (state, { payload }) => {
			state.isLoading = false;
			state.status = payload.status;
			state.message = payload.message;
		},

		fetchAllCategorySuccess: (state, { payload }) => {
			state.categoryList = payload.result;
			state.isLoading = false;
		},
		toggleCategoryEditModel: state =>{
			state.show  =!state.show

		},

		selectACategory: (state,{payload}) =>{
			state.selectedCategory  =!state.show

		},

		deleteCatsSuccess: (state, { payload }) => {
			state.isLoading = false;
			state.status = payload.status;
			state.message = payload.message;
		},

		requestFail: (state, { payload }) => {
			state.isLoading = false;
			state.status = payload.status;
			state.message = payload.message;
		},
	},
});

const { reducer, actions } = categorySlice;

export const {
	requestPending,
	addCategorySuccess,
	fetchAllCategorySuccess,
	toggleCategoryEditModel,
	requestFail,
	salectACategory,
	deleteCatsSuccess,
} = actions;

export default reducer;
