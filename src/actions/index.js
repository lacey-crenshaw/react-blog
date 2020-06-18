import jsonplaceholder from '../services/jsonplaceholder'

export const fetchPosts = () => {
  return async (dispatch, getState) => {
    let { data } = await jsonplaceholder.get('/posts')
    dispatch({
      type: 'FETCH_POSTS',
      payload: data //array of post
    })
  }
}

export const fetchUsers = () => {
  return async (dispatch, getState) => {
    let { data } = await jsonplaceholder.get('/users')
    dispatch({
      type: 'SET_USERS',
      payload: data
    })
  }
}