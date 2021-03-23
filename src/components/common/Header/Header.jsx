import React from 'react'
import {useDispatch} from 'react-redux'
import {getLogout} from '../../../actions/auth'
import {useHistory, NavLink} from 'react-router-dom'
import {Dropdown} from 'react-bootstrap'
import CustomToggle from './CutomToggle'

const Header = (props) => {
  const {isLoggedIn, nickName} = props
  const dispatch = useDispatch()
  const history = useHistory()

  function handlePageMove(path) {
    history.push(path)
  }

  async function handleLogout() {
    try {
      await dispatch(getLogout())
    } catch (error) {
      // 에러처리 로그아웃 에러 발생시 에러 처리 필요
      console.log(error)
    }
  }

  return (
    <div className="headerLayout">
      <div className="header">
        <NavLink to="/" className="brand">
          AlgoHub
        </NavLink>
        <div className="nav">
          {!isLoggedIn && (
            <>
              <NavLink to="/login" className="navLink" activeClassName="activeNavLink">
                로그인
              </NavLink>
              <NavLink to="/join" className="navLink" activeClassName="activeNavLink">
                회원가입
              </NavLink>
            </>
          )}
          {isLoggedIn && (
            <>
              <NavLink to="/write" className="navLink" activeClassName="activeNavLink">
                알고리즘 기록
              </NavLink>
              <Dropdown>
                <Dropdown.Toggle as={CustomToggle}>{nickName}</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => handlePageMove(`/@${nickName}`)}>마이페이지</Dropdown.Item>
                  <Dropdown.Item onClick={() => handlePageMove('/setting')}>설정</Dropdown.Item>
                  <Dropdown.Item onClick={handleLogout}>로그아웃</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
