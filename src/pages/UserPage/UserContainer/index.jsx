import React, {useEffect, useState} from 'react'
import {useHistory, useLocation} from 'react-router-dom'
import qs from 'query-string'
import Layout from '../../../components/common/Layout/Layout'
import UserInfoPresenter from '../../../presenters/User/UserInfoPresenter'
import UserPostLogPresenter from '../../../presenters/User/UserPostLogPresenter'
import TabPresenter from '../../../presenters/User/TabPresenter'

const UserContainer = (props) => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear())
  const history = useHistory()
  const location = useLocation()
  const query = qs.parse(location.search)

  useEffect(() => {
    console.log(query.tab)
  }, [query.tab])

  useEffect(() => {
    setSelectedYear(Number(query.year))
  }, [query.year])

  function handleYearChange(year) {
    query.year = year
    history.push({
      pathname: location.pathname,
      search: qs.stringify(query)
    })
    setSelectedYear(year)
  }

  return (
    <Layout>
      <UserInfoPresenter />
      <UserPostLogPresenter selectedYear={selectedYear} handleYearChange={handleYearChange} />
      <TabPresenter />
    </Layout>
  )
}

export default UserContainer
