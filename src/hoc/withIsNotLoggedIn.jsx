import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getAuthCheck} from '../actions/auth'
import {Redirect} from 'react-router-dom'

const withIsNotLoggedIn = (WrappedComponent) => {
  return (props) => {
    const dispatch = useDispatch()
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

    useEffect(() => {
      dispatch(getAuthCheck()).catch((error) => {
        // 서버 에러 처리, 나중에 시간되면
      })
    }, [dispatch])

    return isLoggedIn ? <Redirect to="/" /> : <WrappedComponent {...props} />
  }
}

export default withIsNotLoggedIn
