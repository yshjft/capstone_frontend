import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import {faTimes} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import styles from './index.module.scss'

const ErrorModal = (props) => {
  const {show, message, handleClose} = props

  return (
    <Dialog open={show}>
      <div className={styles.dialogArea}>
        <div className={styles.header}>
          <div className={styles.title}>ERROR</div>
          <FontAwesomeIcon icon={faTimes} onClick={handleClose} className={styles.closeIcon} />
        </div>
        <div className={styles.message}>{message}</div>
      </div>
    </Dialog>
  )
}

export default ErrorModal
