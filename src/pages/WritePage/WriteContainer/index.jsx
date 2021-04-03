import React, {useState} from 'react'
import {useLocation, useHistory} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {postAlgoPost} from '../../../actions/algoPost'
import Layout from '../../../components/common/Layout/Layout'
import ErrorModal from '../../../components/ErrorModal'
import WritePresenter from '../../../presenters/Post/WritePresenter'
import {handleUnauthorized} from '../../../lib/handleResError'

const WriteContainer = (props) => {
  const [errorModalVisible, setErrorModalVisible] = useState(false)
  const location = useLocation()
  const history = useHistory()
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
      if (error.response.status === 401) {
        handleUnauthorized(location.pathname, dispatch, history)
      } else {
        setErrorModalVisible(true)
      }
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
