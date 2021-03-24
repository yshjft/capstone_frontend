import React, {forwardRef} from 'react'
import {Form, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import styles from './index.module.scss'

const LoginPresenter = forwardRef((props, ref) => {
  const {loginError, isLoading, handleLogin} = props
  const {emailRef, passwordRef} = ref

  return (
    <div className={styles.loginLayout}>
      <Form onSubmit={handleLogin} className={styles.form}>
        <div className={styles.title}>로그인</div>
        <Form.Group controlId="formGroupEmail" className={styles.group}>
          <Form.Control ref={emailRef} type="email" placeholder="이메일" />
        </Form.Group>
        <Form.Group controlId="formGroupPassword" className={styles.group}>
          <Form.Control ref={passwordRef} type="password" placeholder="비밀번호" />
        </Form.Group>
        {loginError && <div className={styles.loginError}>이메일 또는 비밀번호가 잘못 되었습니다.</div>}
        <div className={styles.buttonArea}>
          <Button type="submit" size="lg" className={styles.button}>
            {isLoading ? '로그인 중...' : '로그인'}
          </Button>
        </div>
        <div className={styles.forFirst}>
          <div>계정이 없으신가요?</div>
          <Link to="/join">회원가입</Link>
        </div>
      </Form>
    </div>
  )
})

export default LoginPresenter
