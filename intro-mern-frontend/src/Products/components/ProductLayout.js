import React, { useState } from "react"
import Header from './Header'
import AddButton from './AddButton'
import Loading from './Loading'


const ProductLayout = () => {
    const  [isLoading, setIsLoading] = useState(true)
    //const state = useState(true)
    return ( 
    <>
        <Header title="Products app"/>
        <AddButton/>
        
        {
            isLoading
            ? <Loading />
            : "huehue"
        }
        
    </>
    )

}

export default ProductLayout