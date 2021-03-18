import {MainPage, JoinPage, LoginPage, WritePage} from './pages'

export const routes = [
  {path: '/', component: MainPage, exact: true},
  {path: '/join', component: JoinPage},
  {path: '/login', component: LoginPage},
  {path: '/write', component: WritePage}
]
