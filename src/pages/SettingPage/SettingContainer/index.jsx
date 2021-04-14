import React, {useRef, useState} from 'react'
import {useSelector} from 'react-redux'
import SettingPresenter from '../../../presenters/Setting'
import SettingModal from '../../../components/Modal/SettingModal'
import {
  handleValidNickName,
  handleValidEmail,
  handleValidPassword,
  handleValidPasswordCheck
} from '../../../lib/validate'

const SettingContainer = (props) => {
  const [show, setShow] = useState(false)
  const [settingType, setSettingType] = useState('')
  const userId = useSelector((state) => state.auth.id)
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
    setIsValidEmail({isValid: true, inValidType: ''})
    setIsValidNickName({isValid: true, inValidType: ''})
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

    switch (settingType) {
      case 'nickName':
        console.log(nickNameRef.current.value)
        break
      case 'email':
        console.log(emailRef.current.value)
        break
      case 'password':
        console.log(passwordRef.current.value)
        break
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
