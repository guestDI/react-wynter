import React, { useEffect, useMemo, useState } from "react";
import { generateColumns } from "../../components/Table/helpers";
import Table from "../../components/Table/Table";

const ProductsDashboard: React.FC = () => {
    const [products, setProducts] = useState([])
    // const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('https://react-wynter-default-rtdb.europe-west1.firebasedatabase.app/products.json')
            const data = await response.json()

            setProducts(data)
        }

        fetchProducts()
    }, [])

    const columns = useMemo(() => {
        if(products){
            return generateColumns(products)
        }
        return []
    }, [products])

    return (
        <Table columns={columns}/>
    )
}

export default ProductsDashboard