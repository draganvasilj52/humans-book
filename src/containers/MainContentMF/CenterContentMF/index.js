import PostList from '../../../components/PostsList/PostList'
import PostCreate from '../../../components/PostCreate/PostCreate'
import { useState, useEffect } from 'react'
import { onSnapshot, collection, orderBy, query } from 'firebase/firestore'
import { db } from './../../../firebase/config'

const CenterContentMF = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const collectionRef = collection(db, 'posts')
    const q = query(collectionRef, orderBy('timestamp', 'desc'))
    const unsubscribe = onSnapshot(q, (snap) => {
      setData(
        snap.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
          timestamp: doc.data().timestamp?.toDate().getTime(),
        }))
      )
    })
    return unsubscribe
  }, [])

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
