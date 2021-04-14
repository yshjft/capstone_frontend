import React, {useState, useRef} from 'react'
import {useDispatch} from 'react-redux'
import {postJoin} from '../../../actions/auth'
import {validateEmailForm} from '../../../lib/validate'
import Layout from '../../../components/common/Layout/Layout'
import JoinPresenter from '../../../presenters/Auth/JoinPresenter'
import {
  handleValidEmail,
  handleValidNickName,
  handleValidPassword,
  handleValidPasswordCheck
} from '../../../lib/validate'

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

  async function handleJoin(e) {
    e.preventDefault()

    const validEmail = handleValidEmail(emailRef, setIsValidEmail)
    const validNickName = handleValidNickName(nickNameRef, setIsValidNickName)
    const validPassword = handleValidPassword(passwordRef, setIsValidPassword)
    const validPasswordCheck = handleValidPasswordCheck(passwordRef, passwordCheckRef, setIsValidPasswordCheck)

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
        handleValidEmail={() => handleValidEmail(emailRef, setIsValidEmail)}
        handleValidNickName={() => handleValidNickName(nickNameRef, setIsValidNickName)}
        handleValidPassword={() => handleValidPassword(passwordRef, setIsValidPassword)}
        handleValidPasswordCheck={() =>
          handleValidPasswordCheck(passwordRef, passwordCheckRef, setIsValidPasswordCheck)
        }
        handleJoin={handleJoin}
      />
    </Layout>
  )
}

export default JoinContainer
