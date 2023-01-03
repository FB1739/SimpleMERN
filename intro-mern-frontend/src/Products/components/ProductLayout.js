import React, {useState} from "react"
import ModalExample from "./Modal";
import 'bulma/css/bulma.min.css';
import Header from './Header'
import AddButton from './AddButton'
import ListProducts from "./ListProducts"



const ProductLayout = () => {
    
    const state = useState(true)
    //const state = { open: false };
    
    const [isModalOpen, setIsModalOpen] = useState(true)
    return ( 
    <>
        <Header title="Products app"/>
        <AddButton/>
        <ListProducts/>
        <ModalExample/>
    </>
    )

}

export default ProductLayout