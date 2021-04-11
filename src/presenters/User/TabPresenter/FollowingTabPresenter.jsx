import React from 'react'
import NoData from '../../../components/NoData'
import UserPreview from '../../../components/UserPreview'

const FollowingTabPresenter = (props) => {
  const {followingUsers} = props

  return (
    <div>
      {followingUsers.length === 0 ? (
        <NoData />
      ) : (
        followingUsers.map((followingUser, index) => <UserPreview key={index} followingUser={followingUser} />)
      )}
    </div>
  )
}

export default FollowingTabPresenter
