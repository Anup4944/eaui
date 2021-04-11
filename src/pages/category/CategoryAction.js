import { saveCategories } from "../../apis/categoriAPI.js";
import { requestPending, addCategorySuccess, fetchAllCategorySuccess, requestFail } from "./categorySlice.js";






export const addNewCategory = frmDt => async dispatch=> {
    //call api or reducer to update the state

    try {

        dispatch(requestPending());
        const result = await saveCategories(frmDt) /// status, message
        dispatch(addCategorySuccess(result));

    } catch (error) {
        const err = {
            status: 'error',
            message: error.message
        }
        
        dispatch(requestFail(err));
    }



}