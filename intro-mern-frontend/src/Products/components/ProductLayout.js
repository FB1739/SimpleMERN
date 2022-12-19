import React, { useState } from "react"
import Header from './Header'
import AddButton from './AddButton'
import Loading from './Loading'
import { Button } from 'react-bulma-components'

const ProductLayout = () => {
    const  {isLoading, setIsLoading} = useState(true)
    return ( 
    <>
        <Header title="Products app"/>
        <AddButton/>
        <Button onClick={ () => setIsLoading(false) }>update</Button>
        <Loading />
    </>
    
    )

}

export default ProductLayout