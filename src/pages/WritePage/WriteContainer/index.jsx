import React from 'react'
import Layout from '../../../components/common/Layout/Layout'
import WritePresenter from '../../../presenters/Post/WritePresenter'

const WriteContainer = (props) => {
  // submit api 호출

  function handleSubmit(title, language, isPublic, code, memo) {
    console.log(title, language, isPublic, code, memo)
  }

  return (
    <Layout>
      <WritePresenter handleSubmit={handleSubmit} />
    </Layout>
  )
}

export default WriteContainer
