import React from 'react'
import MainContainer from './MainContainer'
import {Redirect} from 'react-router-dom'
import qs from 'query-string'

const MainPage = (props) => {
  const query = qs.parse(props.location.search)

  if (!query.page || query.page <= 0) {
    query.page = 1
    return <Redirect to={{pathname: props.location.pathname, search: qs.stringify(query)}} />
  }

  return <MainContainer />
}

export default MainPage
