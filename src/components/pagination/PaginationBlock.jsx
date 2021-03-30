import React, {useState} from 'react'
import {Pagination} from '@material-ui/lab'
import style from './index.module.scss'

const PaginationBlock = (props) => {
  const [page, setPage] = useState(1)

  function handleChange(event, value) {
    setPage(value)
  }

  return (
    <div className={style.pagination}>
      <Pagination count={10} page={1} onChange={handleChange} shape="rounded" size="large" />
    </div>
  )
}

export default PaginationBlock
