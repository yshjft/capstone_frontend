import React, {useEffect, useState} from 'react'
import {useParams, useLocation, useHistory} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {getEditAlgoPost} from '../../../actions/algoPost'
import {handleUnauthorized} from '../../../lib/handleResError'
import Layout from '../../../components/common/Layout/Layout'
import ServerError from '../../../components/Error/ServerError'
import NotFoundError from '../../../components/Error/NotFoundError'
import WriteEditPresenter from '../../../presenters/Post/WriteEditPresenter'
import ErrorModal from '../../../components/ErrorModal'

const EditContainer = (props) => {
  const [isError, setIsError] = useState(false)
  const [errorStatus, setErrorStatus] = useState()
  const dispatch = useDispatch()
  const isLoading = useSelector((state) => state.algoPost.isLoading)
  const postDetail = useSelector((state) => state.algoPost.dataDetail)
  const params = useParams()
  const history = useHistory()

  useEffect(() => {
    handleGetEditPost()
  }, [params])

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
    console.log(title, language, isPublic, code, memo)
  }

  return (
    <Layout>
      {!isLoading && isError && errorStatus !== 404 && <ServerError errStatus={errorStatus} redo={handleGetEditPost} />}
      {!isLoading && isError && errorStatus === 404 && <NotFoundError />}
      {!isLoading && !isError && (
        <WriteEditPresenter type={'edit'} postDetail={postDetail} handleSubmit={handlePutPost} />
      )}
      {/*<ErrorModal />*/}
    </Layout>
  )
}

export default EditContainer
