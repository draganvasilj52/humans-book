import React, { useState } from 'react'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import { blue } from '@mui/material/colors'
import ShowPeopleWhoLikedPost from '../ShowPeopleWhoLikedPost'

const Likes = ({ item, likes }) => {
  const [showPeopleWhoLikedPost, setShowPeopleWhoLikedPost] = useState(false)
  return (
    <div
      onMouseEnter={() => setShowPeopleWhoLikedPost(true)}
      onMouseLeave={() => setShowPeopleWhoLikedPost(false)}
      className={`mx-4 w-fit relative cursor-pointer py-2.5 flex items-center space-x-1  `}
    >
      <ThumbUpIcon sx={{ fontSize: 16, color: blue[600] }} />
      <p className="text-base text-stone-500">{item.likes}</p>
      {showPeopleWhoLikedPost && (
        <div className="absolute bottom-8 -left-16 flex flex-col">
          <ShowPeopleWhoLikedPost likes={likes} />
        </div>
      )}
    </div>
  )
}

export default Likes
