import React, {useState, useEffect} from "react"
//import ModalExample from "./Modal";
import { Modal, Container } from 'react-bulma-components';
import 'bulma/css/bulma.min.css';
import Header from './Header'
import AddButton from './AddButton'
import ListProducts from "./ListProducts"
import Form from "./Form";
import { saveProducts } from "../services";
import Loading from "./Loading";
import { getProducts } from '../services'





const ProductLayout = () => {
    
   
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [products, setProducts] = useState([])

    async function loadProduct() {
        const response = await getProducts()
        if (response.status === 200 ) {
            setProducts(response.data.products)
        }
        setIsLoading(false)
    }
    

    useEffect(() => {
        loadProduct()
    }, [])


    const handleSubmit = async (data) => {
        await saveProducts(data)
        loadProduct()
        setIsModalOpen(false)
    }
    
    return ( 
    <Container>
        <Header title="Products app"/>
        <AddButton onClick={() => setIsModalOpen(true)}/>
        {
            isLoading && <Loading/>
        }
        {
            !isLoading && !products.length && (
            <h2 className='title has-text-centered'>You don't have products</h2>
            )
        }

        {
            !isLoading && products.length && <ListProducts products={products}/>
        }

        
        
        <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <Modal.Card>
                <Modal.Card.Header>
                    <Modal.Card.Title>
                        Add Product
                    </Modal.Card.Title>
                </Modal.Card.Header>
                <Modal.Card.Body>
                    <Form handleSubmit={handleSubmit} />
                </Modal.Card.Body>
            </Modal.Card>
        </Modal>
    </Container>
    )

}

export default ProductLayout