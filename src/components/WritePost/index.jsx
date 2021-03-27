import React from 'react'
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
import {Button} from 'react-bootstrap'
import {faLock} from '@fortawesome/free-solid-svg-icons'
import {faLockOpen} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import styles from './index.module.scss'

const WritePost = (props) => {
  const {
    title,
    language,
    isPublic,
    code,
    memo,
    warningForTitle,
    warningForCode,
    warningForMemo,
    handleTitleChange,
    handleLangChange,
    handleIsPublicChange,
    handleCodeChange,
    handleMemoChange
  } = props

  return (
    <div className={styles.writePostLayout}>
      <div className={styles.titleArea}>
        {warningForTitle && <div className={styles.warning}>* 제목을 입력해 주세요</div>}
        <input placeholder="제목을 입력하세요" value={title} onChange={handleTitleChange} />
      </div>
      <div className={styles.infoArea}>
        <div className={styles.languageArea}>
          <div className={styles.label}>사용 언어</div>
          <select value={language} onChange={handleLangChange}>
            <option value="c">C</option>
            <option value="cpp">C++</option>
            <option value="csharp">C#</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
            <option value="javascript">JavaScript</option>
            <option value="ruby">Ruby</option>
            <option value="kotlin">Kotlin</option>
            <option value="swift">Swift</option>
            <option value="golang">Go</option>
          </select>
        </div>
        <div className={styles.isPublicArea}>
          <div className={styles.label}>공개 여부</div>
          <div>
            <Button
              onClick={() => handleIsPublicChange(true)}
              className={!isPublic ? styles.button : styles.buttonSelected}
            >
              <FontAwesomeIcon icon={faLockOpen} />
              <span>전체 공개</span>
            </Button>
            <Button
              onClick={() => handleIsPublicChange(false)}
              className={isPublic ? styles.button : styles.buttonSelected}
            >
              <FontAwesomeIcon icon={faLock} />
              <span>비공개</span>
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.codeArea}>
        {warningForCode && <div className={styles.warning}>* 코드를 입력해 주세요</div>}
        <AceEditor
          placeholder="코드를 입력하세요...."
          value={code}
          onChange={handleCodeChange}
          mode={language === 'c' || language === 'cpp' ? 'c_cpp' : language}
          theme="tomorrow"
          fontSize={18}
          highlightActiveLine={true}
          minLines={15}
          maxLines={Infinity}
          width="100%"
        />
      </div>
      <div className={styles.memoArea}>
        {warningForMemo && <div className={styles.warning}>* 메모를 입력해주세요</div>}
        <textarea rows={15} placeholder="메모를 입력하세요...." value={memo} onChange={handleMemoChange} />
      </div>
    </div>
  )
}

export default WritePost
