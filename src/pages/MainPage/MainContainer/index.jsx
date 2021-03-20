import React from 'react'
import Layout from '../../../components/common/Layout'
import MainSearch from '../../../components/MainSearch'
import Preview from '../../../components/Preview'
import Pagination from '../../../components/PaginationBlock'

const MainContainer = (props) => {
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
