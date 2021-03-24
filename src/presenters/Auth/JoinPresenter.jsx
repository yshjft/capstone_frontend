import React, {forwardRef} from 'react'
import {Form, Button} from 'react-bootstrap'
import styles from './index.module.scss'

const JoinPresenter = forwardRef((props, ref) => {
  const {
    isValidEmail,
    isValidNickName,
    isValidPassword,
    isValidPasswordCheck,
    handleValidEmail,
    handleValidNickName,
    handleValidPassword,
    handleValidPasswordCheck,
    handleJoin
  } = props
  const {emailRef, nickNameRef, passwordRef, passwordCheckRef} = ref

  return (
    <div className={styles.joinLayout}>
      <Form className={styles.form} onSubmit={handleJoin}>
        <div className={styles.title}>회원가입</div>
        <Form.Group controlId="formGroupEmail" className={styles.group}>
          <Form.Control
            ref={emailRef}
            placeholder="이메일"
            onChange={handleValidEmail}
            isInvalid={!isValidEmail.isValid}
          ></Form.Control>
          {!isValidEmail.isValid && (
            <div className={styles.warning}>
              {isValidEmail.inValidType === 'EMPTY' && '이메일을 입력해주세요'}
              {isValidEmail.inValidType === 'INVALID_EMAIL' && '올바른 이메일 주소를 입력해주세요'}
              {isValidEmail.inValidType === 'SAME_EMAIL' && '사용할 수 없는 이메일 입니다.'}
            </div>
          )}
        </Form.Group>
        <Form.Group controlId="formGroupNickName" className={styles.group}>
          <Form.Control
            ref={nickNameRef}
            placeholder="닉네임"
            onChange={handleValidNickName}
            isInvalid={!isValidNickName.isValid}
          />
          {!isValidNickName.isValid && (
            <div className={styles.warning}>
              {isValidNickName.inValidType === 'EMPTY' && '닉네임을 입력해주세요'}
              {isValidNickName.inValidType === 'TOO_LONG' && '10자 이내 닉네임을 입력해주세요'}
              {isValidNickName.inValidType === 'SAME_NICK_NAME' && '사용할 수 없는 닉네임입니다'}
            </div>
          )}
        </Form.Group>
        <Form.Group controlId="formGroupPassword" className={styles.group}>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="비밀번호"
            onChange={handleValidPassword}
            isInvalid={!isValidPassword.isValid}
          />
          {!isValidPassword.isValid && (
            <div className={styles.warning}>
              {isValidPassword.inValidType === 'EMPTY' ? '비민번호를 입력해주세요' : '비밀번호는 6자 이상입니다'}
            </div>
          )}
        </Form.Group>
        <Form.Group controlId="formGroupPasswordCheck" className={styles.group}>
          <Form.Control
            ref={passwordCheckRef}
            type="password"
            placeholder="비밀번호 확인"
            onChange={handleValidPasswordCheck}
            isInvalid={!isValidPasswordCheck.isValid}
          />
          {!isValidPasswordCheck.isValid && (
            <div className={styles.warning}>
              {isValidPasswordCheck.inValidType === 'EMPTY' && '비밀번호를 입력해주세요'}
              {isValidPasswordCheck.inValidType === 'NOT_EQUAL' && '비밀번호가 일치하지 않습니다'}
            </div>
          )}
        </Form.Group>
        <div className={styles.buttonArea}>
          <Button type="submit" size="lg" className={styles.button}>
            회원가입
          </Button>
        </div>
      </Form>
    </div>
  )
})

export default JoinPresenter
