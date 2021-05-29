import React, {useState, useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import qs from 'query-string'
import {Pagination} from '@material-ui/lab'
import style from './index.module.scss'

const PaginationBlock = (props) => {
  const {total, handlePagination} = props
  const [page, setPage] = useState(1)
  const location = useLocation()
  const query = qs.parse(location.search)

  useEffect(() => {
    if (query.page) {
      setPage(Number(query.page))
    } else{
      setPage(Number(query.tabPage))
    }

  }, [query.page, query.tabPage])


  function handleChange(event, value) {
    setPage(value)
    handlePagination(value)
  }

  return (
    <div className={style.pagination}>
      {total !== 0 && (
        <Pagination count={Math.ceil(total / 10)} page={page} onChange={handleChange} shape="rounded" size="large" />
      )}
    </div>
  )
}

export default PaginationBlock
