import React from 'react'
import {Redirect} from 'react-router-dom'
import qs from 'query-string'
import MainContainer from './MainContainer'

const MainPage = (props) => {
  const query = qs.parse(props.location.search)

  if (!query.page || query.page <= 0) {
    query.page = 1
    return <Redirect to={{pathname: props.location.pathname, search: qs.stringify(query)}} />
  }

  return <MainContainer />
}

export default MainPage
