import React from 'react'
import PostPreview from '../../components/PostPreview/PostPreview'

const PostListPresenter = (props) => {
  const {postList} = props

  return (
    <>
      {postList.map((postInfo, index) => (
        <PostPreview key={postInfo.id} postInfo={postInfo} />
      ))}
    </>
  )
}

export default PostListPresenter
