import MenuIcon from '@mui/icons-material/Menu'
import ChatIcon from '@mui/icons-material/Chat'
import NotificationsIcon from '@mui/icons-material/Notifications'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'

const RightHeader = () => {
  return (
    <div className="flex items-center justify-center space-x-2">
      <div
        className="w-10 h-10 bg-secondaryButton-100 flex items-center justify-center"
        style={{ borderRadius: 50 }}
      >
        <MenuIcon sx={{ fontSize: 20 }} />
      </div>
      <div
        className="w-10 h-10 bg-secondaryButton-100 flex items-center justify-center"
        style={{ borderRadius: 50 }}
      >
        <ChatIcon sx={{ fontSize: 20 }} />
      </div>
      <div
        className="w-10 h-10 bg-secondaryButton-100 flex items-center justify-center"
        style={{ borderRadius: 50 }}
      >
        <NotificationsIcon sx={{ fontSize: 20 }} />
      </div>
      <div
        className="w-10 h-10 bg-secondaryButton-100 flex items-center justify-center"
        style={{ borderRadius: 50 }}
      >
        <ArrowDropDownIcon sx={{ fontSize: 20 }} />
      </div>
    </div>
  )
}

export default RightHeader
