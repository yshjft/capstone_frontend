import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = (props) => {
  return (
    <div className="headerLayout">
      <div className="header">
        <NavLink to="/" className="brand">
          AlgoHub
        </NavLink>
        <div className="nav">
          <NavLink to="/login" className="navLink" activeClassName="activeNavLink">
            로그인
          </NavLink>
          <NavLink to="/join" className="navLink" activeClassName="activeNavLink">
            회원가입
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Header
