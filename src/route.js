import {MainPage, JoinPage, LoginPage, WritePage, SettingPage, UserPage} from './pages'
import withIsNotLoggedIn from './hoc/withIsNotLoggedIn'
import withIsLoggedIn from './hoc/withIsLoggedIn'

export const routes = [
  {path: '/', component: MainPage, exact: true},
  {path: '/join', component: withIsNotLoggedIn(JoinPage)},
  {path: '/login', component: withIsNotLoggedIn(LoginPage)},
  {path: '/write', component: withIsLoggedIn(WritePage)},
  {path: '/@:nickName', component: UserPage, exact: true},
  {path: '/setting', component: withIsLoggedIn(SettingPage)}
]

/*

/join & /login => 로그인이면 들어가면 안됨
/write => 로그인일 경우에만 접근 가능


1) 로그인 X 일 때 접근 가능
/join, /login

로그인 상태 => 이전 페이지로 리다이렉트


2) 로그인 O 일 때 접근 가능
/write, /edit (글 수정), /setting

로그인 상태 X => 로그인 페이지

 */
