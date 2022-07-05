import { authentication } from '../firebase/config'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'

export const loginUser = async (email, password) =>
  await signInWithEmailAndPassword(authentication, email, password)

export const signupUser = async (email, password) =>
  await createUserWithEmailAndPassword(authentication, email, password)

export const signOutUser = async () => await signOut(authentication)

export const getUser = onAuthStateChanged(authentication, (user) =>
  console.log(user)
)
