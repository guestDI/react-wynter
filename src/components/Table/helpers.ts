import { Column } from "react-table"

type Product = Record<string, string>

export const generateColumns = (items: Product[]) => {
    const item = items[0]

    return item ? Object.keys(item).reduce<Column[]>((accumulator, item) => {
        const column = {
            'Header': item,
            accessor: item,
        }

        return [...accumulator, column]
    }, []) : []
}