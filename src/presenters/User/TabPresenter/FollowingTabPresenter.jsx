import React from 'react'
import NoData from '../../../components/NoData'

const FollowingTabPresenter = (props) => {
  const {followingUsers} = props

  return <div>{followingUsers.length === 0 && <NoData />}</div>
}

export default FollowingTabPresenter
