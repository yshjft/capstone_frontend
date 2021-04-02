import React, {useEffect} from 'react'
import {useLocation, Redirect} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {getAuthCheck} from '../actions/auth'
import qs from 'query-string'

const withIsNotLoggedIn = (WrappedComponent) => {
  return (props) => {
    const dispatch = useDispatch()
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
    const location = useLocation()
    const {returnTo} = qs.parse(location.search)

    useEffect(() => {
      dispatch(getAuthCheck()).catch((error) => {
        // 서버 에러 처리, 나중에 시간되면
      })
    }, [dispatch])

    return isLoggedIn ? <Redirect to={returnTo ? returnTo : '/'} /> : <WrappedComponent {...props} />
  }
}

export default withIsNotLoggedIn
