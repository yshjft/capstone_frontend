import React from 'react'
import NoData from '../../../components/NoData'

const PostTabPresenter = (props) => {
  const {posts} = props
  return <div>{posts.length === 0 && <NoData />}</div>
}

export default PostTabPresenter
