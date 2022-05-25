import React from "react";
import styled from "styled-components";

interface PaginationProps {
    gotoPage: (page: number) => void
    next: () => void
    previous: () => void
    canPreviousPage: boolean
    canNextPage: boolean
    pageCount: number
    pageIndex: number
    pageOptions: Array<any>
}

const StyledPagination = styled.div`
    padding: 1.2rem;
    padding-left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
        background: #fff;
        border: 1px solid #9c9c9c;
        height: 2.5rem;
        width: 2.5rem;
        border-radius: 4px;

        &:hover {
          cursor: pointer;
          background: #ff725e;
          color: #fff;
          border-color: #ff725e;
          font-weight: 600;
        }

        margin-right: 0.4rem;
    }

    .total {
      margin-left: 1rem;
      font-size: 1rem;
    }
`

const Pagination: React.FC<PaginationProps> = ({gotoPage, next, previous, canPreviousPage, canNextPage, pageCount, pageIndex, pageOptions}) => {
    return (
        <StyledPagination>
          <div className="controls">
            <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
              First
            </button>
            <button onClick={() => previous()} disabled={!canPreviousPage}>
              Prev
            </button>
            <button onClick={() => next()} disabled={!canNextPage}>
              Next
            </button>
            <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
              Last
            </button>
            <span>
            | Go to page:{' '}
            <input
              type="number"
              defaultValue={pageIndex + 1}
              onChange={e => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0
                gotoPage(page)
              }}
              style={{ width: '100px' }}
            />
            </span>
          </div>
          <span className="total">
            Page{' '}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{' '}
          </span>
        </StyledPagination>
    )
}

export default Pagination