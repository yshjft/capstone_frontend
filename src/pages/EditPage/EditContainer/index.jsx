import React, {useEffect, useState} from 'react'
import {useParams, useLocation, useHistory} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {getEditAlgoPost} from '../../../actions/algoPost'
import {handleUnauthorized} from '../../../lib/handleResError'
import Layout from '../../../components/common/Layout/Layout'
import ServerError from '../../../components/Error/ServerError'
import NotFoundError from '../../../components/Error/NotFoundError'

const EditContainer = (props) => {
  const params = useParams()
  const dispatch = useDispatch()
  const isLoading = useSelector((state) => state.algoPost.isLoading)
  const postDetail = useSelector((state) => state.algoPost.dataDetail)

  useEffect(() => {
    handleGetEditPost()
  }, [params])

  function handleGetEditPost() {
    const {id} = params
    dispatch(getEditAlgoPost(id))
  }

  function handlePutPost() {}

  return <div>Edit Container</div>
}

export default EditContainer
