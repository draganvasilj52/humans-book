import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : null,
  messengerArray: [],
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
        coverPhoto: userData.coverPhoto,
      }
      state.user = loggedUser
      localStorage.setItem('user', JSON.stringify(state.user))
    },
    logOutUser(state) {
      state.user = null
      window.localStorage.removeItem('user')
    },
    addPeopleToMessengerArray(state, action) {
      let user = action.payload
      let newArray = [...state.messengerArray]

      let existingUser = newArray.find((x) => x.id === user.id)
      if (!existingUser) {
        newArray.push(user)
      }

      state.messengerArray = newArray
    },
    removePeopleFromMessengerArray(state, action) {
      let user = action.payload
      let newArray = [...state.messengerArray]

      newArray = newArray.filter((x) => x.id !== user.id)

      state.messengerArray = newArray
    },
    changeIndexInMessengerArray(state, action) {
      let newArray = [...state.messengerArray]

      let clickedElement = action.payload

      if (clickedElement < 1 || clickedElement >= newArray.length) {
        return
      }

      ;[newArray[clickedElement - 1], newArray[clickedElement]] = [
        newArray[clickedElement],
        newArray[clickedElement - 1],
      ]

      state.messengerArray = newArray
    },
  },
})

export const {
  logUser,
  logOutUser,
  addPeopleToMessengerArray,
  removePeopleFromMessengerArray,
  changeIndexInMessengerArray,
} = dataSlice.actions

export default dataSlice.reducer
