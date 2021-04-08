import React, {useState, useEffect} from 'react'
import {useLocation, useHistory} from 'react-router-dom'
import qs from 'query-string'
import Tabs from '../../../components/Tabs'
import PostTabPresenter from './PostTabPresenter'
import LikeTabPresenter from './LikeTabPresenter'
import SubscribeTabPresenter from './SubscribeTabPresenter'

const TabPresenter = (props) => {
  // posts & likes & subscribes
  const [selectedTab, setSelectedTab] = useState('')
  const location = useLocation()
  const history = useHistory()
  const query = qs.parse(location.search)

  useEffect(() => {
    setSelectedTab(query.tab)
  }, [query.tab])

  function handleTabSelect(selectedValue) {
    query.tab = selectedValue
    history.push({
      pathname: location.pathname,
      search: qs.stringify(query)
    })
    setSelectedTab(selectedValue)
  }

  return (
    <>
      <Tabs selectedTab={selectedTab} handleTabSelect={handleTabSelect} />
      <div>
        {selectedTab === 'posts' && <PostTabPresenter />}
        {selectedTab === 'likes' && <LikeTabPresenter />}
        {selectedTab === 'followings' && <SubscribeTabPresenter />}
      </div>
    </>
  )
}

export default TabPresenter
