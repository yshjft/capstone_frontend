import React, {useState} from 'react'
import {useSelector} from 'react-redux'
import SettingPresenter from '../../../presenters/Setting'
import SettingModal from '../../../components/Modal/SettingModal'

const SettingContainer = (props) => {
  const [show, setShow] = useState(false)
  const [settingType, setSettingType] = useState('')
  const userId = useSelector((state) => state.auth.id)
  const userNickName = useSelector((state) => state.auth.nickName)
  const userEmail = useSelector((state) => state.auth.email)

  function handleOpen(value) {
    setShow(true)
    setSettingType(value)
  }

  function handleClose() {
    setShow(false)
  }

  return (
    <>
      <SettingPresenter userNickName={userNickName} userEmail={userEmail} handleOpen={handleOpen} />
      <SettingModal
        userNickName={userNickName}
        userEmail={userEmail}
        show={show}
        settingType={settingType}
        handleClose={handleClose}
      />
    </>
  )
}

export default SettingContainer
