import MenuIcon from '@mui/icons-material/Menu'
import HomeIcon from '@mui/icons-material/Home'
import LiveTvIcon from '@mui/icons-material/LiveTv'
import GroupsIcon from '@mui/icons-material/Groups'
import GamesIcon from '@mui/icons-material/Games'
import PeopleIcon from '@mui/icons-material/People'
import { useState } from 'react'
import { Link, useMatch,useResolvedPath } from 'react-router-dom'

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
    route: '/friends',
  },
  {
    iconName: 'media',
    hoveredText: 'Media',
    elementIcon: <LiveTvIcon sx={{ fontSize: 28 }} />,
    route: '/media',
  },
  {
    iconName: 'group',
    hoveredText: 'Group',
    elementIcon: <GroupsIcon sx={{ fontSize: 28 }} />,
    route: '/group',
  },
  {
    iconName: 'games',
    hoveredText: 'Games',
    elementIcon: <GamesIcon sx={{ fontSize: 28 }} />,
    route: '/games',
  },
  {
    iconName: 'menu',
    hoveredText: 'Menu',
    elementIcon: <MenuIcon sx={{ fontSize: 28 }} />,
    route: '/bookmarks',
  },
]

const HeaderMiddleMF = () => {

  return (
    <div className="flex items-center headerBreakpoint700:justify-center headerBreakpoint700:space-x-2 w-2/4 headerBreakpoint700:ml-28">
      {elementArray.map((item, index) => (
        <HeaderMiddleMFItem
          item={item}
          key={index}
        />
      ))}
    </div>
  )
}

const HeaderMiddleMFItem = ({ item }) => {
  const [hoveredItem, setHoveredItem] = useState('')

  const resolvedPath = useResolvedPath(item.route)
  const isActive = useMatch({path:resolvedPath.pathname,end:true})

  return (
    <Link to={`${item.route}`}  
      onMouseEnter={() => setHoveredItem(item.iconName)}
      onMouseLeave={() => setHoveredItem('')}
      className={`${
        item.iconName === 'menu' &&
        'headerBreakpoint700:flex headerBreakpoint1100:hidden'
      } ${item.iconName === 'games' && 'hidden headerBreakpoint1100:flex'} ${
        item.iconName !== 'menu' &&
        item.iconName !== 'games' &&
        'hidden headerBreakpoint700:flex'
      } ${isActive ? 'border-b-4 border-blue-600 py-3 '
      : 'border-b-4 border-transparent hover:bg-customBg-100 hover:rounded py-2 '} items-center justify-center w-3/12 cursor-pointer relative`}
    >
      {item.elementIcon}
      {hoveredItem === `${item.iconName}` && (
        <div className="bg-black rounded absolute top-16">
          <p className="text-white p-2 text-xs">{item.hoveredText}</p>
        </div>
      )}
    </Link>
  )
}

export default HeaderMiddleMF
