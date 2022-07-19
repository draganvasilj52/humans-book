import MenuIcon from '@mui/icons-material/Menu'
import HomeIcon from '@mui/icons-material/Home'
import LiveTvIcon from '@mui/icons-material/LiveTv'
import GroupsIcon from '@mui/icons-material/Groups'
import GamesIcon from '@mui/icons-material/Games'
import PeopleIcon from '@mui/icons-material/People'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const elementArray = [
  {
    iconName: 'home',
    hoveredText: 'Home',
    elementIcon: <HomeIcon sx={{ fontSize: 28 }} />,
    route: '/',
  },
  {
    iconName: 'friends',
    hoveredText: 'Friends',
    elementIcon: <PeopleIcon sx={{ fontSize: 28 }} />,
    route: '/',
  },
  {
    iconName: 'media',
    hoveredText: 'Media',
    elementIcon: <LiveTvIcon sx={{ fontSize: 28 }} />,
    route: '/',
  },
  {
    iconName: 'group',
    hoveredText: 'Group',
    elementIcon: <GroupsIcon sx={{ fontSize: 28 }} />,
    route: '/',
  },
  {
    iconName: 'games',
    hoveredText: 'Games',
    elementIcon: <GamesIcon sx={{ fontSize: 28 }} />,
    route: '/',
  },
  {
    iconName: 'menu',
    hoveredText: 'Menu',
    elementIcon: <MenuIcon sx={{ fontSize: 28 }} />,
    route: '/bookmarks',
  },
]

const HeaderMiddleMFItem = ({ item, setActiveItem, activeItem }) => {
  const [hoveredItem, setHoveredItem] = useState('')

  const navigate = useNavigate()

  return (
    <div
      onClick={() => {
        setActiveItem((prev) =>
          prev === 'home'
            ? setActiveItem(item.iconName)
            : prev !== 'home' && setActiveItem(item.iconName)
        )
        navigate(item.route)
      }}
      onMouseEnter={() => setHoveredItem(item.iconName)}
      onMouseLeave={() => setHoveredItem('')}
      className={`${
        item.iconName === 'menu' &&
        'headerBreakpoint700:flex headerBreakpoint1100:hidden'
      } ${item.iconName === 'games' && 'hidden headerBreakpoint1100:flex'} ${
        item.iconName !== 'menu' &&
        item.iconName !== 'games' &&
        'hidden headerBreakpoint700:flex'
      } items-center justify-center w-3/12 cursor-pointer relative ${
        activeItem === item.iconName
          ? 'border-b-4 border-blue-600 py-3 '
          : 'border-b-4 border-transparent hover:bg-customBg-100 hover:rounded py-2 '
      }`}
    >
      {item.elementIcon}
      {hoveredItem === `${item.iconName}` && (
        <div className="bg-black rounded absolute top-16">
          <p className="text-white p-2 text-xs">{item.hoveredText}</p>
        </div>
      )}
    </div>
  )
}

const HeaderMiddleMF = () => {
  const [activeItem, setActiveItem] = useState('home')
  console.log(activeItem)
  return (
    <div className="flex items-center headerBreakpoint700:justify-center headerBreakpoint700:space-x-2 w-2/4 headerBreakpoint700:ml-28">
      {elementArray.map((item, index) => (
        <HeaderMiddleMFItem
          item={item}
          key={index}
          setActiveItem={setActiveItem}
          activeItem={activeItem}
        />
      ))}
    </div>
  )
}

