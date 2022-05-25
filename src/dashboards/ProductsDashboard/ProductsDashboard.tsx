import React, { useMemo } from "react";
import { generateColumns } from "../../components/Table/helpers";
import Table from "../../components/Table/Table";
import { useFetch } from "../../hooks/useFetch";

const url = 'https://react-wynter-default-rtdb.europe-west1.firebasedatabase.app/products.json'

const ProductsDashboard: React.FC = () => {
    const { status, httpError, data: products } = useFetch(url);

    const columns = useMemo(() => {
        if(products){
            return generateColumns(products)
        }
        return []
    }, [products])

    if(status === "fetching"){
        return <h4>Fetching...</h4>
    }

    if(httpError){
        return <div>{httpError}</div>
    }

    return (
        <Table columns={columns} data={products}/>
    )
}

export default ProductsDashboard