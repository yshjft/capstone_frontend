import React from 'react'
import {useHistory} from 'react-router-dom'
import {Badge, Card} from 'react-bootstrap'
import {faLock, faThumbsUp} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import language from '../../lib/language'
import {formatDate} from '../../lib/formatDate'
import styles from './index.module.scss'

const PostPreview = (props) => {
  const {postInfo} = props
  const history = useHistory()

  function handleClick() {
    history.push(`/@${postInfo.writer}/${postInfo.id}`)
  }

  return (
    <div className={styles.postInfo} onClick={handleClick}>
      <Card>
        <Card.Header className={styles.header}>{postInfo.title}</Card.Header>
        <Card.Body>
          <div className={styles.dateLike}>
            <span className={styles.date}>{formatDate(postInfo.createdAt)}</span>
            <span className={styles.like}>
              <FontAwesomeIcon icon={faThumbsUp} className={styles.icon} />
              <span>{postInfo.likeNum}</span>
            </span>
          </div>
          <Badge variant="primary" className={styles.badge}>
            {language(postInfo.language)}
          </Badge>
          <div className={styles.byWriter}>
            <span>by </span>
            <span className={styles.writer}>{`${postInfo.writer}`}</span>
            {postInfo.public === 0 && (
              <span className={styles.private}>
                <FontAwesomeIcon icon={faLock} className={styles.icon} />
                <span>비공개</span>
              </span>
            )}
          </div>
          <div className={styles.memo}>
            {postInfo.memoLength === postInfo.memo.length ? postInfo.memo : postInfo.memo + '...'}
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default PostPreview
