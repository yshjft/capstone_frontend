import React, {useEffect, useState, useCallback} from 'react'
import {useHistory, useParams, useLocation} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {getUserInfo} from '../../../actions/uesr'
import qs from 'query-string'
import Layout from '../../../components/common/Layout/Layout'
import UserInfoPresenter from '../../../presenters/User/UserInfoPresenter'
import UserPostLogPresenter from '../../../presenters/User/UserPostLogPresenter'
import TabPresenter from '../../../presenters/User/TabPresenter'

const UserContainer = (props) => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear())
  const dispatch = useDispatch()
  const isLoading = useSelector((state) => state.user.isLoading)
  const userInfo = useSelector((state) => state.user.userInfo)
  const postLog = useSelector((state) => state.user.postLog)
  const history = useHistory()
  const location = useLocation()
  const params = useParams()
  const query = qs.parse(location.search)

  const handleGetUserInfo = useCallback(
    (nickName, year, tab, tabPage) => {
      dispatch(getUserInfo(nickName, year, tab, tabPage - 1))
        .then((result) => setSelectedYear(Number(year)))
        .catch((error) => console.log(error))
    },
    [dispatch]
  )

  useEffect(() => {
    const {nickName} = params
    const {year, tab, tabPage} = query

    handleGetUserInfo(nickName, year, tab, tabPage)
  }, [params.nickName, query.year, query.tab, query.tabPage])

  function handleYearChange(year) {
    query.year = year
    history.push({
      pathname: location.pathname,
      search: qs.stringify(query)
    })
    setSelectedYear(year)
  }

  return (
    <Layout>
      <UserInfoPresenter userInfo={userInfo} />
      <UserPostLogPresenter
        userInfo={userInfo}
        postLog={postLog}
        selectedYear={selectedYear}
        handleYearChange={handleYearChange}
      />
      <TabPresenter />
    </Layout>
  )
}

export default UserContainer
