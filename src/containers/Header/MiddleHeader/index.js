import HomeIcon from '@mui/icons-material/Home'
import LiveTvIcon from '@mui/icons-material/LiveTv'
import GroupsIcon from '@mui/icons-material/Groups'
import GamesIcon from '@mui/icons-material/Games'
import { useState } from 'react'

const MiddleHeader = () => {
  const [activeIcon, setActiveIcon] = useState('home')
  const [hoveredIcon, setHoveredIcon] = useState('')
  return (
    <div className="flex items-center justify-center space-x-2 w-2/5 ">
      <div
        onMouseEnter={() => setHoveredIcon('home')}
        onMouseLeave={() => setHoveredIcon('')}
        onClick={() => setActiveIcon('home')}
        className={`flex items-center justify-center w-3/12 cursor-pointer relative ${
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
        onMouseEnter={() => setHoveredIcon('media')}
        onMouseLeave={() => setHoveredIcon('')}
        onClick={() => setActiveIcon('media')}
        className={`flex items-center justify-center w-3/12 cursor-pointer ${
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
        className={`flex items-center justify-center w-3/12 cursor-pointer ${
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
        className={`flex items-center justify-center  w-3/12 cursor-pointer ${
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
    </div>
  )
}

export default MiddleHeader
