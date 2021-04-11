import React from 'react'
import NoData from '../../../components/NoData'
import PostListPresenter from '../../Post/PostListPresenter'

const LikeTabPresenter = (props) => {
  const {likePosts} = props

  return <div>{likePosts.length === 0 ? <NoData /> : <PostListPresenter postList={likePosts} />}</div>
}

export default LikeTabPresenter
