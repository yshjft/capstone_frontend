import React from 'react'
import {Link} from 'react-router-dom'

const DropdownItem = (props) => {
  const {path, pathName} = props

  return (
    <div className="navDropdownItem">
      <Link to={path} className="link">
        {pathName}
      </Link>
    </div>
  )
}

export default DropdownItem
