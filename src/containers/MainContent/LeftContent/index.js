import PeopleIcon from '@mui/icons-material/People'
import GroupsIcon from '@mui/icons-material/Groups'
import LiveTvIcon from '@mui/icons-material/LiveTv'

const LeftContent = () => {
  return (
    <div className="flex flex-col space-y-1 ">
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
