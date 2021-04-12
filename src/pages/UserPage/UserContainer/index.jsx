import React, {useEffect, useState, useCallback} from 'react'
import {useHistory, useParams, useLocation} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {
  GET_USER_INFO,
  GET_USER_POST_LOG,
  GET_USER_TAB_POST,
  getUserInfo,
  postUserFollow,
  deleteUserFollow
} from '../../../actions/uesr'
import qs from 'query-string'
import Layout from '../../../components/common/Layout/Layout'
import Loading from '../../../components/Loading'
import UserInfoPresenter from '../../../presenters/User/UserInfoPresenter'
import UserPostLogPresenter from '../../../presenters/User/UserPostLogPresenter'
import TabPresenter from '../../../presenters/User/TabPresenter'
import {handleUnauthorized} from '../../../lib/handleResError'

const UserContainer = (props) => {
  const [selectedYear, setSelectedYear] = useState('')
  const [selectedTab, setSelectedTab] = useState('')
  const [curTabPage, setCurTabPage] = useState(0)
  const dispatch = useDispatch()
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  const logInUserId = useSelector((state) => state.auth.id)
  const isUserInfoLoading = useSelector((state) => state.user.isUserInfoLoading)
  const userInfo = useSelector((state) => state.user.userInfo)
  const postLog = useSelector((state) => state.user.postLog)
  const posts = useSelector((state) => state.user.posts)
  const likePosts = useSelector((state) => state.user.likePosts)
  const followingUsers = useSelector((state) => state.user.followingUsers)
  const total = useSelector((state) => state.user.total)
  const history = useHistory()
  const location = useLocation()
  const params = useParams()
  const query = qs.parse(location.search)

  const handleGetUserInfo = useCallback(
    (type, nickName, year, tab, tabPage) => {
      dispatch(getUserInfo(type, nickName, year, tab, tabPage - 1))
        .then((result) => {
          setSelectedYear(Number(year))
          setSelectedTab(tab)
          setCurTabPage(tabPage)
        })
        .catch((error) => console.log(error))
    },
    [dispatch]
  )

  useEffect(() => {
    const nickName = params.nickName
    const {year, tab, tabPage} = query
    handleGetUserInfo(GET_USER_INFO, nickName, year, tab, tabPage)
    return () => {
      dispatch({type: GET_USER_INFO})
    }
  }, [params.nickName, dispatch, handleGetUserInfo])

  function handleYearChange(year) {
    const {nickName} = params
    const {tab, tabPage} = query

    query.year = year
    history.push({
      pathname: location.pathname,
      search: qs.stringify(query)
    })
    handleGetUserInfo(GET_USER_POST_LOG, nickName, year, tab, tabPage)
  }

  function handleTabSelect(tab) {
    const {nickName} = params
    const {year} = query

    query.tab = tab
    query.tabPage = 1
    history.push({
      pathname: location.pathname,
      search: qs.stringify(query)
    })
    handleGetUserInfo(GET_USER_TAB_POST, nickName, year, tab, 1)
  }

  function handleTabPageChange(tabPage) {
    const {nickName} = params
    const {year, tab} = query

    query.tabPage = tabPage
    history.push({
      pathname: location.pathname,
      search: qs.stringify(query)
    })
    handleGetUserInfo(GET_USER_TAB_POST, nickName, year, tab, tabPage)
  }

  async function handleFollowUser() {
    if (!isLoggedIn) {
      const reTurnTo = location.pathname
      return history.push(`/login?returnTo=${reTurnTo}`)
    }
    try {
      if (!userInfo.follow) {
        await dispatch(postUserFollow(userInfo.id))
      } else {
        await dispatch(deleteUserFollow(userInfo.id))
      }
    } catch (error) {
      if (error.response.status === 401) handleUnauthorized(location.pathname, dispatch, history)
    }
  }

  if (isUserInfoLoading) return <Loading />
  if (!isUserInfoLoading)
    return (
      <Layout>
        <UserInfoPresenter loginUserId={logInUserId} userInfo={userInfo} handleFollowUser={handleFollowUser} />
        <UserPostLogPresenter
          userInfo={userInfo}
          postLog={postLog}
          selectedYear={selectedYear}
          handleYearChange={handleYearChange}
        />
        <TabPresenter
          selectedTab={selectedTab}
          curTabPage={curTabPage}
          total={total}
          posts={posts}
          likePosts={likePosts}
          followingUsers={followingUsers}
          handleTabSelect={handleTabSelect}
          handleTabPageChange={handleTabPageChange}
        />
      </Layout>
    )
}

export default UserContainer
