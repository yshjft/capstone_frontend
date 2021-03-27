import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {getAlgoPosts} from '../../../actions/algoPost'
import Layout from '../../../components/common/Layout/Layout'
import MainSearch from '../../../components/MainSearch'
import Preview from '../../../components/Preview'
import Pagination from '../../../components/PaginationBlock'

const MainContainer = (props) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAlgoPosts())
  }, [dispatch])

  return (
    <Layout>
      {/*  search presenter: 검색창 위치 */}
      {/*  previewList presenter: 작성된 코드들*/}
      {/*  pagination presenter */}
      <MainSearch />
      <Preview />
      <Preview />
      <Preview />
      <Preview />
      <Preview />
      <Preview />
      <Preview />
      <Preview />
      <Preview />
      <Preview />
      <Pagination />
    </Layout>
  )
}

export default MainContainer
