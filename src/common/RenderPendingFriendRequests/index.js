import { doc, onSnapshot } from 'firebase/firestore'
import { db } from '../../firebase/config'
import { useEffect } from 'react'
import { useState } from 'react'
import PendingRequestFriendItem from '../PendingRequestFriendItem'

const RenderPendingFriendRequests = ({ sender }) => {
  const [sendingUser, setSendingUser] = useState({})
  console.log(sender)

  useEffect(() => {
    const unsub = onSnapshot(doc(db, 'users', sender.id), (doc) => {
      setSendingUser({
        ...doc.data(),
        id: doc.id,
        timestamp: doc.data().timestamp?.toDate().getTime(),
      })
    })
    return unsub
  }, [sender.id])
  console.log(sendingUser)

  return <PendingRequestFriendItem sendingUser={sendingUser} sender={sender} />
}

export default RenderPendingFriendRequests
