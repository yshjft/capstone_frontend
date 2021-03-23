import React, {forwardRef} from 'react'

const CustomToggle = forwardRef(({children, onClick}, ref) => (
  <div
    ref={ref}
    onClick={(e) => {
      e.preventDefault()
      onClick(e)
    }}
    className="navDropdown"
  >
    {children}
    &#x25bc;
  </div>
))

export default CustomToggle
