import PeopleIcon from '@mui/icons-material/People'
import GroupsIcon from '@mui/icons-material/Groups'
import LiveTvIcon from '@mui/icons-material/LiveTv'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { onSnapshot, doc } from 'firebase/firestore'
import { db } from '../../../firebase/config'
import { useEffect } from 'react'
import { useState, useCallback } from 'react'

const LeftContentMF = () => {
  const navigate = useNavigate()
  const user = useSelector((state) => state.data.user)

  const friendsArray = useSelector((state) => state.data.user.friendsArray)

  const [friends, setFriends] = useState([])

  const fetch = useCallback(async () => {
    /* const q = query(
      collection(db, 'users'),
      where('id', '==', 'aS1hgZZuQxgoK8vHCJ9GAgrGKrE3')
    )

    const snap = await getDocs(q)

    snap.forEach((doc) => {
      console.log(doc.data())
    }) */
    let friends = []
    friendsArray.forEach((item) => {
      onSnapshot(doc(db, 'users', item), (doc) => {
        let data = doc.data()
        friends.push(data)
        setFriends(friends)
      })
    })

    /*   const q = query(collection(db, 'users'), where('id', '==', item))
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const cities = []
        querySnapshot.forEach((doc) => {
          cities.push(doc.data())
        })
        console.log('Current cities in CA: ', cities.join(', '))
      })
    }) */
  }, [friendsArray])

  useEffect(() => {
    fetch()
  }, [fetch, friendsArray])

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
      <div className="flex flex-col pb-3">
        <p className="text-base	font-semibold	py-3 px-2">FRIENDS</p>
        {friends.map((item, index) => (
          <div
            key={index}
            className="px-2 space-x-3 flex items-center hover:bg-zinc-200 hover:rounded relative group cursor-pointer "
          >
            <div
              className="h-9 w-9 bg-cover"
              style={{
                backgroundImage: `url(${item.photoURL})`,
                borderRadius: '50%',
              }}
            />
            <p className="text-base	py-3.5">
              {item.firstName} {item.lastName}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LeftContentMF
