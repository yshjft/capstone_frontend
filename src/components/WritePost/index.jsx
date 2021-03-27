import React from 'react'
import AceEditor from 'react-ace'
import {Button} from 'react-bootstrap'
import {faLock} from '@fortawesome/free-solid-svg-icons'
import {faLockOpen} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import styles from './index.module.scss'

import 'ace-builds/src-noconflict/theme-tomorrow'
import 'ace-builds/src-noconflict/ext-language_tools'

const WritePost = (props) => {
  return (
    <div className={styles.writePostLayout}>
      <div className={styles.titleArea}>
        <input placeholder="제목을 입력하세요" />
      </div>
      <div className={styles.infoArea}>
        <div className={styles.languageArea}>
          <div className={styles.label}>사용 언어</div>
          <select>
            <option>C</option>
            <option>C++</option>
            <option>C#</option>
            <option>Python</option>
            <option>Java</option>
            <option>JavaScript</option>
            <option>Ruby</option>
            <option>Kotlin</option>
            <option>Swift</option>
            <option>Go</option>
          </select>
        </div>
        <div className={styles.isPublicArea}>
          <div className={styles.label}>공개 여부</div>
          <div>
            <Button className={styles.button}>
              <FontAwesomeIcon icon={faLockOpen} />
              <span>전체 공개</span>
            </Button>
            <Button className={styles.button}>
              <FontAwesomeIcon icon={faLock} />
              <span>비공개</span>
            </Button>
          </div>
        </div>
      </div>
      <div>{/*<AceEditor placeholder="코드를 입력하세요..." theme="tomorrow" fontSize={20}></AceEditor>*/}</div>
      <div>
        <textarea />
      </div>
    </div>
  )
}

export default WritePost
