
import {requestPending,getProfileSuccess,passwordResetOtpRequest,requestFail  } from "./profileSlice";

import { passOtpRequestAPI } from "../../apis/profileAPI";

export const reqOtpForPassword = email => async dispatch => {
	try {
		dispatch(requestPending());

		const result = await passOtpRequestAPI(email); 
		console.log(result);
		dispatch(passwordResetOtpRequest(result));
		result.status = "success" && dispatch(getProfileSuccess(result.user))
		
	} catch (error) {
		const err = {
			status: "error",
			message: error.message,
		};

		dispatch(requestFail(err));
	}
};
