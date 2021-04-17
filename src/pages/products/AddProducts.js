import React from 'react'
import DefaultLayout from '../../components/layout/DefaultLayout'
import AddProductsForm from "../../components/add-products-form/AddProductsForm.js";

const AddProducts = () => {
    return (
    <DefaultLayout>
       <h1> Add products from here</h1><hr/>
       

    <AddProductsForm/>
    </DefaultLayout>
       
    )
}

export default AddProducts;
