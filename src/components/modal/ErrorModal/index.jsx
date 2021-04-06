import React from 'react'
import {Dialog} from '@material-ui/core'
import styles from './errorModal.module.scss'

const ErrorModal = (props) => {
  const {show, message, handleClose} = props

  return (
    <Dialog open={show}>
      <div className={styles.dialogArea}>
        <div className={styles.title}>ERROR</div>
        <div className={styles.message}>{message}</div>
        <div className={styles.buttonArea}>
          <button onClick={handleClose}>확인</button>
        </div>
      </div>
    </Dialog>
  )
}

export default ErrorModal
