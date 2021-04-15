import React from 'react'
import {Dialog} from '@material-ui/core'
import styles from './quit.module.scss'

const QuitModal = (props) => {
  const {show, isLoading, handleClose, handleQuit} = props

  return (
    <Dialog open={show}>
      <div className={styles.quitModalArea}>
        <div className={styles.header}>회원 탈퇴</div>
        <div className={styles.notice}>지금까지 작성하 모든 기록들이 삭제됩니다. 정말로 탈퇴 하시겠습니까?</div>
        <div className={styles.buttons}>
          <button onClick={handleClose} className={styles.cancel}>
            취소
          </button>
          <button onClick={handleQuit} disabled={isLoading ? 'disabled' : ''} className={styles.quit}>
            {isLoading ? '탈퇴 중...' : '탈퇴'}
          </button>
        </div>
      </div>
    </Dialog>
  )
}

export default QuitModal
