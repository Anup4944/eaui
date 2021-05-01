import React, { useState } from "react";

import { Card, Form, Button } from "react-bootstrap";

import "./newpasswordReset.style.css";

const initialState = {
	otp: "",
	password : "",
	confirmPassword: "" 
}

export const NewPasswordResetForm = () => {
	
	const {password, setNewpassword} = useState(initialState);
	
	

	const handleOnChange = e => {
		const { value } = e.target;

		setNewPassword({
			...newPassword,
			[name] : value,
		});
	};

	const handOnSubmit = e => {
		e.preventDefault();

		console.log(newPassword);
	};

	return (
		<div className="new-pass-form">
			<Card className="p-4">
				<Form onSubmit={handOnSubmit}>
					<Form.Group controlId="formBasicEmail">
						<Form.Label>New Password</Form.Label>
						<Form.Control
							name="email"
							type="email"
							value={email}
							onChange={handleOnChange}
							placeholder="Enter password"
							required
						/>
					</Form.Group>



					<Form.Group controlId="formBasicEmail">
						<Form.Label>New Password Again </Form.Label>
						<Form.Control
							name="email"
							type="email"
							value={email}
							onChange={handleOnChange}
							placeholder="Enter password"
							required
						/>
					</Form.Group>
					

					<Button variant="primary" type="submit">
						Submit
					</Button>
				</Form>

				<a href="/" className="text-right">
					Ready to Login Now
				</a>
			</Card>
		</div>
	);
};
