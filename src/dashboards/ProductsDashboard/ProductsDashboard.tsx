import React, { useEffect, useMemo, useState } from "react";
import { generateColumns } from "../../components/Table/helpers";
import Table from "../../components/Table/Table";

const ProductsDashboard: React.FC = () => {
    const [products, setProducts] = useState([])
    const [httpError, setHttpError] = useState() 
    // const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('https://react-wynter-default-rtdb.europe-west1.firebasedatabase.app/products.json')

            if(!response.ok){
                throw new Error("Products can't be loaded. Please try later")
            }

            const data = await response.json()

            setProducts(data)
        }
        
        fetchProducts().catch(error => {
            setHttpError(error.message)
        })
    }, [])

    const columns = useMemo(() => {
        if(products){
            return generateColumns(products)
        }
        return []
    }, [products])

    if(httpError){
        return <div>{httpError}</div>
    }

    return (
        <Table columns={columns} data={products}/>
    )
}

export default ProductsDashboard