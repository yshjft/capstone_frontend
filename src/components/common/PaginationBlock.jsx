import React, {useState} from 'react'
import {Pagination} from '@material-ui/lab'

const PaginationBlock = (props) => {
  const [page, setPage] = useState(1)

  function handleChange(event, value) {
    setPage(value)
  }

  return (
    <div className="pagination">
      <Pagination count={10} page={page} onChange={handleChange} shape="rounded" size="large" />
    </div>
  )
}

export default PaginationBlock
