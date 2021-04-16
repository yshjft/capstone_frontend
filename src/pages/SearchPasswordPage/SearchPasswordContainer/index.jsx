import React, {useState} from 'react'
import Layout from '../../../components/common/Layout/Layout'
import SearchPasswordPresenter from '../../../presenters/Auth/SearchPasswordPresenter'
import ErrorModal from '../../../components/Modal/ErrorModal'

const SearchPasswordContainer = (props) => {
  const [errorMessage, setErrorMessage] = useState('')
  const [showErrorModal, setShowErrorModal] = useState(false)

  function handleErrorModalClose() {
    setShowErrorModal(false)
  }

  return (
    <Layout>
      <SearchPasswordPresenter />
      <ErrorModal show={showErrorModal} message={errorMessage} handleClose={handleErrorModalClose} />
    </Layout>
  )
}

export default SearchPasswordContainer
