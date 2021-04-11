import React from 'react'
import NoData from '../../../components/NoData'

const LikeTabPresenter = (props) => {
  const {likePosts} = props

  return <div>{likePosts.length === 0 && <NoData />}</div>
}

export default LikeTabPresenter
