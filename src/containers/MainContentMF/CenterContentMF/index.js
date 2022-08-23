import PostList from '../../../components/PostsList/PostList'
import PostCreate from '../../../components/PostCreate/PostCreate'
import { useState, useEffect } from 'react'
import { onSnapshot, collection, orderBy, query } from 'firebase/firestore'
import { db } from './../../../firebase/config'
import { useSelector } from 'react-redux'

const CenterContentMF = () => {
  const [data, setData] = useState([])
  const user = useSelector((state) => state.data.user)

  useEffect(() => {
    const collectionRef = collection(db, 'posts')
    const q = query(collectionRef, orderBy('timestamp', 'desc'))
    const unsubscribe = onSnapshot(q, (snap) => {
      let posts = snap.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
        timestamp: doc.data().timestamp?.toDate().getTime(),
      }))

      const myPosts = posts.filter((item) => item.userId === user.id)
      setData(myPosts)

      user?.friendsArray.forEach((x) => {
        const b = posts.filter((item) => item.userId === x)
        setData((prev) => [...prev, ...b])
      })
    })
    return unsubscribe
  }, [user.friendsArray, user.id])

  /*   let users = user.friendsArray
  let all = [...users, user.id]

  useEffect(() => {
    const collectionRef = collection(db, 'posts')

    const q = query(
      collectionRef,
      orderBy('timestamp', 'desc'),
      where('userId', '==', all)
    )

    onSnapshot(q, (snap) => {
      let friends = []
      snap.docs.forEach((doc) => {
        friends.push({
          ...doc.data(),
          id: doc.id,
          timestamp: doc.data().timestamp?.toDate().getTime(),
        })
      })

      console.log(friends)
    })
  }, [user.friendsArray, all]) */

  return (
    <div className="signInBreakpoint900:grid space-y-4 signInBreakpoint900:row-span-1	 signInBreakpoint900:col-span-2 max-w-2xl mx-auto signInBreakpoint900:w-full headerBreakpoint1100:col-span-2">
      <div className="flex flex-col space-y-4">
        <PostCreate />
        <PostList data={data} />
      </div>
    </div>
  )
}

export default CenterContentMF
