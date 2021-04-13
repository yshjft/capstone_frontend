import React, {useEffect, useState} from 'react'
import {Dialog} from '@material-ui/core'
import styles from './setting.module.scss'

const SettingModal = (props) => {
  const {userNickName, userEmail, show, settingType, handleClose} = props
  const [nickName, setNickName] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    setNickName(userNickName)
  }, [show, userNickName, userEmail])

  function translateSettingType(type) {
    switch (type) {
      case 'nickName':
        return '닉네임'
      case 'email':
        return '이메일'
      case 'password':
        return '비밀번호'
      default:
        return ''
    }
  }

  function handleNickNameChange(e) {
    setNickName(e.target.value)
  }

  return (
    <Dialog open={show}>
      <div className={styles.settingModalArea}>
        <div className={styles.settingModalHeader}>{translateSettingType(settingType)} 변경</div>
        {settingType === 'nickName' && (
          <div className={styles.inputArea}>
            <input type="text" placeholder="닉네임" value={nickName} onChange={handleNickNameChange} />
          </div>
        )}
        {settingType === 'email' && (
          <div className={styles.inputArea}>
            <input type="email" placeholder="이메일" />
          </div>
        )}
        {settingType === 'password' && (
          <>
            <div className={styles.inputArea}>
              <input type="password" placeholder="비밀번호" />
            </div>
            <div className={styles.inputArea}>
              <input type="password" placeholder="비밀번호 확인" />
            </div>
          </>
        )}
        <div className={styles.buttonArea}>
          <button onClick={handleClose} className={styles.cancel}>
            취소
          </button>
          <button className={styles.change}>변경</button>
        </div>
      </div>
    </Dialog>
  )
}

export default SettingModal
