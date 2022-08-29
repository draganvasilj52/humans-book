import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { authentication } from '../firebase/config'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import { db } from '../firebase/config'
import { doc, setDoc, getDoc, updateDoc } from 'firebase/firestore'

const initialState = {
  user: localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : null,
  messengerArray: [],
  error: null,
}

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    updateLatestDataToLoggedUser(state, action) {
      state.user = action.payload
      localStorage.setItem('user', JSON.stringify(action.payload))
    },
    resetError(state, action) {
      state.error = null
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

  extraReducers(builder) {
    builder
      .addCase(createUser.fulfilled, (state, action) => {
        state.user = action.payload
        localStorage.setItem('user', JSON.stringify(action.payload))
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.user = action.payload
        localStorage.setItem('user', JSON.stringify(action.payload))
      })
      .addCase(logOut.fulfilled, (state) => {
        state.user = null
        localStorage.removeItem('user')
      })
      .addCase(loginUser.rejected, (state) => {
        state.error = 'Invalid Credentials'
      })
      .addCase(createUser.rejected, (state) => {
        state.error = 'User Already Exists'
      })
  },
})

export const createUser = createAsyncThunk(
  'user/createUser',
  async (data, thunkAPI) => {
    let resp = await createUserWithEmailAndPassword(
      authentication,
      data.enterEmail,
      data.enterPassword
    )

    const uid = authentication.currentUser.uid

    const user = {
      id: uid,
      firstName: data.enterFirstName,
      lastName: data.enterLastName,
      email: resp.user.email,
      displayName: data.enterFirstName,
      posts: [],
      conversations: [],
      friendsArray: [],
      pendingFriendsArray: [],
      coverPhoto: '',
      photoURL:
        'https://images.unsplash.com/photo-1633675254053-d96c7668c3b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
    }

    await setDoc(doc(db, 'users', `${uid}`), user)

    return { ...user }
  }
)

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (data, thunkAPI) => {
    await signInWithEmailAndPassword(
      authentication,
      data.enterEmail,
      data.enterPassword
    )

    thunkAPI.dispatch(getUser())
  }
)

export const getUser = createAsyncThunk('user/getUser', async (_, thunkAPI) => {
  let userData

  const uid = authentication.currentUser.uid

  const docRef = doc(db, 'users', uid)
  const docSnap = await getDoc(docRef)

  userData = { id: uid, ...docSnap.data() }

  return { ...userData }
})

export const setUserData = createAsyncThunk(
  'user/setUserData',
  async (enterName, thunkAPI) => {
    const uid = authentication.currentUser.uid

    await updateDoc(doc(db, 'users', uid), {
      name: enterName,
    })

    thunkAPI.dispatch(getUser())
  }
)

export const logOut = createAsyncThunk('user/logOutUser', async () => {
  await signOut(authentication)
})

export const {
  addPeopleToMessengerArray,
  removePeopleFromMessengerArray,
  changeIndexInMessengerArray,
  updateLatestDataToLoggedUser,
  resetError,
} = dataSlice.actions

export default dataSlice.reducer
