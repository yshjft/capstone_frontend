import {GET_USER_INFO, GET_USER_INFO_SUCCESS, GET_USER_INFO_ERROR, GET_USER_INFO_FINISH} from '../actions/uesr'

const initialState = {
  isLoading: false,
  userInfo: {
    id: 0,
    nickName: '',
    email: '',
    followNum: 0,
    totalLike: 0,
    createdAt: '',
    lastPostCreatedAt: ''
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
      return {...state, isLoading: true}
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
      return {...state, isLoading: false}
    default:
      return state
  }
}
