import React, {useEffect, useState} from 'react'
import {useParams, useLocation, useHistory} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {getEditAlgoPost, putAlgoPost} from '../../../actions/algoPost'
import {handleUnauthorized} from '../../../lib/handleResError'
import Layout from '../../../components/common/Layout/Layout'
import ServerError from '../../../components/Error/ServerError'
import NotFoundError from '../../../components/Error/NotFoundError'
import WriteEditPresenter from '../../../presenters/Post/WriteEditPresenter'
import ErrorModal from '../../../components/ErrorModal'

const EditContainer = (props) => {
  const [isError, setIsError] = useState(false)
  const [errorStatus, setErrorStatus] = useState()
  const [errorModalVisible, setErrorModalVisible] = useState(false)
  const dispatch = useDispatch()
  const isLoading = useSelector((state) => state.algoPost.isLoading)
  const postDetail = useSelector((state) => state.algoPost.dataDetail)
  const params = useParams()
  const location = useLocation()
  const history = useHistory()

  useEffect(() => {
    handleGetEditPost()
  }, [params])

  function handleErrorModalClose() {
    setErrorModalVisible(false)
  }

  function handleGetEditPost() {
    const {id} = params
    dispatch(getEditAlgoPost(id))
      .then((result) => setIsError(false))
      .catch((error) => {
        if (error.response.status === 401) {
          return handleUnauthorized(`/write/${id}`, dispatch, history)
        }
        setIsError(true)
        setErrorStatus(error.response.status)
      })
  }

  async function handlePutPost(title, language, isPublic, code, memo) {
    try {
      const postWriter = postDetail.writer
      const postId = postDetail.id
      await dispatch(putAlgoPost(postId, title, language, isPublic, code, memo))
      history.push(`/@${postWriter}/${postId}`)
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
      {!isLoading && isError && errorStatus !== 404 && <ServerError errStatus={errorStatus} redo={handleGetEditPost} />}
      {!isLoading && isError && errorStatus === 404 && <NotFoundError />}
      {!isLoading && !isError && (
        <WriteEditPresenter type={'edit'} postDetail={postDetail} handleSubmit={handlePutPost} />
      )}
      <ErrorModal show={errorModalVisible} message={'수정에 실패하였습니다'} handleClose={handleErrorModalClose} />
    </Layout>
  )
}

export default EditContainer
