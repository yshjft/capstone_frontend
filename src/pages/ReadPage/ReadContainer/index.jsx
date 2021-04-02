import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {getAlgoPost} from '../../../actions/algoPost'
import Layout from '../../../components/common/Layout/Layout'
import ReadPresenter from '../../../presenters/Post/ReadPresenter'

const ReadContainer = (props) => {
  const params = useParams()
  const dispatch = useDispatch()
  const postDetail = useSelector((state) => state.algoPost.dataDetail)

  useEffect(() => {
    const {id} = params
    // 에러 발생시 처리
    // 비공개 개시물 접근 블락
    // 존재하지 않는 게시물 알림
    dispatch(getAlgoPost(id))
  }, [params])

  return (
    <>
      <Layout>
        <ReadPresenter postDetail={postDetail} />
      </Layout>
    </>
  )
}

export default ReadContainer
