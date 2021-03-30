import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getAlgoPosts} from '../../../actions/algoPost'
import Layout from '../../../components/common/Layout/Layout'
import MainSearch from '../../../components/MainSearch'
import PostListPresenter from '../../../presenters/Post/PostListPresenter'

const MainContainer = (props) => {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.algoPost.data)
  const total = useSelector((state) => state.algoPost.total)

  useEffect(() => {
    dispatch(getAlgoPosts())
  }, [dispatch])

  async function handlePagination() {}

  return (
    <Layout>
      {/*  search presenter: 검색창 위치 */}
      {/*  previewList presenter: 작성된 코드들*/}
      {/*  pagination presenter */}
      <MainSearch />
      <PostListPresenter postList={data} total={total} />
    </Layout>
  )
}

export default MainContainer
