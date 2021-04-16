import React, {useState, useRef} from 'react'
import {handleValidEmail} from '../../../lib/validate'
import Layout from '../../../components/common/Layout/Layout'
import SearchPasswordPresenter from '../../../presenters/Auth/SearchPasswordPresenter'
import ErrorModal from '../../../components/Modal/ErrorModal'

const SearchPasswordContainer = (props) => {
  const [errorMessage, setErrorMessage] = useState('')
  const [showErrorModal, setShowErrorModal] = useState(false)
  const [isValidEmail, setIsValidEmail] = useState(false)
  const emailRef = useRef(null)

  function handleErrorModalClose() {
    setShowErrorModal(false)
  }

  function handleEmailChange() {
    handleValidEmail(emailRef, setIsValidEmail)
  }

  function handlePasswordSearch() {
    const isValid = handleValidEmail(emailRef, setIsValidEmail)

    if (!isValid) return

    console.log(emailRef.current.value)
  }

  return (
    <Layout>
      <SearchPasswordPresenter
        ref={emailRef}
        isValidEmail={isValidEmail}
        handleEmailChange={handleEmailChange}
        handlePasswordSearch={handlePasswordSearch}
      />
      <ErrorModal show={showErrorModal} message={errorMessage} handleClose={handleErrorModalClose} />
    </Layout>
  )
}

export default SearchPasswordContainer
