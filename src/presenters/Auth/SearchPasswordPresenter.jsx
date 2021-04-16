import React from 'react'
import styles from './index.module.scss'
import {Spinner} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const SearchPasswordPresenter = (props) => {
  return (
    <div className={styles.searchPasswordLayout}>
      <div className={styles.searchPasswordArea}>
        <div className={styles.title}>비밀번호 찾기</div>
        <div className={styles.inputArea}>
          <input placeholder={'이메일'} />
          <button>찾기</button>
        </div>
        <div className={styles.warning}>가입되지 않은 이메일입니다</div>
      </div>
      {/*<div className={styles.loadingArea}>*/}
      {/*  <div className={styles.title}>비밀번호 찾는 중</div>*/}
      {/*  <Spinner animation={'border'} />*/}
      {/*</div>*/}
      {/*<div className={styles.result}>*/}
      {/*  <div className={styles.title}>비밀 번호 찾기 완료</div>*/}
      {/*  <div className={styles.instruction}>이메일에 전송된 비밀번호를 확인해 보세요!</div>*/}
      {/*  <Link to="/login">로그인</Link>*/}
      {/*</div>*/}
    </div>
  )
}

export default SearchPasswordPresenter
