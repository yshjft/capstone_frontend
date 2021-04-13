import React from 'react'
import {faUser, faEnvelope, faKey, faDoorOpen} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import styles from './index.module.scss'

const SettingPresenter = (props) => {
  const {userNickName, userEmail, handleOpen} = props

  return (
    <div className={styles.settingLayout}>
      <div className={styles.settingArea}>
        <div className={styles.userInfo}>
          <div>
            <FontAwesomeIcon icon={faUser} className={styles.icon} />
            <span className={styles.tag}>닉네임</span>
            <span>{userNickName}</span>
          </div>
          <button onClick={() => handleOpen('nickName')}>변경</button>
        </div>
        <div className={styles.userInfo}>
          <div>
            <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
            <span className={styles.tag}>이메일</span>
            <span>{userEmail}</span>
          </div>
          <button onClick={() => handleOpen('email')}>변경</button>
        </div>
        <div className={styles.userInfo}>
          <div>
            <FontAwesomeIcon icon={faKey} className={styles.icon} />
            <span className={styles.tag}>비밀번호</span>
          </div>
          <button onClick={() => handleOpen('password')}>변경</button>
        </div>
        <div className={styles.userInfo}>
          <div>
            <FontAwesomeIcon icon={faDoorOpen} className={styles.icon} />
            <span className={styles.tag}>회원 탈퇴</span>
            <button onClick={() => handleOpen('exit')} className={styles.deleteUser}>
              회원 탈퇴
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SettingPresenter
