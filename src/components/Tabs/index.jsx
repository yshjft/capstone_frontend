import React from 'react'
import styles from './index.module.scss'

const Tabs = (props) => {
  const {selectedTab, handleTabSelect} = props

  return (
    <div className={styles.tabsArea}>
      <button onClick={() => handleTabSelect('posts')} className={selectedTab === 'posts' ? styles.selected : ''}>
        게시물
      </button>
      <button onClick={() => handleTabSelect('likes')} className={selectedTab === 'likes' ? styles.selected : ''}>
        좋아요 누른 게시물
      </button>
      <button
        onClick={() => handleTabSelect('followings')}
        className={selectedTab === 'followings' ? styles.selected : ''}
      >
        팔로잉
      </button>
    </div>
  )
}

export default Tabs
