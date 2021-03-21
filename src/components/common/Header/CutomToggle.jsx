import React from 'react'

const CustomToggle = React.forwardRef(({children, onClick}, ref) => (
  <a
    href=""
    ref={ref}
    onClick={(e) => {
      e.preventDefault()
      onClick(e)
    }}
    className="navDropdown"
  >
    {children}
    &#x25bc;
  </a>
))

export default CustomToggle
