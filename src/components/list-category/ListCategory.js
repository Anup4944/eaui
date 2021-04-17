import React from 'react'
import {  useSelector, useDispatch} from "react-redux";
import {ListGroup, ListGroupItem,Button,span} from "react-bootstrap";
import { removeCategories} from "../../pages/category/CategoryAction";




const ListCategory = () => {
    const {categoryList} = useSelector(state => state.category);
   
    const topLevelCat = categoryList.filter(row=> !row.parentCat);
    const childCat = categoryList.filter(row=> row.parentCat);

    const handleOnDeleteClicked = (_id) => {
        if(window.confirm("Are you going to delete the category?")){

        }

        
    }
    

    return (
        <ListGroup>
       {
           topLevelCat.map((row,i) =>{
               return(
                   <>
                     <ListGroup.Item key={i}>{row.name}
                     <span ClassName="item-Buttons" style={{ marginLeft: "Scrum "}}>
                     <Button varient="danger" >DELETE</Button></span>
                     
                     </ListGroup.Item>
        {childCat.map(item=> item.parentCat === row._id && (
                <ListGroup.Item key={i}> { `--> ${item.name}`}
                <span ClassName="item-Buttons" style={{ marginLeft: "Scrum "}}>
                 <Button varient="danger">EDIT</Button></span>
                
                </ListGroup.Item>
            )
        )}

                   
                   
                   </>
               )
           })
       }
       

        </ListGroup>
       
      
    
    )}

export default ListCategory

