import React from 'react'
import {Card, Columns, Content, Heading} from 'react-bulma-components'
import Header from './Header'


const ListProducts = ({ products }) => {

    /*if (isLoading) {
        return <Loading />
    }

    if (!products.length) {
        return <h2 className='title has-text-centered'>You don't have products</h2>
    }*/

    console.log(products)

    return ( 
        //"Monstrar Listado."
        <Columns>
            {
                products.map(({description, name, size, _id, unitaryPrice, imgUrl}) => (

                    <Columns.Column size={4} key={_id}>
                        <Card >
                            <Card.Image size="square" src={"//"+imgUrl} alt="Imagen"></Card.Image>
                            <Card.Content>
                                <Content>
                                    <Heading>{name}</Heading>
                                    <Heading subtitle size={6}>{unitaryPrice}</Heading>
                                </Content>
                            </Card.Content>
                        </Card>
                    </Columns.Column>
                ))
            }
        </Columns>
    )
}

export default ListProducts