import axios from 'axios'; 
const rootUrl = "http://localhost:8000/api/v1/"
const catApi = rootUrl + 'category'
 
export const saveCategories = frmDt => {
    console.log("from api", frmDt)
    return new Promise(async(resolve, reject) =>{
        try {

            const {data} = await axios.post(catApi, frmDt)
        
            resolve(data);
            
        } catch (error) {
            reject(error);
            
        }
    })


}


export const getCategories = () => {
    return new Promise(async(resolve, reject) =>{
        try {

            const {data} = await axios.get(catApi)
        
            resolve(data);
            
        } catch (error) {
            reject(error);
            
        }
    })


}

export const deleteCategories = (IdsArg) => {
    return new Promise(async(resolve, reject) =>{
        try {

            const {data} = await axios.delete(catApi, [data=IdsArg]);
        
            resolve(data);
            
        } catch (error) {
            reject(error);
            
        }
    })


}