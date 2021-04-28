import React from 'react'
import {useLocation, Redirect} from 'react-router-dom'
import qs from 'query-string'
import UserContainer from './UserContainer'

const UserPage = (props) => {
  const location = useLocation()
  const query = qs.parse(location.search)

  if (!query.tab) {
    // 사용자가 쓴 글 목록 & 사용자가 좋아요 누른 글 목록 & 사용자가 구독한 목록
    // posts & likes & subscribes
    query.year = new Date().getFullYear()
    query.tab = 'posts'
    query.tabPage = 1
    const year = new Date().getFullYear()
    const tab = 'posts'
    const tabPage = 1
    return <Redirect to={{pathname: location.pathname, search: qs.stringify(query)}} />
  }

  return <UserContainer />
}

export default UserPage
