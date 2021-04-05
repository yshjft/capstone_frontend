import React, {useEffect, useState} from 'react'
import WritePost from '../../components/WritePost'
import {useSelector} from 'react-redux'
import styles from './index.module.scss'

const WriteEditPresenter = (props) => {
  const {type = 'write', postDetail = null, handleSubmit} = props
  const [title, setTitle] = useState('')
  const [language, setLanguage] = useState('c')
  const [isPublic, setIsPublic] = useState(true)
  const [code, setCode] = useState('')
  const [memo, setMemo] = useState('')
  const [warningForTitle, setWarningForTitle] = useState(false)
  const [warningForCode, setWarningForCode] = useState(false)
  const [warningForMemo, setWarningForMemo] = useState(false)
  const isSending = useSelector((state) => state.algoPost.isSending)

  useEffect(() => {
    if (type === 'edit' && postDetail != null) {
      setTitle(postDetail.title)
      setLanguage(postDetail.language)
      setIsPublic(postDetail.public)
      setCode(postDetail.code)
      setMemo(postDetail.memo)
    }
  }, [postDetail])

  function handleTitleChange(e) {
    setTitle(e.target.value)
  }

  function handleLangChange(e) {
    setLanguage(e.target.value)
  }

  function handleIsPublicChange(value) {
    setIsPublic(value)
  }

  function handleCodeChange(value) {
    setCode(value)
  }

  function handleMemoChange(e) {
    setMemo(e.target.value)
  }

  function handleCheckInput() {
    if (title === '' || code === '' || memo === '') {
      if (title === '') setWarningForTitle(true)
      if (code === '') setWarningForCode(true)
      if (memo === '') setWarningForMemo(true)
      return
    }

    setWarningForTitle(false)
    setWarningForCode(false)
    setWarningForMemo(false)
    handleSubmit(title, language, isPublic, code, memo)
  }

  return (
    <>
      <WritePost
        language={language}
        title={title}
        isPublic={isPublic}
        code={code}
        memo={memo}
        warningForTitle={warningForTitle}
        warningForCode={warningForCode}
        warningForMemo={warningForMemo}
        handleTitleChange={handleTitleChange}
        handleLangChange={handleLangChange}
        handleIsPublicChange={handleIsPublicChange}
        handleCodeChange={handleCodeChange}
        handleMemoChange={handleMemoChange}
      />
      <div className={styles.buttonArea}>
        <button onClick={handleCheckInput} className={styles.button}>
          {isSending ? '저장 중...' : '저장하기'}
        </button>
      </div>
    </>
  )
}

export default WriteEditPresenter
