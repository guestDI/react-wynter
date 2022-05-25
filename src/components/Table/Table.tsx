// @ts-nocheck
import React from "react";
import { Column, usePagination, useTable } from 'react-table'
import styled from 'styled-components';
import Pagination from "./components/Pagination";

const StyledTableContainer = styled.div`
  width: 100vw;
  height: calc(100vh - 3.5rem);
  padding: 1.6rem;
`

const Styles = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  box-shadow: 0px 3px 22px -12px rgba(66, 68, 90, 1);

  table {
    border-spacing: 0;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid #9c9c9c;
      border-right: 1px solid #9c9c9c;

      :last-child {
        border-right: 0;
      }
    }
  }
`

interface TableProps {
  columns: Array<Column<object>>;
  data: Array<object>;
}

const Table: React.FC<TableProps> = ({ columns, data=[] }) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        state: { pageIndex },
      } = useTable({
        columns,
        data,
        initialState: { pageIndex: 0 },
      },
      usePagination
      )

    return (
      <StyledTableContainer>
        <Styles>
          <table {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup: any) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column: any) => (
                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                  ))}
                </tr>
              ))}
            </thead>
          <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
          </tbody>
        </table>
        </Styles>

        <Pagination 
          canNextPage={canNextPage} 
          canPreviousPage={canPreviousPage} 
          gotoPage={gotoPage} 
          next={nextPage}
          previous={previousPage}
          pageCount={pageCount}
          pageIndex={pageIndex}
          pageOptions={pageOptions}
        />
      </StyledTableContainer>
    )
}

export default Table