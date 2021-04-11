import React from 'react'
import {faEnvelope, faUsers, faThumbsUp, faUserPlus, faUserCheck} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import styles from './index.module.scss'

/*
    닉네임, 이메일
    총 좋아요 수 표시
    follower 수 표시 (follower: 나를 따르는 다른 사람, following: 내가 다른 사람을 따르는 것)
    구독 버튼(팔로잉 버튼, 로그인시 사용 가능)
*/

const UserInfoPresenter = (props) => {
  const {loginUserId, userInfo, handleFollowUser} = props

  return (
    <div className={styles.userInfoLayout}>
      <div className={styles.userNickName}>{userInfo.nickName}</div>
      <div className={styles.userEmail}>
        <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
        <div>{userInfo.email}</div>
      </div>
      <div className={styles.userFollowerLike}>
        <span className={styles.follower}>
          <FontAwesomeIcon icon={faUsers} />
          <span> {userInfo.followerNum} 팔로워</span>
        </span>
        <span className={styles.like}>
          <FontAwesomeIcon icon={faThumbsUp} />
          <span> {userInfo.totalLike} 좋아요</span>
        </span>
      </div>
      {loginUserId !== userInfo.id && (
        <div className={styles.userFollow}>
          {!userInfo.follow && (
            <button onClick={handleFollowUser}>
              <FontAwesomeIcon icon={faUserPlus} className={styles.icon} />
              <span>팔로우</span>
            </button>
          )}
          {userInfo.follow && (
            <button onClick={handleFollowUser}>
              <FontAwesomeIcon icon={faUserCheck} className={styles.icon} />
              <span>언팔로우</span>
            </button>
          )}
        </div>
      )}
    </div>
  )
}

export default UserInfoPresenter
