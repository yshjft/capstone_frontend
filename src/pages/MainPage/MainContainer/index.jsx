import React, {useEffect, useState} from 'react'
import {useHistory, useLocation} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import qs from 'query-string'
import {getAlgoPosts} from '../../../actions/algoPost'
import Layout from '../../../components/common/Layout/Layout'
import ServerError from '../../../components/Error/ServerError'
import MainSearch from '../../../components/MainSearch'
import PostListPresenter from '../../../presenters/Post/PostListPresenter'
import NoData from '../../../components/NoData'
import PaginationBlock from '../../../components/PaginationBlock/PaginationBlock'
import Loading from '../../../components/Loading'
import LanguageFilter from "../../../components/LanguageFilter";

const MainContainer = (props) => {
  const [isError, setIsError] = useState(false)
  const [errStatus, setErrStatus] = useState(200)
  const [selectedLang, setSelectedLang] = useState([])
  const dispatch = useDispatch()
  const isLoading = useSelector((state) => state.algoPost.isLoading)
  const data = useSelector((state) => state.algoPost.data)
  const total = useSelector((state) => state.algoPost.total)
  const location = useLocation()
  const history = useHistory()
  const query = qs.parse(location.search)

  useEffect(() => {
    if(query.langFilter) setSelectedLang(decodeURIComponent(query.langFilter).split(','))

    dispatch(getAlgoPosts(query.page, query.search, query.langFilter)).catch((error) => {
      setErrStatus(error.response.status)
      setIsError(true)
    })
  }, [dispatch, query.page, query.search, query.langFilter])

  function handleSearch(search) {
      setIsError(false)

      if (search === '') delete query.search
      else query.search = encodeURIComponent(search)

      query.page = 1

      history.push({
        pathname: location.pathname,
        search: qs.stringify(query)
      })
  }

  function handleLanguageFilter(language){
    setIsError(false)

    let prev = selectedLang.concat()
    let after = []

    if(prev.includes(language)){
      after = prev.filter(lang => lang !== language)
    }else{
      after = prev.concat(language)
    }
    setSelectedLang(after)

    if(after.length === 0) delete query.langFilter
    else query.langFilter = encodeURIComponent(after.join(','))

    history.push({
      pathname: location.pathname,
      search: qs.stringify(query)
    })

  }

  function handlePagination(page) {
    // try {
      setIsError(false)
      if (page != null) query.page = page
      history.push({
        pathname: location.pathname,
        search: qs.stringify(query)
      })
    // } catch (error) {
    //   setErrStatus(error.response.status)
    //   setIsError(true)
    // }
  }

  async function handleRedo() {
    try {
      setIsError(false)
      await dispatch(getAlgoPosts(query.page, query.search))
    } catch (error) {
      setErrStatus(error.response.status)
      setIsError(true)
    }
  }

  return (
    <Layout>
      <MainSearch handleSearch={handleSearch} />
      <LanguageFilter selectedLang={selectedLang} handleLanguageFilter={handleLanguageFilter}/>
      {isError && <ServerError errStatus={errStatus} redo={handleRedo} />}
      {!isError && isLoading && <Loading />}
      {!isError && !isLoading && total !== 0 && <PostListPresenter postList={data} />}
      {!isError && !isLoading && total === 0 && <NoData />}
      <PaginationBlock total={total} handlePagination={handlePagination} />
    </Layout>
  )
}

export default MainContainer
