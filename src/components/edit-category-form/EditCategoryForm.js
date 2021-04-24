import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalBox from "../modal/ModalBox.js";

import { Form, Col, Button, Spinner, Alert } from "react-bootstrap";
import { toggleCategoryEditModel } from "../../pages/category/categorySlice";

import {
	addNewCategory,
	fetchCategories,
} from "../../pages/category/categoryAction";


const initialState = {
	name: "",

}

export const EditCategoryForm = ({ categoryEdit }) => {
	const dispatch = useDispatch();
	console.log(categoryEdit);
	const { isLoading, status, message, selectedCategory , show} = useSelector(
		state => state.category
	);
	const [category, setCategory] = useState(categoryEdit);

	useEffect(() => {
		setCategory(selectedCategory);
	}, [dispatch, selectedCategory]);

	const handleOnChange = e => {
		const { name, value } = e.target;

		setCategory({
			...category,
			[name]: value,
		});
	};

	const handleOnSubmit = e => {
		e.preventDefault();
		const  updateCat ={
			_id : category._id,
			parentCat : category.parentCat
		}
		dispatch(categoryUpdate(category));
		///we going to find the way to call our server

		console.log(category);
	};

	const toggleModal = e => {

		dispatch(toggleCategoryEditModel())
	}

	
	return (
		<ModalBox 
		show={show} 
		toggleModal={toggleModal}>
		<div className="add-category-form">
			<ModalBox/>
			{isLoading && <Spinner variant="primary" animation="border" />}

			{message && (
				<Alert variant={status === "success" ? "success" : "danger"}>
					{message}
				</Alert>
			)}
			<Form onSubmit={handleOnSubmit}>
				<Form.Row>
					<Form.Group as={Col} controlId="">
						<Form.Control
							name="name"
							type="text"
							value={category.name}
							onChange={handleOnChange}
							placeholder="Enter New Category"
							required
						/>
					</Form.Group>

					

					<Button variant="primary" type="submit">
						Submit
					</Button>
				</Form.Row>
			</Form>
		</div></ModalBox>
	);
};
