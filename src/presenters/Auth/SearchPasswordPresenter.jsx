import React, {forwardRef} from 'react'
import styles from './index.module.scss'
import {Spinner} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const SearchPasswordPresenter = forwardRef((props, ref) => {
  const {isLoading, isValidEmail, passwordChanged, handleEmailChange, handlePasswordSearch} = props

  return (
    <div className={styles.searchPasswordLayout}>
      {!isLoading && passwordChanged && (
        <div className={styles.result}>
          <div className={styles.title}>비밀 번호 찾기 완료</div>
          <div className={styles.instruction}>이메일에 전송된 비밀번호를 확인해 보세요!</div>
          <Link to="/login">로그인</Link>
        </div>
      )}
      {!isLoading && !passwordChanged && (
        <div className={styles.searchPasswordArea}>
          <div className={styles.title}>비밀번호 찾기</div>
          <div className={styles.inputArea}>
            <input ref={ref} placeholder={'이메일'} onChange={handleEmailChange} />
            <button onClick={handlePasswordSearch}>찾기</button>
          </div>
          <div className={styles.warning}>
            {isValidEmail.inValidType === 'NOT_REGISTERED' && '가입되지 않은 이메일 입니다'}
            {isValidEmail.inValidType === 'EMPTY' && '이메일을 입력해주세요'}
            {isValidEmail.inValidType === 'INVALID_EMAIL' && '올바른 이메일 주소를 입력해주세요'}
          </div>
        </div>
      )}
      {isLoading && (
        <div className={styles.loadingArea}>
          <div className={styles.title}>비밀번호 찾는 중</div>
          <Spinner animation={'border'} />
        </div>
      )}
    </div>
  )
})

export default SearchPasswordPresenter
