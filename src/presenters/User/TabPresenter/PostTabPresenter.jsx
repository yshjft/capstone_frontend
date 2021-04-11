import React from 'react'
import NoData from '../../../components/NoData'
import PostListPresenter from '../../Post/PostListPresenter'

const PostTabPresenter = (props) => {
  const {posts} = props

  return <>{posts.length === 0 ? <NoData /> : <PostListPresenter postList={posts} />}</>
}

export default PostTabPresenter
