import React, {useState, useRef} from 'react'
import Layout from '../../../components/common/Layout'
import LoginPresenter from '../../../presenters/Auth/LoginPresenter'
import {validateEmail} from '../../../lib/validate'

const LoginContainer = (props) => {
  const [isEmailValid, setIsEmailValid] = useState(true)
  const [isPasswordValid, setIsPasswordValid] = useState(true)
  const emailRef = useRef()
  const passwordRef = useRef()

  // email: required, email form(regex)
  // password: required

  function handleLogin(event) {
    event.preventDefault()
    console.log(emailRef.current.value)
    console.log(passwordRef.current.value)
  }

  return (
    <Layout>
      <LoginPresenter
        ref={{emailRef, passwordRef}}
        isEmailValid={isEmailValid}
        isPasswordVaid={isPasswordValid}
        handleLogin={handleLogin}
      />
    </Layout>
  )
}

export default LoginContainer
