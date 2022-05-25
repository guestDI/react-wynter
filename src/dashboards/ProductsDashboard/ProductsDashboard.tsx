import React, { useCallback, useMemo, useState } from "react";
import { FormItem, Input } from "../../components";
import { generateColumns } from "../../components/Table/helpers";
import Table from "../../components/Table/Table";
import { useFetch } from "../../hooks/useFetch";
import { StyledSearchContainer } from "./styled";

const url = 'https://react-wynter-default-rtdb.europe-west1.firebasedatabase.app/products.json'

const ProductsDashboard: React.FC = () => {
    const [searchKeyword, setSearchKeyword] = useState('')
    const { status, httpError, data: products } = useFetch(url);

    const columns = useMemo(() => {
        return generateColumns(products)
    }, [products])

    // console.log(products)

    const onSearchKeywordChanged = useCallback((value: string) => {
        setSearchKeyword(value)
    }, [])

    const filteredProducts = useMemo(() => {
        return products.filter((item: Record<string, string>) => {
            return item["Name"].includes(searchKeyword)
        })
    }, [products, searchKeyword])

    if(status === "fetching"){
        return <h4>Fetching...</h4>
    }

    if(httpError){
        return <div>{httpError}</div>
    }

    return (
        <>
            <StyledSearchContainer>
                <FormItem label="Find by name">
                    <Input onChange={onSearchKeywordChanged} value={searchKeyword}/>
                </FormItem>
            </StyledSearchContainer>
            <Table columns={columns} data={filteredProducts}/>
        </>
    )
}

export default ProductsDashboard