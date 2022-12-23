import React from "react"
import Header from './Header'
import AddButton from './AddButton'
import ListProducts from "./ListProducts"


const ProductLayout = () => {
    
    //const state = useState(true)
    return ( 
    <>
        <Header title="Products app"/>
        <AddButton/>
        <ListProducts/>        
    </>
    )

}

export default ProductLayout