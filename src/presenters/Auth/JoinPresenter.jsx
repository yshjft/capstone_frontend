import React from 'react'
import {Form, Button} from 'react-bootstrap'

const JoinPresenter = (props) => {
  return (
    <div>
      <Form>
        <div>회원가입</div>
        <Form.Group controlId="formGroupEmail">
          <Form.Control type="email" placeholder="이메일" />
        </Form.Group>
        <Form.Group controlId="formGroupEmail">
          <Form.Control type="text" placeholder="닉네임" />
        </Form.Group>
        <Form.Group controlId="formGroupPassword" className="group">
          <Form.Control type="password" placeholder="비밀번호" />
        </Form.Group>
        <Button size="lg">회원가입</Button>
      </Form>
    </div>
  )
}

export default JoinPresenter
