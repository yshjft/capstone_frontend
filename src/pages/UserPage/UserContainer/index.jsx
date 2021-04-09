import React, {useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import qs from 'query-string'
import Layout from '../../../components/common/Layout/Layout'
import UserInfoPresenter from '../../../presenters/User/UserInfoPresenter'
import UserPostLogPresenter from '../../../presenters/User/UserPostLogPresenter'
import TabPresenter from '../../../presenters/User/TabPresenter'

const UserContainer = (props) => {
  const location = useLocation()
  const query = qs.parse(location.search)

  useEffect(() => {
    console.log(query.tab)
  }, [query.tab])

  useEffect(() => {
    console.log(query.year)
  }, [query.year])

  return (
    <Layout>
      <UserInfoPresenter />
      <UserPostLogPresenter />
      <TabPresenter />
    </Layout>
  )
}

export default UserContainer
