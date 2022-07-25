import PostList from '../../../components/PostsList/PostList'
import PostCreate from './../../../components/PostCreate/PostCreate'
import { useEffect, useState } from 'react'
import { onSnapshot, collection } from 'firebase/firestore'
import { db } from './../../../firebase/config'
import { useSelector } from 'react-redux'
import { useCallback } from 'react'
const ContentProfileMF = () => {
  const [data, setData] = useState([])

  const user = useSelector((state) => state.data.user)

  const fetchPosts = useCallback(() => {
    onSnapshot(collection(db, 'blogs'), (snapshot) => {
      let data = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      setData(data.filter((item) => item.userId === user.id))
    })
  }, [user.id])

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])
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
