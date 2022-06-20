import React from 'react'

const PostsListItem = ({ item }) => {
  return (
    <div className="flex flex-col space-y-3 bg-white rounded">
      <p>{item.title}</p>
      <p>{item.description}</p>
    </div>
  )
}

export default PostsListItem
