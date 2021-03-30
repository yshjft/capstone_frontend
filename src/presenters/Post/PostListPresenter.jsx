import React from 'react'
import Preview from '../../components/PostInfo/PostInfo'
import Pagination from '../../components/pagination/PaginationBlock'
import Layout from '../../components/common/Layout/Layout'

const PostListPresenter = (props) => {
  const {postList, total} = props

  return (
    <>
      {postList.map((postInfo, index) => (
        <Preview key={postInfo.id} postInfo={postInfo} />
      ))}
      <Pagination />
    </>
  )
}

export default PostListPresenter
