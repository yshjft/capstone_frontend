import React from 'react'
import {useSelector} from 'react-redux'
import SettingPresenter from '../../../presenters/Setting'

const SettingContainer = (props) => {
  const userId = useSelector((state) => state.auth.id)
  const userNickName = useSelector((state) => state.auth.nickName)
  const userEmail = useSelector((state) => state.auth.email)

  return (
    <>
      <SettingPresenter userId={userId} userNickName={userNickName} userEmail={userEmail} />
    </>
  )
}

export default SettingContainer
