import React from "react";
import styled from "styled-components";
import Input from "../../Input/Input";

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

    .controls {
      display: flex;
      align-items: end;

      .page-selector {
        margin-left: 1rem;

        span {
          margin-right: 0.4rem;
          font-size: 1rem;
        }
      }

      .vl {
        border-left: 1px solid #9c9c9c;
        height: 40px;
      }
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
            <button onClick={previous} disabled={!canPreviousPage}>
              Prev
            </button>
            <button onClick={next} disabled={!canNextPage}>
              Next
            </button>
            <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
              Last
            </button>
            <div className="page-selector">
              <span>Go to page:</span>
              <Input
                type="number"
                value={(pageIndex + 1).toString()}
                onChange={value => {
                  const page = value ? Number(value) - 1 : 0
                  gotoPage(page)
                }}
                style={{ width: '100px' }}
              />
            </div>
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