import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getAuthCheck} from '../actions/auth.'

const withIsNotLoggedIn = (WrappedComponent) => {
  return (props) => {
    const {history} = props
    const dispatch = useDispatch()

    console.log(history)

    useEffect(() => {
      dispatch(getAuthCheck())
        .then((res) => {
          if (res.isLoggedIn) history.goBack()
        })
        .catch((error) => {
          // 서버 에러 처리, 나중에 시간되면
          history.goBack()
        })
    }, [])

    return <WrappedComponent {...props} />
  }
}

export default withIsNotLoggedIn
