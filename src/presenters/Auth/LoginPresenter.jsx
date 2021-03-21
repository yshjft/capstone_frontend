import React, {forwardRef} from 'react'
import {Form, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const LoginPresenter = forwardRef((props, ref) => {
  const {loginError, isLoading, handleLogin} = props
  const {emailRef, passwordRef} = ref

  return (
    <div className="loginLayout">
      <Form className="form" onSubmit={handleLogin}>
        <div className="title">로그인</div>
        <Form.Group controlId="formGroupEmail" className="group">
          <Form.Control ref={emailRef} type="email" placeholder="이메일" />
        </Form.Group>
        <Form.Group controlId="formGroupPassword" className="group">
          <Form.Control ref={passwordRef} type="password" placeholder="비밀번호" />
        </Form.Group>
        {loginError && <div className="loginError">이메일 또는 비밀번호가 잘못 되었습니다.</div>}
        <div className="buttonArea">
          <Button type="submit" size="lg" className="button">
            {isLoading ? '로그인 중...' : '로그인'}
          </Button>
        </div>
        <div className="forFirst">
          <div>계정이 없으신가요?</div>
          <Link to="/join">회원가입</Link>
        </div>
      </Form>
    </div>
  )
})

export default LoginPresenter
