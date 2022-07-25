import { createSlice } from '@reduxjs/toolkit'
import post1 from '../assets/post1.jpg'
import post2 from '../assets/post2.jpeg'

const initialState = {
  user: localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : null,
  posts: [
    {
      title: 'Newcastle United',
      time: '1h',
      description:
        "Newcastle United's 2022/23 third kit is now available to order!",
      image: post1,
    },
    {
      title: '24sata',
      time: '1h',
      description: 'Osvijestite se na vrijeme ',
      image: post2,
    },
  ],
}

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    logUser(state, action) {
      let userData = action.payload
      let loggedUser = {
        email: userData.email,
        photoURL: userData.photoURL,
        id: userData.id,
        displayName: userData.displayName,
        posts: userData.posts,
      }
      state.user = loggedUser
      localStorage.setItem('user', JSON.stringify(state.user))
    },
    logOutUser(state) {
      state.user = null
      window.localStorage.removeItem('user')
    },
  },
})

export const { logUser, logOutUser } = dataSlice.actions

export default dataSlice.reducer
