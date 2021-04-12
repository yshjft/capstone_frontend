import React from 'react'
import {useHistory} from 'react-router-dom'
import {Card} from 'react-bootstrap'
import {faEnvelope, faUsers, faThumbsUp} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import styles from './index.module.scss'

const UserPreview = (props) => {
  const {followingUser} = props
  const history = useHistory()

  function handleClick() {
    history.push(`/@${followingUser.nickName}`)
  }

  return (
    <div className={styles.userPreviewLayout}>
      <Card onClick={handleClick}>
        <Card.Body className={styles.cardBody}>
          <div className={styles.nickName}>{followingUser.nickName}</div>
          <div>
            <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
            <span>{followingUser.email}</span>
          </div>
          <div className={styles.info}>
            <span>
              <FontAwesomeIcon icon={faUsers} className={styles.icon} />
              <span>{followingUser.followerNum} 팔로워</span>
            </span>
            <span>
              <FontAwesomeIcon icon={faThumbsUp} className={styles.icon} />
              <span>{followingUser.totalLike} 좋아요</span>
            </span>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default UserPreview
