import React, {useState} from 'react'
import WritePost from '../../components/WritePost'

const WritePresenter = (props) => {
  // 입력값을 관리
  const [title, setTitle] = useState('')
  const [language, setLanguage] = useState('')
  const [isPublic, setIsPublic] = useState(true)
  const [code, setCode] = useState('')
  const [memo, setMemo] = useState('')

  return <WritePost />
}

export default WritePresenter
