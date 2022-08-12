import { useEffect, useState } from 'react'
import { onSnapshot, collection } from 'firebase/firestore'
import { db } from '../../firebase/config'
import { useCallback } from 'react'
import UsersListItem from '../UsersListItem'

const UsersList = () => {
  const [data, setData] = useState([])

  const fetchPosts = useCallback(() => {
    onSnapshot(collection(db, 'users'), (snapshot) => {
      let data = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      setData(data)
    })
  }, [])

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  return (
    <div className="flex flex-col">
      <p className="text-base	font-semibold	pb-3 px-2	text-center">ALL USERS</p>
      {data.map((item, index) => (
        <UsersListItem item={item} key={index} />
      ))}
    </div>
  )
}

export default UsersList
