import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isLoading: false,
	userResponse: {},
	adminProfile: {},
	showNewPassForm: false,
};

const profileSlice = createSlice({
	name: "profile",
	initialState,
	reducers: {
		requestPending: state => {
			state.isLoading = true;
		},
		getProfileSuccess: (state, { payload }) => {
			state.isLoading = false;
			state.adminProfile = payload;
		},
		passwordResetOtpRequest : (state, {payload}) => {
			state.isLoading = false;
			state.showNewPassForm = payload.status === "success" ? true  : false;
			state.passOptRequest = payload;
		},

		requestFail: (state, { payload }) => {
			state.isLoading = false;
			state.userResponse = payload;
		},
	},
});

const { reducer, actions } = profileSlice;

export const { requestPending, getProfileSuccess, requestFail,passwordResetOtpRequest } = actions;

export default reducer;