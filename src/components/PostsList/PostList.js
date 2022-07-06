import { db } from '../../firebase/config'
import { collection, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import PostsListItem from '../PostsListItem/PostsListItem'
import { doc, onSnapshot } from 'firebase/firestore'

const PostList = () => {
  const [data, setData] = useState([])

  /*  const fetchPosts = async () => {
    const res = await getDocs(collection(db, 'blogs'))
    setData(res.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  }
  console.log(data) */
  const fetchPosts = onSnapshot(collection(db, 'blogs'), (snapshot) => {
    setData(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  })

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <div className="space-y-4">
      {data.map((item) => (
        <PostsListItem item={item} key={item.id} />
      ))}
    </div>
  )
}

export default PostList
