import PostList from '../../../components/PostsList/PostList'
import PostCreate from './../../../components/PostCreate/PostCreate'
import { useEffect, useState } from 'react'
import { onSnapshot, collection, query, orderBy } from 'firebase/firestore'
import { db } from './../../../firebase/config'
import { useSelector } from 'react-redux'

const ContentProfileMF = () => {
  const [data, setData] = useState([])

  const user = useSelector((state) => state.data.user)

  useEffect(() => {
    const collectionRef = collection(db, 'posts')
    const q = query(collectionRef, orderBy('timestamp', 'desc'))
    const unsubscribe = onSnapshot(q, (snap) => {
      let data = snap.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
        timestamp: doc.data().timestamp?.toDate().getTime(),
      }))

      const posts = data.filter((item) => item.userId === user.id)
      setData(posts)
    })
    return unsubscribe
  }, [user.id])

  return (
    <div className="bg-customBg-100 ">
      <div className="flex flex-col space-y-3 mx-auto max-w-2xl  mt-4">
        <PostCreate />
        <PostList data={data} />
      </div>
    </div>
  )
}

export default ContentProfileMF
