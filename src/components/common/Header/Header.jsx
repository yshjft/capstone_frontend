import React, {useState} from 'react'
import {Link, NavLink} from 'react-router-dom'
import {OverlayTrigger, Popover} from 'react-bootstrap'

const Header = (props) => {
  const {isLoggedIn, nickName} = props
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  function handleDropDown() {
    setIsDropdownOpen(!isDropdownOpen)
  }

  return (
    <div className="headerLayout">
      <div className="header">
        <NavLink to="/" className="brand">
          AlgoHub
        </NavLink>
        <div className="nav">
          {isLoggedIn && (
            <>
              <NavLink to="/login" className="navLink" activeClassName="activeNavLink">
                로그인
              </NavLink>
              <NavLink to="/join" className="navLink" activeClassName="activeNavLink">
                회원가입
              </NavLink>
            </>
          )}
          {!isLoggedIn && (
            <>
              <NavLink to="/write" className="navLink" activeClassName="activeNavLink">
                알고리즘 기록
              </NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
