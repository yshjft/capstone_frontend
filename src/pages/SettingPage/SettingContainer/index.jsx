import React, {useRef, useState} from 'react'
import {useHistory} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {GET_LOGOUT, putUserInfo} from '../../../actions/auth'
import {
  handleValidNickName,
  handleValidEmail,
  handleValidPassword,
  handleValidPasswordCheck
} from '../../../lib/validate'
import SettingPresenter from '../../../presenters/Setting'
import SettingModal from '../../../components/Modal/SettingModal'

const SettingContainer = (props) => {
  const [show, setShow] = useState(false)
  const [settingType, setSettingType] = useState('')
  const history = useHistory()
  const dispatch = useDispatch()
  const userNickName = useSelector((state) => state.auth.nickName)
  const userEmail = useSelector((state) => state.auth.email)
  const [isValidNickName, setIsValidNickName] = useState({isValid: true, inValidType: ''})
  const [isValidEmail, setIsValidEmail] = useState({isValid: true, inValidType: ''})
  const [isValidPassword, setIsValidPassword] = useState({isValid: true, inValidType: ''})
  const [isValidPasswordCheck, setIsValidPasswordCheck] = useState({isValid: true, inValidType: ''})
  const nickNameRef = useRef(null)
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const passwordCheckRef = useRef(null)

  function handleOpen(value) {
    setShow(true)
    setSettingType(value)
    setIsValidNickName({isValid: true, inValidType: ''})
    setIsValidEmail({isValid: true, inValidType: ''})
    setIsValidPassword({isValid: true, inValidType: ''})
    setIsValidPasswordCheck({isValid: true, inValidType: ''})
  }

  function handleClose() {
    setShow(false)
  }

  async function handleEdit() {
    let valid = false
    switch (settingType) {
      case 'nickName':
        valid = handleValidNickName(nickNameRef, setIsValidNickName)
        break
      case 'email':
        valid = handleValidEmail(emailRef, setIsValidEmail)
        break
      case 'password':
        const validPassword = handleValidPassword(passwordRef, setIsValidPassword)
        const validPasswordCheck = handleValidPasswordCheck(passwordRef, passwordCheckRef, setIsValidPasswordCheck)
        valid = validPassword && validPasswordCheck ? true : false
        break
      default:
        break
    }

    if (!valid) return

    try {
      let data = ''
      switch (settingType) {
        case 'nickName':
          data = {nickName: nickNameRef.current.value}
          break
        case 'email':
          data = {email: emailRef.current.value}
          break
        case 'password':
          data = {password: passwordRef.current.value}
          break
        default:
          return
      }
      await dispatch(putUserInfo(data, settingType))
      setShow(false)
    } catch (error) {
      if (error.response.status === 401) {
        dispatch({type: GET_LOGOUT})
        return history.push('/login?returnTo=setting')
      }

      if (error.response.status === 409) {
        if (error.response.data.type === 'SAME_NICKNAME')
          setIsValidNickName({isValid: false, inValidType: error.response.data.type})
        if (error.response.data.type === 'SAME_EMAIL')
          setIsValidEmail({isValid: false, inValidType: error.response.data.type})
      }
    }
  }

  return (
    <>
      <SettingPresenter userNickName={userNickName} userEmail={userEmail} handleOpen={handleOpen} />
      <SettingModal
        ref={{emailRef, nickNameRef, passwordRef, passwordCheckRef}}
        show={show}
        settingType={settingType}
        userNickName={userNickName}
        userEmail={userEmail}
        isValidNickName={isValidNickName}
        isValidEmail={isValidEmail}
        isValidPassword={isValidPassword}
        isValidPasswordCheck={isValidPasswordCheck}
        handleClose={handleClose}
        handleValidNickName={() => handleValidNickName(nickNameRef, setIsValidNickName)}
        handleValidEmail={() => handleValidEmail(emailRef, setIsValidEmail)}
        handleValidPassword={() => handleValidPassword(passwordRef, setIsValidPassword)}
        handleValidPasswordCheck={() =>
          handleValidPasswordCheck(passwordRef, passwordCheckRef, setIsValidPasswordCheck)
        }
        handleEdit={handleEdit}
      />
    </>
  )
}

export default SettingContainer
