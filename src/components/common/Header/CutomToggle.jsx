import React, {forwardRef} from 'react'
import styles from './index.module.scss'

const CustomToggle = forwardRef(({children, onClick}, ref) => (
  <div
    ref={ref}
    onClick={(e) => {
      e.preventDefault()
      onClick(e)
    }}
    className={styles.navDropdown}
  >
    {children}
    &#x25bc;
  </div>
))

export default CustomToggle
