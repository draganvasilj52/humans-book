import PeopleIcon from '@mui/icons-material/People'
import GroupsIcon from '@mui/icons-material/Groups'
import LiveTvIcon from '@mui/icons-material/LiveTv'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
  onSnapshot,
  collection,
  orderBy,
  query,
  doc,
  where,
} from 'firebase/firestore'
import { db } from '../../../firebase/config'
import { useEffect } from 'react'
import { useState, useCallback } from 'react'
import FriendsList from '../../../components/FriendsList'

const LeftContentMF = () => {
  const navigate = useNavigate()
  const user = useSelector((state) => state.data.user)

  const [friends, setFriends] = useState([])

  const fetch = useCallback(async () => {
    let friends = []
    user.friendsArray?.forEach((item) => {
      onSnapshot(doc(db, 'users', item), (doc) => {
        let data = doc.data()

        friends.push(data)
        setFriends(friends)
      })
    })
  }, [user.friendsArray])

  useEffect(() => {
    fetch()
  }, [fetch])

  /*   useEffect(() => {
    const collectionRef = collection(db, 'users')

    const q = query(
      collectionRef,

      where('id', '==', ...user.friendsArray)
    )

    onSnapshot(q, (snap) => {
      let friends = []
      snap.docs.forEach((doc) => {
        friends.push({
          ...doc.data(),
          id: doc.id,
          timestamp: doc.data().timestamp?.toDate().getTime(),
        })
      })
      //  friends = friends.filter((x) => x.id !== user.id)
      setFriends(friends)
    })
  }, [user.friendsArray])
  console.log(friends) */

  return (
    <div className=" flex flex-col space-y-1 pl-2">
      <div
        onClick={() => navigate(`/${user.displayName}`)}
        className="flex items-center p-2 w-full cursor-pointer hover:bg-zinc-200 hover:rounded"
      >
        <div
          className="h-9 w-9 bg-cover"
          style={{
            backgroundImage: `url(${user.photoURL})`,
            borderRadius: '50%',
          }}
        />

        <p className="text-base pl-3">{user.displayName}</p>
      </div>
      <div className="flex items-center w-full cursor-pointer hover:bg-zinc-200 p-2 hover:rounded">
        <PeopleIcon sx={{ fontSize: 36 }} />
        <p className="text-base pl-3">Friends</p>
      </div>
      <div className="flex items-center w-full cursor-pointer hover:bg-zinc-200 p-2 hover:rounded">
        <GroupsIcon sx={{ fontSize: 36 }} />
        <p className="text-base pl-3">Groups</p>
      </div>
      <div className="flex items-center w-full cursor-pointer hover:bg-zinc-200 p-2 hover:rounded">
        <LiveTvIcon sx={{ fontSize: 36 }} />
        <p className="text-base pl-3">Watch</p>
      </div>
      <FriendsList friends={friends} />
    </div>
  )
}

export default LeftContentMF
