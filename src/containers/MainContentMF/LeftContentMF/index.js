import PeopleIcon from '@mui/icons-material/People'
import GroupsIcon from '@mui/icons-material/Groups'
import LiveTvIcon from '@mui/icons-material/LiveTv'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
  collection,
  query,
  where,
  onSnapshot,
  collectionGroup,
  getDocs,
} from 'firebase/firestore'
import { db } from '../../../firebase/config'
import { useEffect } from 'react'

const LeftContentMF = () => {
  const navigate = useNavigate()
  const user = useSelector((state) => state.data.user)

  const friendsArray = useSelector((state) => state.data.user.friendsArray)

  const fetch = async () => {
    const q = query(
      collectionGroup(db, 'users'),
      where('friendsArray', '==', 'ghgf')
    )

    const snap = await getDocs(q)

    snap.forEach((doc) => {
      console.log(doc.data())
    })
  }
  useEffect(() => {
    fetch()
  }, [fetch])

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
        {/*   {friends.map((item, index) => (
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
            <p className="text-base	py-3.5">{item.displayName}</p>
          </div>
        ))} */}
      </div>
    </div>
  )
}

export default LeftContentMF
