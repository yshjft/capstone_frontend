import React, {useEffect, useState} from 'react'
import {useParams, useLocation, useHistory} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {getAlgoPost, postAlgoPostLike, deleteAlgoPostLike} from '../../../actions/algoPost'
import {handleUnauthorized} from '../../../lib/handleResError'
import Layout from '../../../components/common/Layout/Layout'
import ServerError from '../../../components/Error/ServerError'
import ReadPresenter from '../../../presenters/Post/ReadPresenter'
import NotFoundError from '../../../components/Error/NotFoundError'

const ReadContainer = (props) => {
  const [isError, setIsError] = useState(false)
  const [errorStatus, setErrorStatus] = useState()
  const params = useParams()
  const location = useLocation()
  const history = useHistory()
  const dispatch = useDispatch()
  const isLoading = useSelector((state) => state.algoPost.isLoading)
  const postDetail = useSelector((state) => state.algoPost.dataDetail)
  const userNickName = useSelector((state) => state.auth.nickName)
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

  useEffect(() => {
    handleGetPost()
  }, [params])

  function handleGetPost() {
    const {nickName, id} = params
    dispatch(getAlgoPost(nickName, id))
      .then((result) => setIsError(false))
      .catch((error) => {
        setIsError(true)
        setErrorStatus(error.response.status)
      })
  }

  async function handlePostLike() {
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

  return (
    <Layout>
      {!isLoading && isError && errorStatus !== 404 && <ServerError errStatus={errorStatus} redo={handleGetPost} />}
      {!isLoading && isError && errorStatus === 404 && <NotFoundError />}
      {!isLoading && !isError && (
        <ReadPresenter
          postDetail={postDetail}
          isLoggedIn={isLoggedIn}
          userNickName={userNickName}
          handlePostLike={handlePostLike}
        />
      )}
    </Layout>
  )
}

export default ReadContainer
