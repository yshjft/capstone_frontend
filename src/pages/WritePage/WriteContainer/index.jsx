import React, {useState} from 'react'
import Layout from '../../../components/common/Layout/Layout'
import WritePresenter from '../../../presenters/Post/WritePresenter'
import {useDispatch, useSelector} from 'react-redux'
import {postAlgoPost} from '../../../actions/algoPost'
import ErrorModal from '../../../components/ErrorModal'

const WriteContainer = (props) => {
  const {history} = props
  const [errorModalVisible, setErrorModalVisible] = useState(false)
  const nickName = useSelector((state) => state.auth.nickName)
  const dispatch = useDispatch()

  function handleErrorModalClose() {
    setErrorModalVisible(false)
  }

  async function handleSubmit(title, language, isPublic, code, memo) {
    try {
      await dispatch(postAlgoPost(title, language, isPublic, code, memo))
      history.push(`/@${nickName}`)
    } catch (error) {
      setErrorModalVisible(true)
    }
  }

  return (
    <Layout>
      <WritePresenter handleSubmit={handleSubmit} />
      <ErrorModal
        show={errorModalVisible}
        message={'알고리즘 기록에 실패하였습니다'}
        handleClose={handleErrorModalClose}
      />
    </Layout>
  )
}

export default WriteContainer
