import {MainPage, JoinPage, LoginPage, WritePage, SettingPage, UserPage} from './pages'

export const routes = [
  {path: '/', component: MainPage, exact: true},
  {path: '/join', component: JoinPage},
  {path: '/login', component: LoginPage},
  {path: '/write', component: WritePage},
  {path: '/@:nickName', component: UserPage, exact: true},
  {path: '/setting', component: SettingPage}
]
