import {
  GET_USER_INFO,
  GET_USER_POST_LOG,
  GET_USER_TAB_POST,
  GET_USER_INFO_SUCCESS,
  GET_USER_INFO_ERROR,
  GET_USER_INFO_FINISH,
  GET_USER_POST_LOG_FINISH,
  GET_USER_TAB_POST_FINISH,
  POST_USER_FOLLOW,
  DELETE_USER_FOLLOW
} from '../actions/uesr'

const initialState = {
  isUserInfoLoading: true,
  isPostLogLoading: true,
  isTabPostLoading: true,
  userInfo: {
    id: 0,
    nickName: '',
    email: '',
    followNum: 0,
    totalLike: 0,
    createdAt: '',
    lastPostCreatedAt: '',
    follow: false
  },
  postLog: [],
  posts: [],
  likePosts: [],
  followingUsers: [],
  total: 0
}

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER_INFO:
      return {...state, isUserInfoLoading: true}
    case GET_USER_POST_LOG:
      return {...state, isPostLogLoading: true}
    case GET_USER_TAB_POST:
      return {...state, isTabPostLoading: true}
    case GET_USER_INFO_SUCCESS:
      const {userInfo, postLog, posts, likePosts, followingUsers, total} = action.payload
      return {...state, userInfo, postLog, posts, likePosts, followingUsers, total}
    case GET_USER_INFO_ERROR:
      return {
        ...state,
        userInfo: {
          id: 0,
          nickName: '',
          email: '',
          followNum: 0,
          totalLike: 0,
          createdAt: '',
          lastPostCreatedAt: ''
        },
        userPostLog: [],
        posts: [],
        likePosts: [],
        followingUsers: [],
        total: 0
      }
    case GET_USER_INFO_FINISH:
      return {...state, isUserInfoLoading: false}
    case GET_USER_POST_LOG_FINISH:
      return {...state, isPostLogLoading: false}
    case GET_USER_TAB_POST_FINISH:
      return {...state, isTabPostLoading: false}
    case POST_USER_FOLLOW:
    case DELETE_USER_FOLLOW:
      const {followNum, follow} = action.payload
      const cpyUserInfo = {...state.userInfo, followNum, follow}
      state.userInfo = cpyUserInfo
      return state
    default:
      return state
  }
}
