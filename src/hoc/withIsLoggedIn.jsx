import React, {useEffect} from 'react'
import {Redirect} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {getAuthCheck} from '../actions/auth.'

const withIsLoggedIn = (WrappedComponent) => {
  return (props) => {
    const dispatch = useDispatch()
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

    useEffect(() => {
      dispatch(getAuthCheck()).catch((error) => {
        // 서버 에러 처리, 나중에 시간되면
      })
    }, [])

    return isLoggedIn ? <WrappedComponent {...props} /> : <Redirect to="/login" />
  }
}

export default withIsLoggedIn
