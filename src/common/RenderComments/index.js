import React from 'react'

const RenderComments = ({ item }) => {
  return (
    <div className="flex space-x-2 px-6 items-center space-y-2 last:pb-2">
      <div
        className="h-8 w-8 bg-cover"
        style={{
          backgroundImage: `url(${item.photoURL})`,
          borderRadius: '50%',
        }}
      />
      <div className="flex flex-col h-12 justify-center px-3  bg-gray-200 rounded-xl ">
        <p className="text-sm	font-medium ">
          {item.firstName} {item.lastName}
        </p>

        <p className="text-base">{item.comment}</p>
      </div>
    </div>
  )
}

export default RenderComments
