export function validateEmailForm(email) {
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return regex.test(String(email).toLowerCase())
}

export function handleValidNickName(nickNameRef, setIsValidNickName) {
  const nickName = nickNameRef.current.value

  if (nickName === '') {
    setIsValidNickName({isValid: false, inValidType: 'EMPTY'})
    return false
  }
  if (nickName.length > 10) {
    setIsValidNickName({isValid: false, inValidType: 'TOO_LONG'})
    return false
  }

  setIsValidNickName({isValid: true, inValidType: ''})
  return true
}

export function handleValidEmail(emailRef, setIsValidEmail) {
  const email = emailRef.current.value

  if (email === '') {
    setIsValidEmail({isValid: false, inValidType: 'EMPTY'})
    return false
  }
  if (!validateEmailForm(email)) {
    setIsValidEmail({isValid: false, inValidType: 'INVALID_EMAIL'})
    return false
  }

  setIsValidEmail({isValid: true, inValidType: ''})
  return true
}

export function handleValidPassword(passwordRef, setIsValidPassword) {
  const password = passwordRef.current.value

  if (password === '') {
    setIsValidPassword({isValid: false, inValidType: 'EMPTY'})
    return false
  }
  if (password.length < 6) {
    setIsValidPassword({isValid: false, inValidType: 'TOO_SHORT'})
    return false
  }

  setIsValidPassword({isValid: true, inValidType: ''})
  return true
}

export function handleValidPasswordCheck(passwordRef, passwordCheckRef, setIsValidPasswordCheck) {
  const password = passwordRef.current.value
  const passwordCheck = passwordCheckRef.current.value

  if (passwordCheck === '') {
    setIsValidPasswordCheck({isValid: false, inValidType: 'EMPTY'})
    return false
  }
  if (password !== passwordCheck) {
    setIsValidPasswordCheck({isValid: false, inValidType: 'NOT_EQUAL'})
    return false
  }

  setIsValidPasswordCheck({isValid: true, inValidType: ''})
  return true
}
