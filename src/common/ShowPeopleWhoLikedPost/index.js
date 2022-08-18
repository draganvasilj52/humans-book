import React from 'react'

const ShowPeopleWhoLikedPost = ({ likes }) => {
  return (
    <>
      {likes.map((item, index) => (
        <div key={index} className="p-1 flex bg-gray-600 w-40">
          <p className="text-xs text-white	">
            {item.firstName} {item.lastName}
          </p>
        </div>
      ))}
    </>
  )
}

export default ShowPeopleWhoLikedPost
