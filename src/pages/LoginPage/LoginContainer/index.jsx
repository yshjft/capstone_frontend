import React, {useState, useRef} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Layout from '../../../components/common/Layout/Layout'
import LoginPresenter from '../../../presenters/Auth/LoginPresenter'
import {postLogin} from '../../../actions/auth'

const LoginContainer = (props) => {
  const [loginError, setLoginError] = useState(false)
  const dispatch = useDispatch()
  const isLoading = useSelector((state) => state.auth.isLoading)
  const emailRef = useRef()
  const passwordRef = useRef()

  async function handleLogin(event) {
    event.preventDefault()
    const email = emailRef.current.value
    const password = passwordRef.current.value

    try {
      setLoginError(false)
      await dispatch(postLogin({email, password}))
    } catch (error) {
      setLoginError(true)
    }
  }

  return (
    <Layout>
      <LoginPresenter
        ref={{emailRef, passwordRef}}
        loginError={loginError}
        isLoading={isLoading}
        handleLogin={handleLogin}
      />
    </Layout>
  )
}

export default LoginContainer
