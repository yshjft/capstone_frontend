import React from 'react'
import Layout from '../../../components/common/Layout/Layout'
import WritePresenter from '../../../presenters/Post/WritePresenter'

const WriteContainer = (props) => {
  // submit api 호출
  return (
    <Layout>
      <WritePresenter />
    </Layout>
  )
}

export default WriteContainer
