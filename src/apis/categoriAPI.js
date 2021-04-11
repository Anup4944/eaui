import axios from 'axios'; 
const rootUrl = "http://localhost:8000/api/v1/"
const catApi = rootUrl + 'category'

export const saveCategories = frmDt => {
    return new Promise(async(resolve, reject) =>{
        try {

            const {data} = await axios.post(catApi, frmDt)
        
            resolve(data);
            
        } catch (error) {
            reject(error);
            
        }
    })


}


const getCategories = frmDt => {
    return new Promise(async(resolve, reject) =>{
        try {

            const {data} = await axios.post(catApi, frmDt)
        
            resolve(data);
            
        } catch (error) {
            reject(error);
            
        }
    })


}