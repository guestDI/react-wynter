import React, { useCallback, useMemo, useState } from "react";
import { FormItem, Input, Toggle } from "../../components";
import { generateColumns } from "../../components/Table/helpers";
import Table from "../../components/Table/Table";
import { useFetch } from "../../hooks/useFetch";
import { StyledHeaderContainer, StyledBasicBlock } from "./styled";

const usersUrl = 'https://react-wynter-d6cb5-default-rtdb.europe-west1.firebasedatabase.app/users.json'

const ProductsDashboard: React.FC = () => {
    const [searchKeyword, setSearchKeyword] = useState('')
    const { status, httpError, data: products } = useFetch(`${process.env.REACT_APP_DB}/products.json` || "");

    const columns = useMemo(() => {
        return generateColumns(products)
    }, [products])

    const onSearchKeywordChanged = useCallback((value: string) => {
        setSearchKeyword(value)
    }, [])

    const filteredProducts = useMemo(() => {
        return products.filter((item: Record<string, string>) => {
            return item["Name"].includes(searchKeyword)
        })
    }, [products, searchKeyword])

    if(status === "fetching"){
        return <StyledBasicBlock>
            <h2 style={{padding: '2rem'}}>Fetching...</h2>
        </StyledBasicBlock>
    }

    if(httpError){
        return <StyledBasicBlock>
            <h3 style={{padding: '2rem'}}>{httpError}</h3>
        </StyledBasicBlock>
    }

    return (
        <>
            <StyledHeaderContainer>
                <div className="search">
                    <FormItem label="Find by name">
                        <Input onChange={onSearchKeywordChanged} value={searchKeyword}/>
                    </FormItem>
                </div>
                <div className="filter">
                    <Toggle>
                        Show only featured products
                    </Toggle>
                </div>
            </StyledHeaderContainer>
            <Table columns={columns} data={filteredProducts}/>
        </>
    )
}

export default ProductsDashboard