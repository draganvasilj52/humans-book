import MenuIcon from '@mui/icons-material/Menu'
import ChatIcon from '@mui/icons-material/Chat'
import NotificationsIcon from '@mui/icons-material/Notifications'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { useState } from 'react'
import { signOutUser } from './../../../services/AuthService'
import { logOutUser } from '../../../features/dataSlice'
import { useDispatch } from 'react-redux/es/exports'

const RightHeader = () => {
  const [hoveredIcon, setHoveredIcon] = useState('')
  const [clickedIcon, setClickedIcon] = useState('')

  const dispatch = useDispatch()

  const handleClick = async () => {
    await signOutUser()
    dispatch(logOutUser())
  }

  return (
    <div className="flex items-center justify-center space-x-2">
      <div
        onClick={() => setClickedIcon('menu')}
        onMouseEnter={() => setHoveredIcon('menu')}
        onMouseLeave={() => setHoveredIcon('')}
        className="w-10 h-10 bg-secondaryButton-100 hover:bg-gray-300 flex items-center justify-center cursor-pointer "
        style={{ borderRadius: 50 }}
      >
        <MenuIcon sx={{ fontSize: 20 }} />
        {hoveredIcon === 'menu' && (
          <div className="bg-black rounded absolute top-14">
            <p className="text-white p-2 text-xs">Menu</p>
          </div>
        )}
      </div>
      <div
        onClick={() => setClickedIcon('messenger')}
        onMouseEnter={() => setHoveredIcon('messenger')}
        onMouseLeave={() => setHoveredIcon('')}
        className="w-10 h-10 bg-secondaryButton-100 hover:bg-gray-300 flex items-center justify-center cursor-pointer"
        style={{ borderRadius: 50 }}
      >
        <ChatIcon sx={{ fontSize: 20 }} />
        {hoveredIcon === 'messenger' && (
          <div className="bg-black rounded absolute top-14">
            <p className="text-white p-2 text-xs">Messenger</p>
          </div>
        )}
      </div>
      <div
        onClick={() => setClickedIcon('notifications')}
        onMouseEnter={() => setHoveredIcon('notifications')}
        onMouseLeave={() => setHoveredIcon('')}
        className="w-10 h-10 bg-secondaryButton-100 hover:bg-gray-300 flex items-center justify-center cursor-pointer"
        style={{ borderRadius: 50 }}
      >
        <NotificationsIcon sx={{ fontSize: 20 }} />
        {hoveredIcon === 'notifications' && (
          <div className="bg-black rounded absolute top-14">
            <p className="text-white p-2 text-xs">Notifications</p>
          </div>
        )}
      </div>
      <div
        onClick={() =>
          hoveredIcon === 'yourProfile' && clickedIcon !== 'yourProfile'
            ? setClickedIcon('yourProfile')
            : hoveredIcon === 'yourProfile' &&
              clickedIcon === 'yourProfile' &&
              setClickedIcon('')
        }
        onMouseEnter={() => setHoveredIcon('yourProfile')}
        onMouseLeave={() => setHoveredIcon('')}
        className="w-10 h-10 bg-secondaryButton-100 hover:bg-gray-300 flex items-center justify-center cursor-pointer"
        style={{ borderRadius: 50 }}
      >
        <ArrowDropDownIcon sx={{ fontSize: 20 }} />
        {clickedIcon === 'yourProfile' && (
          <div
            style={{ width: '30%' }}
            className="bg-white rounded absolute right-4 top-14 z-10 p-3"
          >
            <p
              onClick={handleClick}
              className="text-black p-2 text-base font-medium hover:bg-customBg-100 hover:rounded"
            >
              Sign Out
            </p>
          </div>
        )}
        {hoveredIcon === 'yourProfile' && clickedIcon !== 'yourProfile' && (
          <div className="bg-black rounded absolute right-4 top-14">
            <p className="text-white p-2 text-xs">Your Profile</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default RightHeader
