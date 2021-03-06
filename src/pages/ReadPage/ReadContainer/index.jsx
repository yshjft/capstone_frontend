import React, {useEffect, useState, useCallback} from 'react'
import {useParams, useLocation, useHistory} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {getAlgoPost, deleteAlgoPost, postAlgoPostLike, deleteAlgoPostLike} from '../../../actions/algoPost'
import {handleUnauthorized} from '../../../lib/handleResError'
import Loading from '../../../components/Loading'
import Layout from '../../../components/common/Layout/Layout'
import ServerError from '../../../components/Error/ServerError'
import NotFoundError from '../../../components/Error/NotFoundError'
import ReadPresenter from '../../../presenters/Post/ReadPresenter'
import DeleteModal from '../../../components/Modal/DeleteModal'
import ErrorModal from '../../../components/Modal/ErrorModal'

const ReadContainer = (props) => {
  const [isError, setIsError] = useState(false)
  const [errorStatus, setErrorStatus] = useState()
  const [deleteModalVisible, setDeleteModalVisible] = useState(false)
  const [errorModalVisible, setErrorModalVisible] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const dispatch = useDispatch()
  const isLoading = useSelector((state) => state.algoPost.isLoading)
  const postDetail = useSelector((state) => state.algoPost.dataDetail)
  const userNickName = useSelector((state) => state.auth.nickName)
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  const params = useParams()
  const location = useLocation()
  const history = useHistory()

  const handleGetPost = useCallback(() => {
    const {nickName, id} = params
    dispatch(getAlgoPost(nickName, id))
      .then((result) => setIsError(false))
      .catch((error) => {
        setIsError(true)
        setErrorStatus(error.response.status)
      })
  }, [params, dispatch])

  useEffect(() => {
    handleGetPost()
  }, [handleGetPost])

  async function handleLikePost() {
    if (!isLoggedIn) {
      const returnTo = location.pathname
      return history.push(`/login?returnTo=${returnTo}`)
    }

    try {
      if (postDetail.like) {
        await dispatch(deleteAlgoPostLike(postDetail.id))
      } else {
        await dispatch(postAlgoPostLike(postDetail.id))
      }
    } catch (error) {
      if (error.response.status === 401) handleUnauthorized(location.pathname, dispatch, history)
    }
  }

  async function handleDeletePost() {
    try {
      await dispatch(deleteAlgoPost(postDetail.id))
      history.push(`/@${userNickName}`)
    } catch (error) {
      if (error.response.status === 401) {
        handleUnauthorized(location.pathname, dispatch, history)
      } else {
        if (error.response.status === 404) setErrorMessage('????????? ??? ?????? ????????? ?????????')
        else setErrorMessage('????????? ?????????????????????')
        setErrorModalVisible(true)
      }
    } finally {
      setDeleteModalVisible(false)
    }
  }

  function handleEditPost() {
    history.push(`/write/${postDetail.id}`)
  }

  function handleDeleteModalVisible(value) {
    setDeleteModalVisible(value)
  }

  function handleErrorModalClose() {
    setErrorModalVisible(false)
  }

  if (isLoading) return <Loading />

  return (
    <Layout>
      {isError && errorStatus !== 404 && <ServerError errStatus={errorStatus} redo={handleGetPost} />}
      {isError && errorStatus === 404 && <NotFoundError />}
      {!isError && (
        <ReadPresenter
          postDetail={postDetail}
          isLoggedIn={isLoggedIn}
          userNickName={userNickName}
          handleLikePost={handleLikePost}
          handleEditPost={handleEditPost}
          handleDeleteModalVisible={handleDeleteModalVisible}
        />
      )}
      <DeleteModal
        open={deleteModalVisible}
        handleDeleteModalVisible={handleDeleteModalVisible}
        handleDeletePost={handleDeletePost}
      />
      <ErrorModal show={errorModalVisible} message={errorMessage} handleClose={handleErrorModalClose} />
    </Layout>
  )
}

export default ReadContainer
