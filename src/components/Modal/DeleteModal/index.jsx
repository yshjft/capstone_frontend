import React from 'react'
import {Dialog} from '@material-ui/core'
import style from './deleteModal.module.scss'

const DeleteModal = (props) => {
  const {open, handleDeleteModalVisible, handleDeletePost} = props

  return (
    <Dialog open={open}>
      <div className={style.deleteModalArea}>
        <div className={style.title}>게시물 삭제</div>
        <div className={style.question}>정말로 삭제하시겠습니까?</div>
        <div className={style.buttonArea}>
          <button onClick={() => handleDeleteModalVisible(false)} className={style.cancel}>
            취소
          </button>
          <button onClick={handleDeletePost} className={style.delete}>
            삭제
          </button>
        </div>
      </div>
    </Dialog>
  )
}

export default DeleteModal
