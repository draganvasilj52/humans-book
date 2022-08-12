import { authentication } from '../firebase/config'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import { db } from '../firebase/config'
import { arrayUnion, doc, updateDoc, getDoc } from 'firebase/firestore'

export const loginUser = async (email, password) =>
  await signInWithEmailAndPassword(authentication, email, password)

export const signupUser = async (email, password) =>
  await createUserWithEmailAndPassword(authentication, email, password)

export const signOutUser = async () => await signOut(authentication)

export const updateUserInReduxStore = async () => {
  const uid = authentication.currentUser.uid

  const docRef = doc(db, 'users', `${uid}`)
  const docSnap = await getDoc(docRef)

  return { id: docSnap.id, ...docSnap.data() }
}

export const addFriend = async (id) => {
  const uid = authentication.currentUser.uid

  await updateDoc(doc(db, 'users', uid), {
    friendsArray: arrayUnion(id),
  })
}
