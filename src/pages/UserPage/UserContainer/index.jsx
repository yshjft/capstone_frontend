import React from 'react'
import Layout from '../../../components/common/Layout/Layout'
import TabPresenter from '../../../presenters/User/TabPresenter'

const UserContainer = (props) => {
  return (
    <Layout>
      <div>user information(nickName, email, number of total like, subscribe button)</div>
      <div>use post log(미정)</div>
      <TabPresenter />
    </Layout>
  )
}

export default UserContainer
