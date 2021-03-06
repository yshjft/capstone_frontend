import React, {useEffect, useState, useCallback} from 'react'
import {useParams, useLocation, useHistory} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {getEditAlgoPost, putAlgoPost} from '../../../actions/algoPost'
import {handleUnauthorized} from '../../../lib/handleResError'
import Layout from '../../../components/common/Layout/Layout'
import ServerError from '../../../components/Error/ServerError'
import NotFoundError from '../../../components/Error/NotFoundError'
import WriteEditPresenter from '../../../presenters/Post/WriteEditPresenter'
import ErrorModal from '../../../components/Modal/ErrorModal'

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

  const handleGetEditPost = useCallback(() => {
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
  }, [params, history, dispatch])

  useEffect(() => {
    handleGetEditPost()
  }, [handleGetEditPost])

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

  function handleErrorModalClose() {
    setErrorModalVisible(false)
  }

  return (
    <Layout>
      {!isLoading && isError && errorStatus !== 404 && <ServerError errStatus={errorStatus} redo={handleGetEditPost} />}
      {!isLoading && isError && errorStatus === 404 && <NotFoundError />}
      {!isLoading && !isError && (
        <WriteEditPresenter type={'edit'} postDetail={postDetail} handleSubmit={handlePutPost} />
      )}
      <ErrorModal show={errorModalVisible} message={'????????? ?????????????????????'} handleClose={handleErrorModalClose} />
    </Layout>
  )
}

export default EditContainer
