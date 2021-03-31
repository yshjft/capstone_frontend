import React, {useEffect, useState} from 'react'
import {useHistory, useLocation} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import qs from 'query-string'
import {getAlgoPosts} from '../../../actions/algoPost'
import Layout from '../../../components/common/Layout/Layout'
import Error from '../../../components/Error'
import MainSearch from '../../../components/MainSearch'
import PostListPresenter from '../../../presenters/Post/PostListPresenter'
import PaginationBlock from '../../../components/pagination/PaginationBlock'

const MainContainer = (props) => {
  const [isError, setIsError] = useState(false)
  const [errStatus, setErrStatus] = useState(200)
  const dispatch = useDispatch()
  const data = useSelector((state) => state.algoPost.data)
  const total = useSelector((state) => state.algoPost.total)
  const location = useLocation()
  const history = useHistory()
  const query = qs.parse(location.search)

  useEffect(() => {
    dispatch(getAlgoPosts(query.page)).catch((error) => {
      setErrStatus(error.response.status)
      setIsError(true)
    })
  }, [dispatch])

  async function handlePagination(page) {
    try {
      setIsError(false)
      if (page != null) query.page = page
      history.push({
        pathname: location.pathname,
        search: qs.stringify(query)
      })
      await dispatch(getAlgoPosts(query.page))
    } catch (error) {
      setErrStatus(error.response.status)
      setIsError(true)
    }
  }

  return (
    <Layout>
      <MainSearch />
      {isError && <Error errStatus={errStatus} redo={handlePagination} />}
      {!isError && (
        <PostListPresenter postList={data} total={total} page={query.page} handlePagination={handlePagination} />
      )}
      <PaginationBlock total={total} handlePagination={handlePagination} />
    </Layout>
  )
}

export default MainContainer
