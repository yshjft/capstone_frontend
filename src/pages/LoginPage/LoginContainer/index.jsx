import React, {useState, useRef} from 'react'
import Layout from '../../../components/common/Layout'
import LoginPresenter from '../../../presenters/Auth/LoginPresenter'
import {useDispatch} from 'react-redux'
import {getHelloWorld} from '../../../actions/test'
import {validateEmail} from '../../../lib/validate'

const LoginContainer = (props) => {
  const [isEmailValid, setIsEmailValid] = useState(true)
  const [isPasswordValid, setIsPasswordValid] = useState(true)
  const dispatch = useDispatch()
  const emailRef = useRef()
  const passwordRef = useRef()

  async function handleLogin(event) {
    event.preventDefault()

    // console.log(emailRef.current.value)
    // console.log(passwordRef.current.value)
    try {
      dispatch(getHelloWorld())
    } catch (error) {
      console.log(error)
    }
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
