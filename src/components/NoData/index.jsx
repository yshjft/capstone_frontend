import React from 'react'
import {faFolderOpen} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import styles from './index.module.scss'

const NoData = (props) => {
  return (
    <div className={styles.noDataLayout}>
      <div>NO DATA</div>
      <FontAwesomeIcon icon={faFolderOpen} />
    </div>
  )
}

export default NoData
