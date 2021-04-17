import React, {useState, useRef} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {handleValidEmail} from '../../../lib/validate'
import {getPasswordSearch} from '../../../actions/auth'
import Layout from '../../../components/common/Layout/Layout'
import SearchPasswordPresenter from '../../../presenters/Auth/SearchPasswordPresenter'
import ErrorModal from '../../../components/Modal/ErrorModal'

const SearchPasswordContainer = (props) => {
  const [errorMessage, setErrorMessage] = useState('')
  const [showErrorModal, setShowErrorModal] = useState(false)
  const [isValidEmail, setIsValidEmail] = useState({isValid: true, inValidType: ''})
  const [passwordChanged, setPasswordChanged] = useState(false)
  const isLoading = useSelector((state) => state.auth.isLoading)
  const dispatch = useDispatch()
  const emailRef = useRef(null)

  function handleErrorModalClose() {
    setShowErrorModal(false)
  }

  function handleEmailChange() {
    handleValidEmail(emailRef, setIsValidEmail)
  }

  async function handlePasswordSearch() {
    const isValid = handleValidEmail(emailRef, setIsValidEmail)

    if (!isValid) return

    try {
      await dispatch(getPasswordSearch(emailRef.current.value))
      setPasswordChanged(true)
    } catch (error) {
      if (error.response.status === 404) {
        setIsValidEmail({isValid: false, inValidType: 'NOT_REGISTERED'})
      } else {
        setShowErrorModal(true)
        setErrorMessage(`${error.response.status} ERROR`)
      }
    }
  }

  return (
    <Layout>
      <SearchPasswordPresenter
        ref={emailRef}
        isLoading={isLoading}
        isValidEmail={isValidEmail}
        passwordChanged={passwordChanged}
        handleEmailChange={handleEmailChange}
        handlePasswordSearch={handlePasswordSearch}
      />
      <ErrorModal show={showErrorModal} message={errorMessage} handleClose={handleErrorModalClose} />
    </Layout>
  )
}

export default SearchPasswordContainer
