import React from 'react'
import {useHistory} from 'react-router-dom'
import style from './index.module.scss'

const NotFoundError = (props) => {
  const history = useHistory()

  function handleReturnHome() {
    history.push('/')
  }

  return (
    <div className={style.errorLayout}>
      <div className={style.errorInfo}>
        <div className={style.errorStatus}>404 NOT FOUND</div>
        <div className={style.returnHome} onClick={handleReturnHome}>
          홈으로
        </div>
      </div>
    </div>
  )
}

export default NotFoundError
