import {GET_AUTH_CHECK} from '../actions/auth'

const handleUnauthorized = (returnTo, dispatch, history) => {
  dispatch({type: GET_AUTH_CHECK, payload: {id: 0, nickName: '', isLoggedIn: false}})
  history.push(`/login?returnTo=${returnTo}`)
}

export {handleUnauthorized}
