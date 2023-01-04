import React, {useState} from "react"
//import ModalExample from "./Modal";
import { Modal } from 'react-bulma-components';
import 'bulma/css/bulma.min.css';
import Header from './Header'
import AddButton from './AddButton'
import ListProducts from "./ListProducts"
import Form from "./Form";



const ProductLayout = () => {
    
    const state = useState(true)
    //const state = { open: false };
    
    const [isModalOpen, setIsModalOpen] = useState(false)
    return ( 
    <>
        <Header title="Products app"/>
        <AddButton onClick={() => setIsModalOpen(true)}/>
        <ListProducts/>
        <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <Modal.Card>
                <Modal.Card.Header>
                    <Modal.Card.Title>
                        Add Product
                    </Modal.Card.Title>
                </Modal.Card.Header>
                <Modal.Card.Body>
                    <Form/>
                </Modal.Card.Body>
            </Modal.Card>
        </Modal>
    </>
    )

}

export default ProductLayout