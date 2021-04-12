import React from 'react'
import Tabs from '../../../components/Tabs'
import PostTabPresenter from './PostTabPresenter'
import LikeTabPresenter from './LikeTabPresenter'
import FollowingTabPresenter from './FollowingTabPresenter'
import PaginationBlock from '../../../components/PaginationBlock/PaginationBlock'

const TabPresenter = (props) => {
  const {selectedTab, total, posts, likePosts, followingUsers, handleTabSelect, handleTabPageChange} = props

  return (
    <>
      <Tabs selectedTab={selectedTab} handleTabSelect={handleTabSelect} />
      <div>
        {selectedTab === 'posts' && <PostTabPresenter posts={posts} />}
        {selectedTab === 'likes' && <LikeTabPresenter likePosts={likePosts} />}
        {selectedTab === 'followings' && <FollowingTabPresenter followingUsers={followingUsers} />}
        {total !== 0 && <PaginationBlock total={total} handlePagination={handleTabPageChange} />}
      </div>
    </>
  )
}

export default TabPresenter
