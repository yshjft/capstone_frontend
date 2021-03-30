import React, {useEffect} from 'react'
import {useHistory, useLocation} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import qs from 'query-string'
import {getAlgoPosts} from '../../../actions/algoPost'
import Layout from '../../../components/common/Layout/Layout'
import MainSearch from '../../../components/MainSearch'
import PostListPresenter from '../../../presenters/Post/PostListPresenter'
import Pagination from '../../../components/pagination/PaginationBlock'

const MainContainer = (props) => {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.algoPost.data)
  const total = useSelector((state) => state.algoPost.total)
  const location = useLocation()
  const history = useHistory()
  const query = qs.parse(location.search)

  useEffect(() => {
    dispatch(getAlgoPosts(query.page))
  }, [dispatch])

  async function handlePagination(page) {
    try {
      query.page = page
      history.push({
        pathname: location.pathname,
        search: qs.stringify(query)
      })
      await dispatch(getAlgoPosts(page))
    } catch (error) {}
  }

  return (
    <Layout>
      <MainSearch />
      <PostListPresenter postList={data} total={total} page={query.page} handlePagination={handlePagination} />
      <Pagination total={total} handlePagination={handlePagination} />
    </Layout>
  )
}

export default MainContainer
