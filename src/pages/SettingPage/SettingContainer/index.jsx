import React, {useRef, useState} from 'react'
import {useHistory} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {putUserInfo, deleteUser} from '../../../actions/auth'
import {
  handleValidNickName,
  handleValidEmail,
  handleValidPassword,
  handleValidPasswordCheck
} from '../../../lib/validate'
import SettingPresenter from '../../../presenters/Setting'
import SettingModal from '../../../components/Modal/SettingModal'
import ErrorModal from '../../../components/Modal/ErrorModal'
import QuitModal from '../../../components/Modal/QuitModal'
import {handleUnauthorized} from '../../../lib/handleResError'

const SettingContainer = (props) => {
  const [show, setShow] = useState(false)
  const [settingType, setSettingType] = useState('')
  const [isValidNickName, setIsValidNickName] = useState({isValid: true, inValidType: ''})
  const [isValidEmail, setIsValidEmail] = useState({isValid: true, inValidType: ''})
  const [isValidPassword, setIsValidPassword] = useState({isValid: true, inValidType: ''})
  const [isValidPasswordCheck, setIsValidPasswordCheck] = useState({isValid: true, inValidType: ''})
  const [showError, setShowError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [showQuit, setShowQuit] = useState(false)

  const dispatch = useDispatch()
  const isLoading = useSelector((state) => state.auth.isLoading)
  const userNickName = useSelector((state) => state.auth.nickName)
  const userEmail = useSelector((state) => state.auth.email)

  const nickNameRef = useRef(null)
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const passwordCheckRef = useRef(null)
  const history = useHistory()

  function handleOpen(value) {
    if (value === 'quit') {
      setShowQuit(true)
    } else {
      setShow(true)
      setSettingType(value)
      setIsValidNickName({isValid: true, inValidType: ''})
      setIsValidEmail({isValid: true, inValidType: ''})
      setIsValidPassword({isValid: true, inValidType: ''})
      setIsValidPasswordCheck({isValid: true, inValidType: ''})
    }
  }

  function handleSettingModalClose() {
    setShow(false)
  }

  function handleErrorModalClose() {
    setShowError(false)
  }

  function handleQuitModalClose() {
    setShowQuit(false)
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
        handleUnauthorized('setting', dispatch, history)
      } else if (error.response.status === 409) {
        if (error.response.data.type === 'SAME_NICKNAME')
          setIsValidNickName({isValid: false, inValidType: error.response.data.type})
        if (error.response.data.type === 'SAME_EMAIL')
          setIsValidEmail({isValid: false, inValidType: error.response.data.type})
      } else if (error.response.status === 400) {
        setShowError(true)
        setErrorMessage('BAD REQUEST')
      } else {
        setShowError(true)
        setErrorMessage(`${error.response.status} ERROR`)
      }
    }
  }

  async function handleQuit() {
    try {
      await dispatch(deleteUser())
    } catch (error) {
      if (error.response.status === 401) {
        handleUnauthorized('setting', dispatch, history)
      } else {
        setShowError(true)
        setErrorMessage(`${error.response.status} ERROR`)
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
        isLoading={isLoading}
        userNickName={userNickName}
        userEmail={userEmail}
        isValidNickName={isValidNickName}
        isValidEmail={isValidEmail}
        isValidPassword={isValidPassword}
        isValidPasswordCheck={isValidPasswordCheck}
        handleClose={handleSettingModalClose}
        handleValidNickName={() => handleValidNickName(nickNameRef, setIsValidNickName)}
        handleValidEmail={() => handleValidEmail(emailRef, setIsValidEmail)}
        handleValidPassword={() => handleValidPassword(passwordRef, setIsValidPassword)}
        handleValidPasswordCheck={() =>
          handleValidPasswordCheck(passwordRef, passwordCheckRef, setIsValidPasswordCheck)
        }
        handleEdit={handleEdit}
      />
      <QuitModal show={showQuit} isLoading={isLoading} handleClose={handleQuitModalClose} handleQuit={handleQuit} />
      <ErrorModal show={showError} message={errorMessage} handleClose={handleErrorModalClose} />
    </>
  )
}

export default SettingContainer
