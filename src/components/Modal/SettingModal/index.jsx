import React, {forwardRef, useEffect, useState} from 'react'
import {Dialog} from '@material-ui/core'
import styles from './setting.module.scss'

const SettingModal = forwardRef((props, ref) => {
  const {
    show,
    settingType,
    userNickName,
    userEmail,
    isValidNickName,
    isValidEmail,
    isValidPassword,
    isValidPasswordCheck,
    handleClose,
    handleValidNickName,
    handleValidEmail,
    handleValidPassword,
    handleValidPasswordCheck,
    handleEdit
  } = props
  const {nickNameRef, emailRef, passwordRef, passwordCheckRef} = ref
  const [nickName, setNickName] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    if (show) {
      setNickName(userNickName)
      setEmail(userEmail)
    }
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
    handleValidNickName()
  }

  function handleEmailChange(e) {
    setEmail(e.target.value)
    handleValidEmail()
  }

  return (
    <Dialog open={show}>
      <div className={styles.settingModalArea}>
        <div className={styles.settingModalHeader}>{translateSettingType(settingType)} 변경</div>
        {settingType === 'nickName' && (
          <div className={styles.inputArea}>
            <input
              ref={nickNameRef}
              type="text"
              placeholder="닉네임"
              value={nickName}
              onChange={handleNickNameChange}
            />
            {!isValidNickName.isValid && (
              <div className={styles.warning}>
                {isValidNickName.inValidType === 'EMPTY' && '닉네임을 입력해주세요'}
                {isValidNickName.inValidType === 'TOO_LONG' && '10자 이내 닉네임을 입력해주세요'}
                {isValidNickName.inValidType === 'SAME_NICK_NAME' && '사용할 수 없는 닉네임입니다'}
              </div>
            )}
          </div>
        )}
        {settingType === 'email' && (
          <div className={styles.inputArea}>
            <input ref={emailRef} type="email" placeholder="이메일" value={email} onChange={handleEmailChange} />
            {!isValidEmail.isValid && (
              <div className={styles.warning}>
                {isValidEmail.inValidType === 'EMPTY' && '이메일을 입력해주세요'}
                {isValidEmail.inValidType === 'INVALID_EMAIL' && '올바른 이메일 주소를 입력해주세요'}
                {isValidEmail.inValidType === 'SAME_EMAIL' && '사용할 수 없는 이메일 입니다.'}
              </div>
            )}
          </div>
        )}
        {settingType === 'password' && (
          <>
            <div className={styles.inputArea}>
              <input ref={passwordRef} type="password" placeholder="새로운 비밀번호" onChange={handleValidPassword} />
              {!isValidPassword.isValid && (
                <div className={styles.warning}>
                  {isValidPassword.inValidType === 'EMPTY' ? '비민번호를 입력해주세요' : '비밀번호는 6자 이상입니다'}
                </div>
              )}
            </div>
            <div className={styles.inputArea}>
              <input
                ref={passwordCheckRef}
                type="password"
                placeholder="새로운 비밀번호 확인"
                onChange={handleValidPasswordCheck}
              />
              {!isValidPasswordCheck.isValid && (
                <div className={styles.warning}>
                  {isValidPasswordCheck.inValidType === 'EMPTY' && '비밀번호를 입력해주세요'}
                  {isValidPasswordCheck.inValidType === 'NOT_EQUAL' && '비밀번호가 일치하지 않습니다'}
                </div>
              )}
            </div>
          </>
        )}
        <div className={styles.buttonArea}>
          <button onClick={handleClose} className={styles.cancel}>
            취소
          </button>
          <button className={styles.change} onClick={handleEdit}>
            변경
          </button>
        </div>
      </div>
    </Dialog>
  )
})

export default SettingModal
