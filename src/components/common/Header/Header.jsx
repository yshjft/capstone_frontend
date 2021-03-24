import React from 'react'
import {useDispatch} from 'react-redux'
import {getLogout} from '../../../actions/auth'
import {useHistory, NavLink} from 'react-router-dom'
import {Dropdown} from 'react-bootstrap'
import CustomToggle from './CutomToggle'
import styles from './index.module.scss'

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
    <div className={styles.headerLayout}>
      <div className={styles.header}>
        <NavLink to="/" className={styles.brand}>
          AlgoHub
        </NavLink>
        <div className={styles.nav}>
          {!isLoggedIn && (
            <>
              <NavLink to="/login" className={styles.navLink} activeClassName={styles.activeNavLink}>
                로그인
              </NavLink>
              <NavLink to="/join" className={styles.navLink} activeClassName={styles.activeNavLink}>
                회원가입
              </NavLink>
            </>
          )}
          {isLoggedIn && (
            <>
              <NavLink to="/write" className={styles.navLink} activeClassName={styles.activeNavLink}>
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
