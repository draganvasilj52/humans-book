import { db } from '../../firebase/config'
import { collection, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import PostsListItem from '../PostsListItem/PostsListItem'

const PostList = () => {
  const [data, setData] = useState([])

  const fetchPosts = async () => {
    const res = await getDocs(collection(db, 'blogs'))
    setData(res.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  }
  console.log(data)

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
