import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : null,
}

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    logUser(state, action) {
      state.user = action.payload
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
