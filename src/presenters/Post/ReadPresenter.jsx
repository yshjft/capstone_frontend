import React from 'react'
import {Link} from 'react-router-dom'
import AceEditor from 'react-ace'
import 'ace-builds/webpack-resolver'
import 'ace-builds/src-noconflict/mode-c_cpp'
import 'ace-builds/src-noconflict/mode-csharp'
import 'ace-builds/src-noconflict/mode-python'
import 'ace-builds/src-noconflict/mode-java'
import 'ace-builds/src-noconflict/mode-javascript'
import 'ace-builds/src-noconflict/mode-ruby'
import 'ace-builds/src-noconflict/mode-kotlin'
import 'ace-builds/src-noconflict/mode-swift'
import 'ace-builds/src-noconflict/mode-golang'
import 'ace-builds/src-noconflict/theme-tomorrow'
import {
  faChevronLeft,
  faChevronRight,
  faEdit,
  faTrash,
  faThumbsUp as solidThumbsUp
} from '@fortawesome/free-solid-svg-icons'
import {faThumbsUp as regularThumbsUp} from '@fortawesome/free-regular-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Badge} from 'react-bootstrap'
import formatDate from '../../lib/formatDate'
import language from '../../lib/language'
import style from './index.module.scss'

const ReadPresenter = (props) => {
  const {postDetail, isLoggedIn, userNickName, handlePostLike} = props

  return (
    <div className={style.readPostLayout}>
      <div className={style.postTitle}>{postDetail.title}</div>
      <div className={style.postInfo}>
        <div className={style.postDateWriterLikeArea}>
          <div className={style.postDateWriter}>
            <span className={style.date}>{formatDate(postDetail.createdAt)}</span>
            <span className={style.divide}>·</span>
            <span className={style.byWriter}>
              <span className={style.by}>by</span>
              <Link to={`/@${postDetail.writer}`} className={style.writer}>
                {postDetail.writer}
              </Link>
            </span>
          </div>
          {!postDetail.like && (
            <div className={style.postLikeFalse} onClick={handlePostLike}>
              <FontAwesomeIcon icon={regularThumbsUp} className={style.icon} />
              <span>{postDetail.likeNum}</span>
            </div>
          )}
          {postDetail.like && (
            <div className={style.postLikeTrue} onClick={handlePostLike}>
              <FontAwesomeIcon icon={solidThumbsUp} className={style.icon} />
              <span>{postDetail.likeNum}</span>
            </div>
          )}
        </div>
        <div className={style.postLanguageArea}>
          <Badge variant="primary" className={style.postLanguage}>
            {language(postDetail.language)}
          </Badge>
        </div>
      </div>

      {isLoggedIn && userNickName === postDetail.writer && (
        <div className={style.postEditDelete}>
          <button className={style.button}>
            <FontAwesomeIcon icon={faEdit} />
            <span>수정</span>
          </button>
          <button className={style.button} onClick={() => {}}>
            <FontAwesomeIcon icon={faTrash} />
            <span>삭제</span>
          </button>
        </div>
      )}

      <div className={style.postCode}>
        <div className={style.tag}>
          <FontAwesomeIcon icon={faChevronLeft} />
          소스 코드
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
        <div className={style.codeEditor}>
          <AceEditor
            value={postDetail.code}
            mode={postDetail.language === 'c' || postDetail.language === 'cpp' ? 'c_cpp' : postDetail.language}
            theme="tomorrow"
            fontSize={15}
            highlightActiveLine={false}
            minLines={5}
            maxLines={Infinity}
            width="100%"
            readOnly={true}
          />
        </div>
      </div>
      <div className={style.postMemo}>
        <div className={style.tag}>
          <FontAwesomeIcon icon={faChevronLeft} />
          메모
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
        <pre>{postDetail.memo}</pre>
      </div>
    </div>
  )
}

export default ReadPresenter
