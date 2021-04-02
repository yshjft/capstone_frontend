import React, {useEffect} from 'react'
import {useParams, useLocation, useHistory} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {getAlgoPost} from '../../../actions/algoPost'
import Layout from '../../../components/common/Layout/Layout'
import ReadPresenter from '../../../presenters/Post/ReadPresenter'

const ReadContainer = (props) => {
  const params = useParams()
  const location = useLocation()
  const history = useHistory()
  const dispatch = useDispatch()
  const postDetail = useSelector((state) => state.algoPost.dataDetail)
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

  useEffect(() => {
    const {id} = params
    // 에러 발생시 처리
    // 비공개 개시물 접근 블락
    // 존재하지 않는 게시물 알림
    dispatch(getAlgoPost(id))
  }, [params])

  async function handlePostLike() {
    if (!isLoggedIn) {
      const returnTo = location.pathname
      return history.push(`/login?returnTo=${returnTo}`)
    }

    console.log(123)

    if (postDetail.like) {
    } else {
    }
  }

  return (
    <Layout>
      <ReadPresenter postDetail={postDetail} handlePostLike={handlePostLike} />
    </Layout>
  )
}

export default ReadContainer
