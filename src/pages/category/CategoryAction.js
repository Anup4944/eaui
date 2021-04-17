import { saveCategories } from "../../apis/categoriAPI.js";
import { requestPending, addCategorySuccess, fetchAllCategorySuccess, requestFail } from "./categorySlice.js";
import { getCategories,deleteCategories } from "../../apis/categoriAPI.js";


export const addNewCategory = frmDt => async dispatch=> {
    //call api or reducer to update the state

    try {

        dispatch(requestPending());
        const result = await saveCategories(frmDt) /// status, message
        dispatch(addCategorySuccess(result));
        result.status === "success" && dispatch(fetchCategory());

    } catch (error) {
        const err = {
            status: 'error',
            message: error.message
        }
        
        dispatch(requestFail(err));
    }



}

export const fetchCategory = () => async dispatch=> {
    //call api or reducer to update the state

    try {

        dispatch(requestPending());
        const result = await getCategories() /// status, message
        dispatch(fetchAllCategorySuccess(result));

    } catch (error) {
        const err = {
            status: 'error',
            message: error.message
        }
        
        dispatch(requestFail(err));
    }
}


export const removeCategory = IdsArg => async dispatch=> {
    //call api or reducer to update the state

    try {

        dispatch(requestPending());
        const result = await deleteCategories() /// status, message
        dispatch(fetchAllCategorySuccess(result));

    } catch (error) {
        const err = {
            status: 'error',
            message: error.message
        }
        
        dispatch(requestFail(err));
    }
}

