import React from 'react'
import {Spinner} from 'react-bootstrap'
import styles from './index.module.scss'

const Loading = (props) => {
  return (
    <div className={styles.loadingLayout}>
      <div className={styles.loadingArea}>
        <div className={styles.text}>로딩 중</div>
        <Spinner animation={'border'} className={styles.icon} />
      </div>
    </div>
  )
}

export default Loading
