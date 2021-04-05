import React from 'react'
import {Dialog} from '@material-ui/core'
import styles from './index.module.scss'

const DeleteModal = (props) => {
  const {open, handleDeleteModalVisible} = props

  return (
    <Dialog open={open}>
      <div className={styles.tmp}>
        <div className={styles.title}>게시물 삭제</div>
        <div>정말로 삭제하시겠습니까?</div>
        <div>
          <button onClick={() => handleDeleteModalVisible(false)}>취소</button>
          <button>삭제</button>
        </div>
      </div>
    </Dialog>
  )
}

export default DeleteModal
