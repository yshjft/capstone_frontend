import {
  MainPage,
  JoinPage,
  LoginPage,
  SearchPasswordPage,
  WritePage,
  ReadPage,
  EditPage,
  SettingPage,
  UserPage,
  NotFoundPage
} from './pages'
import withIsNotLoggedIn from './hoc/withIsNotLoggedIn'
import withIsLoggedIn from './hoc/withIsLoggedIn'

export const routes = [
  {path: '/', component: MainPage, exact: true},
  {path: '/join', component: withIsNotLoggedIn(JoinPage)},
  {path: '/login', component: withIsNotLoggedIn(LoginPage)},
  {path: '/searchPassword', component: withIsNotLoggedIn(SearchPasswordPage)},
  {path: '/write', component: withIsLoggedIn(WritePage), exact: true},
  {path: '/write/:id', component: withIsLoggedIn(EditPage)},
  {path: '/@:nickName', component: UserPage, exact: true},
  {path: '/@:nickName/:id', component: ReadPage},
  {path: '/setting', component: withIsLoggedIn(SettingPage)},
  {path: '*', component: NotFoundPage}
]
