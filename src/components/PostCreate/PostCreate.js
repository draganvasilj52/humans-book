import { useSelector } from 'react-redux'
import VideocamIcon from '@mui/icons-material/Videocam'
import CollectionsIcon from '@mui/icons-material/Collections'
import { red, green } from '@mui/material/colors'
import { useState } from 'react'
import PostCreateModal from './PostCreateModal'

const PostCreate = () => {
  const [createPost, setCreatePost] = useState(false)

  const user = useSelector((state) => state.data.user)

  return (
    <div className="flex flex-col px-4 pt-3 pb-2.5 bg-white rounded">
      <div className="flex items-center space-x-4 mb-3">
        <div
          className="h-10 w-10 bg-cover"
          style={{
            backgroundImage: `url(${user.photoURL})`,
            borderRadius: '50%',
          }}
        />
        <input
          onClick={() => setCreatePost(true)}
          type="text"
          className="cursor-pointer hover:bg-gray-300 px-3 py-2 h-10 w-11/12 text-base rounded-3xl border-0 bg-secondaryButton-100 focus:ring-0 "
          placeholder={`What's your thoughts, ${user.displayName}?`}
        />
      </div>
      <PostCreateModal setCreatePost={setCreatePost} createPost={createPost} />

      <hr className="border-gray-300 pb-2" />
      <div className="flex">
        <div className="flex items-center justify-center p-2 w-3/6 space-x-1 cursor-pointer hover:bg-customBg-100 rounded">
          <VideocamIcon sx={{ fontSize: 24, color: red[600] }} />
          <p className="text-sm text-inputColor-100">Video stream live</p>
        </div>
        <div className="flex items-center justify-center p-2 w-3/6 space-x-1 cursor-pointer hover:bg-customBg-100 rounded">
          <CollectionsIcon sx={{ fontSize: 24, color: green[500] }} />
          <p className="text-sm text-inputColor-100">Photo/video</p>
        </div>
      </div>
    </div>
  )
}

export default PostCreate
