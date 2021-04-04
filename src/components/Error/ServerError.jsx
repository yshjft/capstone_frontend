import React from 'react'
import {faRedo} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import style from './index.module.scss'

const ServerError = (props) => {
  const {errStatus, redo} = props

  return (
    <div className={style.errorLayout}>
      <div className={style.errorInfo}>
        <div className={style.errorStatus}>{errStatus} ERROR</div>
        <div className={style.errorRedo} onClick={() => redo()}>
          <FontAwesomeIcon icon={faRedo} />
        </div>
      </div>
    </div>
  )
}

export default ServerError
