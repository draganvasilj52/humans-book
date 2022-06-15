import { db } from '../../../../firebase/config'
import { collection, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import PostListItem from '../postsListItem/PostsListItem'

const PostList = () => {
  const [data, setData] = useState([])

  const fetchPosts = async () => {
    const res = await getDocs(collection(db, 'posts'))
    setData(res.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <div className="space-y-5 bg-customBg-100">
      {data.map((item) => (
        <PostListItem item={item} key={item.id} />
      ))}
    </div>
  )
}

export default PostList
