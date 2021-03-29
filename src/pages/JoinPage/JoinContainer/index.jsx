import React, {useState, useRef} from 'react'
import {useDispatch} from 'react-redux'
import {postJoin} from '../../../actions/auth'
import {validateEmail} from '../../../lib/validate'
import Layout from '../../../components/common/Layout/Layout'
import JoinPresenter from '../../../presenters/Auth/JoinPresenter'

const JoinContainer = (props) => {
  const {history} = props
  const [isValidEmail, setIsValidEmail] = useState({isValid: true, inValidType: ''})
  const [isValidNickName, setIsValidNickName] = useState({isValid: true, inValidType: ''})
  const [isValidPassword, setIsValidPassword] = useState({isValid: true, inValidType: ''})
  const [isValidPasswordCheck, setIsValidPasswordCheck] = useState({isValid: true, inValidType: ''})
  const emailRef = useRef(null)
  const nickNameRef = useRef(null)
  const passwordRef = useRef(null)
  const passwordCheckRef = useRef(null)
  const dispatch = useDispatch()

  function handleValidEmail() {
    const email = emailRef.current.value

    if (email === '') {
      setIsValidEmail({isValid: false, inValidType: 'EMPTY'})
      return false
    }

    if (!validateEmail(email)) {
      setIsValidEmail({isValid: false, inValidType: 'INVALID_EMAIL'})
      return false
    }

    setIsValidEmail({isValid: true, inValidType: ''})
  }

  function handleValidNickName() {
    const nickName = nickNameRef.current.value

    if (nickName === '') {
      setIsValidNickName({isValid: false, inValidType: 'EMPTY'})
      return false
    }

    if (nickName.length > 10) {
      setIsValidNickName({isValid: false, inValidType: 'TOO_LONG'})
      return false
    }

    setIsValidNickName({isValid: true, inValidType: ''})
  }

  function handleValidPassword() {
    const password = passwordRef.current.value
    if (password === '') return setIsValidPassword({isValid: false, inValidType: 'EMPTY'})
    if (password.length < 6) return setIsValidPassword({isValid: false, inValidType: 'TOO_SHORT'})

    setIsValidPassword({isValid: true, inValidType: ''})
  }

  function handleValidPasswordCheck() {
    const password = passwordRef.current.value
    const passwordCheck = passwordCheckRef.current.value
    if (passwordCheck === '') return setIsValidPasswordCheck({isValid: false, inValidType: 'EMPTY'})
    if (password !== passwordCheck) return setIsValidPasswordCheck({isValid: false, inValidType: 'NOT_EQUAL'})

    setIsValidPasswordCheck({isValid: true, inValidType: ''})
  }

  async function handleJoin(e) {
    e.preventDefault()

    const validEmail = handleValidEmail()
    const validNickName = handleValidNickName()
    const validPassword = handleValidPassword()
    const validPasswordCheck = handleValidPasswordCheck()

    if (!validEmail || !validNickName || !validPassword || !validPasswordCheck) return

    const email = emailRef.current.value
    const nickName = nickNameRef.current.value
    const password = passwordRef.current.value

    try {
      await dispatch(postJoin({email, nickName, password}))
      history.push('/login')
    } catch (error) {
      switch (error.response.data.type) {
        case 'SAME_EMAIL':
          return setIsValidEmail({isValid: false, inValidType: error.response.data.type})
        case 'SAME_NICK_NAME':
          return setIsValidNickName({isValid: false, inValidType: error.response.data.type})
        default:
          return
      }
    }
  }

  return (
    <Layout>
      <JoinPresenter
        ref={{emailRef, nickNameRef, passwordRef, passwordCheckRef}}
        isValidEmail={isValidEmail}
        isValidNickName={isValidNickName}
        isValidPassword={isValidPassword}
        isValidPasswordCheck={isValidPasswordCheck}
        handleValidEmail={handleValidEmail}
        handleValidNickName={handleValidNickName}
        handleValidPassword={handleValidPassword}
        handleValidPasswordCheck={handleValidPasswordCheck}
        handleJoin={handleJoin}
      />
    </Layout>
  )
}

export default JoinContainer
