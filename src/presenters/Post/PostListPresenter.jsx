import React from 'react'
import Preview from '../../components/PostInfo/PostInfo'

const PostListPresenter = (props) => {
  const {postList} = props

  return (
    <>
      {postList.map((postInfo, index) => (
        <Preview key={postInfo.id} postInfo={postInfo} />
      ))}
    </>
  )
}

export default PostListPresenter
