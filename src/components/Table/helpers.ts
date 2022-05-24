type Product = Record<string, string>

type Column = Record<string, string | number>

export const generateColumns = (items: Product[]) => {
    const item = items[0]

    return item ? Object.keys(item).reduce<Column[]>((accumulator, item) => {
        const column = {
            'Header': item,
            accessor: item
        }

        return [...accumulator, column]
    }, []) : []
}