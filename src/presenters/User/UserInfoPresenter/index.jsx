import React from 'react'
import {faEnvelope, faUsers, faThumbsUp, faUserPlus} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import styles from './index.module.scss'

/*
    닉네임, 이메일
    총 좋아요 수 표시
    follower 수 표시 (follower: 나를 따르는 다른 사람, following: 내가 다른 사람을 따르는 것)
    구독 버튼(팔로잉 버튼, 로그인시 사용 가능)
*/

const UserInfoPresenter = (props) => {
  return (
    <div className={styles.userInfoLayout}>
      <div className={styles.userNickName}>jerry</div>
      <div className={styles.userEmail}>
        <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
        <div>jerry@test.com</div>
      </div>
      <div className={styles.userFollowerLike}>
        <span className={styles.follower}>
          <FontAwesomeIcon icon={faUsers} />
          <span> 0 팔로워</span>
        </span>
        <span className={styles.like}>
          <FontAwesomeIcon icon={faThumbsUp} />
          <span> 0 좋아요</span>
        </span>
      </div>
      <div className={styles.userFollow}>
        <button>
          <FontAwesomeIcon icon={faUserPlus} className={styles.icon} />
          <span>팔로우</span>
        </button>
      </div>
    </div>
  )
}

export default UserInfoPresenter
