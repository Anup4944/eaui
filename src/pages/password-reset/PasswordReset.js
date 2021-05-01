import React from "react";
import { PasswordResetForm } from "../../components/password-reset-form/PasssordResetForm";
import { NewPasswordResetForm } from "../../components/password-reset-form/NewPasssordResetForm";
import "./passwordReset.style.css";
import { useSelector } from "react-redux";
import moduleName from 'module'



const PassworReset = () => {
	const {passOtpReset , showNewPassForm} = useSelector(state => state.profile);
	console.log(showNewPassForm)
	return (
		<div className="password-reset-page bg-dark">
			{showNewPassForm  ? <NewPasswordResetForm /> : <PasswordResetForm />}
		</div>
	);
};

export default PassworReset;
