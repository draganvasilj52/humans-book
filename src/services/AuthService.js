import { authentication } from '../firebase/config'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import { db } from '../firebase/config'
import {
  arrayUnion,
  arrayRemove,
  doc,
  updateDoc,
  getDoc,
  increment,
} from 'firebase/firestore'

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

  await updateDoc(doc(db, 'users', id), {
    friendsArray: arrayUnion(uid),
  })
}

export const addComment = async (data, docRef) => {
  await updateDoc(doc(db, 'posts', docRef), {
    comments: arrayUnion(data),
  })
}

export const likePost = async (docRef) => {
  const uid = authentication.currentUser.uid

  await updateDoc(doc(db, 'posts', docRef), {
    likes: increment(1),
  })
  await updateDoc(doc(db, 'posts', docRef), {
    peopleWhoLiked: arrayUnion(uid),
  })
}

export const unlikePost = async (docRef) => {
  const uid = authentication.currentUser.uid

  await updateDoc(doc(db, 'posts', docRef), {
    likes: increment(-1),
  })
  await updateDoc(doc(db, 'posts', docRef), {
    peopleWhoLiked: arrayRemove(uid),
  })
}

export const addConversations = async (id, userWhoCreatedComment) => {
  const uid = authentication.currentUser.uid

  await updateDoc(doc(db, 'users', uid), {
    conversations: arrayUnion(userWhoCreatedComment),
  })

  await updateDoc(doc(db, 'users', id), {
    conversations: arrayUnion(userWhoCreatedComment),
  })
}