/* const HeaderMiddleMF = () => {
  const navigate = useNavigate()
  const [activeIcon, setActiveIcon] = useState('home')
  const [hoveredIcon, setHoveredIcon] = useState('')

  return (
    <div className="flex items-center headerBreakpoint700:justify-center headerBreakpoint700:space-x-2 w-2/4 headerBreakpoint700:ml-28">
      <div
        onMouseEnter={() => setHoveredIcon('home')}
        onMouseLeave={() => setHoveredIcon('')}
        onClick={() => {
          setActiveIcon('home')
          navigate('/')
        }}
        className={`hidden headerBreakpoint700:flex items-center justify-center w-3/12 cursor-pointer relative ${
          activeIcon === 'home'
            ? 'border-b-4 border-blue-600 py-3 '
            : 'border-b-4 border-transparent hover:bg-customBg-100 hover:rounded py-2 '
        }`}
      >
        <HomeIcon sx={{ fontSize: 28 }} />
        {hoveredIcon === 'home' && (
          <div className="bg-black rounded absolute top-16">
            <p className="text-white p-2 text-xs">Home</p>
          </div>
        )}
      </div>
      <div
        onMouseEnter={() => setHoveredIcon('friends')}
        onMouseLeave={() => setHoveredIcon('')}
        onClick={() => setActiveIcon('friends')}
        className={`hidden headerBreakpoint700:flex items-center justify-center w-3/12 cursor-pointer ${
          activeIcon === 'friends'
            ? 'border-b-4 border-blue-600 py-3'
            : 'border-b-4 border-transparent hover:bg-customBg-100 hover:rounded py-2'
        }`}
      >
        <PeopleIcon sx={{ fontSize: 28 }} />
        {hoveredIcon === 'friends' && (
          <div className="bg-black rounded absolute top-16">
            <p className="text-white p-2 text-xs">Friends</p>
          </div>
        )}
      </div>
      <div
        onMouseEnter={() => setHoveredIcon('media')}
        onMouseLeave={() => setHoveredIcon('')}
        onClick={() => setActiveIcon('media')}
        className={`hidden headerBreakpoint700:flex items-center justify-center w-3/12 cursor-pointer ${
          activeIcon === 'media'
            ? 'border-b-4 border-blue-600 py-3'
            : 'border-b-4 border-transparent hover:bg-customBg-100 hover:rounded py-2'
        }`}
      >
        <LiveTvIcon sx={{ fontSize: 28 }} />
        {hoveredIcon === 'media' && (
          <div className="bg-black rounded absolute top-16">
            <p className="text-white p-2 text-xs">Media</p>
          </div>
        )}
      </div>
      <div
        onMouseEnter={() => setHoveredIcon('group')}
        onMouseLeave={() => setHoveredIcon('')}
        onClick={() => setActiveIcon('group')}
        className={`hidden headerBreakpoint700:flex items-center justify-center w-3/12 cursor-pointer ${
          activeIcon === 'group'
            ? 'border-b-4 border-blue-600 py-3'
            : 'border-b-4 border-transparent hover:bg-customBg-100 hover:rounded py-2'
        }`}
      >
        <GroupsIcon sx={{ fontSize: 28 }} />
        {hoveredIcon === 'group' && (
          <div className="bg-black rounded absolute top-16">
            <p className="text-white p-2 text-xs">Group</p>
          </div>
        )}
      </div>
      <div
        onMouseEnter={() => setHoveredIcon('games')}
        onMouseLeave={() => setHoveredIcon('')}
        onClick={() => setActiveIcon('games')}
        className={`hidden headerBreakpoint1100:flex items-center justify-center  w-3/12 cursor-pointer ${
          activeIcon === 'games'
            ? 'border-b-4 border-blue-600 py-3'
            : 'border-b-4 border-transparent hover:bg-customBg-100 hover:rounded py-2'
        }`}
      >
        <GamesIcon sx={{ fontSize: 28 }} />
        {hoveredIcon === 'games' && (
          <div className="bg-black rounded absolute top-16">
            <p className="text-white p-2 text-xs">Games</p>
          </div>
        )}
      </div>
      <div
        onMouseEnter={() => setHoveredIcon('menu')}
        onMouseLeave={() => setHoveredIcon('')}
        onClick={() => {
          navigate('/bookmarks')
          setActiveIcon('menu')
        }}
        className={`headerBreakpoint1100:hidden flex items-center justify-center w-3/12 cursor-pointer ${
          activeIcon === 'menu'
            ? 'border-b-4 border-blue-600 py-3'
            : 'border-b-4 border-transparent hover:bg-customBg-100 hover:rounded py-2'
        }`}
      >
        <MenuIcon sx={{ fontSize: 28 }} />
        {hoveredIcon === 'menu' && (
          <div className="bg-black rounded absolute top-16">
            <p className="text-white p-2 text-xs">Menu</p>
          </div>
        )}
      </div>
    </div>
  )
} */

export default HeaderMiddleMF
