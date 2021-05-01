import axios from "axios";

const rootUrl = "http://localhost:8000/api/v1/user";
const logoutEndPoint = rootUrl + "logout";

export const passOtpRequestAPI = email => {
	return new Promise(async (resolve, reject) => {
		try {
			const { data } = await axios.post(otpReqEp, );

			resolve(data);
		} catch (error) {
			reject(error);
		}
	});
};
