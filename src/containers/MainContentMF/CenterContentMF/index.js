import PostList from '../../../components/PostsList/PostList'
import PostCreate from '../../../components/PostCreate/PostCreate'
import { useState, useEffect } from 'react'
import { getDocs, collection } from 'firebase/firestore'
import { db } from './../../../firebase/config'
import { useCallback } from 'react'

const CenterContentMF = () => {
  const [data, setData] = useState([])
  const fetchPosts = useCallback(async () => {
    const res = await getDocs(collection(db, 'blogs'))
    setData(res.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  }, [])
  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])
  return (
    <div className="signInBreakpoint900:grid signInBreakpoint900:col-span-2 space-y-4 max-w-2xl mx-auto signInBreakpoint900:w-full headerBreakpoint1100:col-span-2">
      <PostCreate />
      <PostList data={data} />
    </div>
  )
}

export default CenterContentMF
