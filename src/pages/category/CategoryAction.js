import {
	requestPending,
	addCategorySuccess,
	fetchAllCategorySuccess,
	requestFail,
	deleteCatsSuccess,
} from "./categorySlice";

import {
	saveCategory,
	getCategories,
	deleteCategories,
	updateCategories,
} from "../../apis/categoriAPI";
// import { updateCategory } from "../../../../e-commerce_admin-api/models/category/Category.model";

export const addNewCategory = frmDt => async dispatch => {
	try {
		dispatch(requestPending());

		const result = await saveCategory(frmDt); //{status, message}

		dispatch(addCategorySuccess(result));

		result.status === "success" && dispatch(fetchCategories());
	} catch (error) {
		const err = {
			status: "error",
			message: error.message,
		};

		dispatch(requestFail(err));
	}
};

export const fetchCategories = () => async dispatch => {
	try {
		dispatch(requestPending());

		const result = await getCategories(); //{status, message, result:[]}

		dispatch(fetchAllCategorySuccess(result));
	} catch (error) {
		const err = {
			status: "error",
			message: error.message,
		};

		dispatch(requestFail(err));
	}
};

export const removeCategories = idArg => async dispatch => {
	try {
		dispatch(requestPending());

		const result = await deleteCategories(idArg); //{status, message, result:[]}

		dispatch(deleteCatsSuccess(result));

		result.status === "success" && dispatch(fetchCategories());
	} catch (error) {
		const err = {
			status: "error",
			message: error.message,
		};

		dispatch(requestFail(err));
	}
};


export const CategoriesUpdate = frmDt => async dispatch => {
	try {
		dispatch(requestPending());

		const result = await updateCategories(); //{status, message, result:[]}

		dispatch(deleteCatsSuccess(result));

		result.status === "success" && dispatch(fetchCategories());
	} catch (error) {
		const err = {
			status: "error",
			message: error.message,
		};

		dispatch(requestFail(err));
	}
};
