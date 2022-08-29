import { doc, onSnapshot } from 'firebase/firestore'
import { db } from '../../firebase/config'
import { useEffect } from 'react'
import { useState } from 'react'
import PendingRequestFriendItem from '../PendingRequestFriendItem'

const RenderPendingFriendRequests = ({ item }) => {
  const [pendingUser, setPendingUser] = useState({})
  console.log(pendingUser)
  useEffect(() => {
    const unsub = onSnapshot(doc(db, 'users', item), (doc) => {
      setPendingUser({
        ...doc.data(),
        id: doc.id,
        timestamp: doc.data().timestamp?.toDate().getTime(),
      })
    })
    return unsub
  }, [item])
  return <PendingRequestFriendItem pendingUser={pendingUser} item={item} />
}

export default RenderPendingFriendRequests
