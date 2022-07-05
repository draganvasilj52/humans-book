import MenuIcon from '@mui/icons-material/Menu'
import ChatIcon from '@mui/icons-material/Chat'
import NotificationsIcon from '@mui/icons-material/Notifications'
import { useState } from 'react'
import MenuDropdown from './DropdownContainer/MenuDropdown'
import ProfileDropdown from './DropdownContainer/ProfileDropdown'
import NotificationsDropdown from './DropdownContainer/NotificationsDropdown'
import MessengerDropdown from './DropdownContainer/MessengerDropdown'
import { useSelector } from 'react-redux'

const RightHeaderItem = ({ item, setClicked }) => {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onClick={() => {
        setClicked((prevState) =>
          prevState === item.name ? setClicked('') : setClicked(item.name)
        )
        setHovered(false)
      }}
      onMouseEnter={() => setHovered(item.name)}
      onMouseLeave={() => setHovered('')}
      style={{ borderRadius: 50 }}
      className="w-10 h-10 bg-secondaryButton-100 hover:bg-gray-300 flex items-center justify-center cursor-pointer "
    >
      {item.element}
      {hovered && (
        <div
          className={`bg-black rounded absolute top-14 z-20 ${
            hovered === 'yourProfile' ? 'right-4' : ''
          } `}
        >
          <p className="text-white p-2 text-xs">{item.displayContent}</p>
        </div>
      )}
    </div>
  )
}

const RightHeader = () => {
  const user = useSelector((state) => state.data.user)
  const iconsArray = [
    {
      name: 'menu',
      element: <MenuIcon sx={{ fontSize: 20 }} />,
      displayContent: 'Menu',
      dropdownElement: <MenuDropdown />,
    },
    {
      name: 'messenger',
      element: <ChatIcon sx={{ fontSize: 20 }} />,
      displayContent: 'Messenger',
      dropdownElement: <MessengerDropdown />,
    },
    {
      name: 'notifications',
      element: <NotificationsIcon sx={{ fontSize: 20 }} />,
      displayContent: 'Notifications',
      dropdownElement: <NotificationsDropdown />,
    },
    {
      name: 'yourProfile',
      element: (
        <div
          className="h-10 w-10 bg-cover"
          style={{
            backgroundImage: `url(${user.photoURL})`,
            borderRadius: '50%',
          }}
        />
      ),
      displayContent: 'Your Profile',
      dropdownElement: <ProfileDropdown />,
    },
  ]
  const [clicked, setClicked] = useState('')

  return (
    <div className="flex items-center justify-center space-x-2">
      {iconsArray.map((item, index) => (
        <div key={index}>
          <RightHeaderItem setClicked={setClicked} item={item} />
          {clicked === item.name && item.dropdownElement}
        </div>
      ))}
    </div>
  )
}

export default RightHeader
