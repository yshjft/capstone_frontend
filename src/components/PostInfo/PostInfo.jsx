import React from 'react'
import {useHistory} from 'react-router-dom'
import {Badge, Card} from 'react-bootstrap'
import {faThumbsUp} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import language from '../../lib/language'
import formatDate from '../../lib/formatDate'
import style from './index.module.scss'

const PostInfo = (props) => {
  const {postInfo} = props
  const history = useHistory()

  function handleClick() {
    history.push(`/@${postInfo.writer}/${postInfo.id}`)
  }

  return (
    <div className={style.postInfo} onClick={handleClick}>
      <Card>
        <Card.Header className={style.header}>{postInfo.title}</Card.Header>
        <Card.Body>
          <div className={style.dateLike}>
            <span className={style.date}>{formatDate(postInfo.createdAt)}</span>
            <span className={style.like}>
              <FontAwesomeIcon icon={faThumbsUp} className={style.icon} />
              <span>{postInfo.likeNum}</span>
            </span>
          </div>
          <Badge variant="primary" className={style.badge}>
            {language(postInfo.language)}
          </Badge>
          <div className={style.byWriter}>
            <span>by </span>
            <span className={style.writer}>{`${postInfo.writer}`}</span>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default PostInfo
