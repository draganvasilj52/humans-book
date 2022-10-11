import GroupIcon from '@mui/icons-material/Group'
import GroupsIcon from '@mui/icons-material/Groups'
import LiveTvIcon from '@mui/icons-material/LiveTv'
import CreateIcon from '@mui/icons-material/Create'
import MenuBookIcon from '@mui/icons-material/MenuBook'

const MenuDropdown = () => {
  return (
    <div
      style={{ width: '50%' }}
      className="rounded absolute right-4 top-14 z-10 bg-customBg-100 flex flex-col"
    >
      <p className="text-2xl font-bold p-4">Menu</p>
      <div className="flex space-x-5 px-4 pb-4">
        <div className=" w-3/5 p-2 bg-white rounded ">
          <p className="text-base font-medium text-gray-700 pb-2 px-2">
            Social
          </p>
          <div className="flex hover:bg-customBg-100 cursor-pointer hover:rounded px-2">
            <GroupIcon className="my-2.5 mr-3" sx={{ fontSize: 36 }} />
            <div className="flex flex-col py-3">
              <p className="text-sm text-gray-700 font-medium">Friends</p>
              <p className="text-xs text-gray-500">
                Search for friends or people you may know.
              </p>
            </div>
          </div>
          <div className="flex hover:bg-customBg-100 cursor-pointer hover:rounded px-2">
            <GroupsIcon className="my-2.5 mr-3" sx={{ fontSize: 36 }} />
            <div className="flex flex-col py-3 ">
              <p className="text-sm text-gray-700 font-medium">Groups</p>
              <p className="text-xs text-gray-500">
                Connect with people who shares your interests.
              </p>
            </div>
          </div>
          <hr className="mt-5 mx-3 border-gray-300" />
          <p className="text-base font-medium text-gray-700 pb-2 px-2 pt-3">
            Entertainment
          </p>
          <div className="flex px-2 hover:bg-customBg-100 cursor-pointer hover:rounded">
            <LiveTvIcon className="my-2.5 mr-3" sx={{ fontSize: 36 }} />
            <div className="flex flex-col py-3">
              <p className="text-sm text-gray-700 font-medium">Watch</p>
              <p className="text-xs text-gray-500">
                A video destination personalized for your interests and
                contacts.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white w-2/5 rounded px-2 h-fit pt-1 pb-2">
          <p className="text-xl font-bold p-2">Create</p>
          <div className="hover:rounded flex items-center cursor-pointer space-x-3  px-2 hover:bg-customBg-100">
            <div
              className="w-9 h-9 flex items-center justify-center bg-secondaryButton-100"
              style={{ borderRadius: 50 }}
            >
              <CreateIcon sx={{ fontSize: 20 }} />
            </div>
            <p className="text-sm py-3">Post</p>
          </div>
          <div className="hover:rounded flex items-center cursor-pointer space-x-3  px-2 hover:bg-customBg-100">
            <div
              className="w-9 h-9 flex items-center justify-center bg-secondaryButton-100"
              style={{ borderRadius: 50 }}
            >
              <MenuBookIcon sx={{ fontSize: 20 }} />
            </div>
            <p className="text-sm py-3">Story</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuDropdown
