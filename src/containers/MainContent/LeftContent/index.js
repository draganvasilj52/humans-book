import PeopleIcon from '@mui/icons-material/People'
import GroupsIcon from '@mui/icons-material/Groups'
import LiveTvIcon from '@mui/icons-material/LiveTv'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const LeftContent = () => {
  const navigate = useNavigate()
  const user = useSelector((state) => state.data.user)
  return (
    <div className="flex flex-col space-y-1 ">
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
    </div>
  )
}

export default LeftContent
