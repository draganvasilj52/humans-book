
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
=======
import MenuIcon from "@mui/icons-material/Menu";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useState } from "react";
import { signOutUser } from "./../../../services/AuthService";
import { logOutUser } from "../../../features/dataSlice";
import { useDispatch } from "react-redux/es/exports";

const iconArray = [
  {
    name: "menu",
    icon: <MenuIcon sx={{ fontSize: 20 }} />,
    tooltipText: "Menu",
  },
  {
    name: "messenger",
    icon: <ChatIcon sx={{ fontSize: 20 }} />,
    tooltipText: "Messenger",
  },
  {
    name: "notifications",
    icon: <NotificationsIcon sx={{ fontSize: 20 }} />,
    tooltipText: "Notifications",
  },
  {
    name: "yourProfile",
    icon: <ArrowDropDownIcon sx={{ fontSize: 20 }} />,
    tooltipText: "Your Profile",
  },
];

const RightHeaderItem = ({ item, index, setClickedItem }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="flex flex-col justify-center items-center">
      <div
        onClick={() => {setHovered(false) ; setClickedItem(prevState => prevState === item.name ? '' : item.name)}}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="w-10 h-10 bg-secondaryButton-100 hover:bg-gray-300 flex items-center justify-center cursor-pointer "
        style={{ borderRadius: 50 }}
      >
        {item.icon}
      </div>
      {hovered && (
        <div className="bg-black rounded absolute top-14 z-10">
          <p className="text-white p-2 text-xs text-center">
            {item.tooltipText}
          </p>
        </div>
      )}
      
    </div>
  );
};

const RightHeader = () => {
  const [clickedItem, setClickedItem] = useState("");
  console.log(clickedItem)
  /* const [hoveredIcon, setHoveredIcon] = useState('')
  const [clickedIcon, setClickedIcon] = useState('')

  const dispatch = useDispatch()

  const handleClick = async () => {
    await signOutUser()
    dispatch(logOutUser())
  } */
  return (
    <div className="flex items-center justify-center space-x-2">
      {iconArray.map((item, index) => (
        <RightHeaderItem
          setClickedItem={setClickedItem}
         
          item={item}
          key={index}
        />
      ))}
      {clickedItem && (
        <div
        
        style={{ width: "30%" }}
        className="bg-white rounded absolute right-4 top-14 z-1 p-3"
      >
     {clickedItem}
      </div>
      )}
    </div>
  );

  /* return (
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
  ) */
};

export default RightHeader;
