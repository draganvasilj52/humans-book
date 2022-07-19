import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import PublicIcon from '@mui/icons-material/Public'
import { grey, blue } from '@mui/material/colors'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined'
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined'
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined'
import { useSelector } from 'react-redux'
const PostsListItem = ({ item }) => {
  const user = useSelector((state) => state.data.user)
  return (
    <div className="flex flex-col bg-white rounded">
      <div className="flex pt-3 px-4 mb-3 space-x-3">
        <div
          className="h-10 w-10 bg-cover"
          style={{
            backgroundImage: `url(${user.photoURL})`,
            borderRadius: '50%',
          }}
        />
        <div className="flex flex-col w-11/12	">
          <p className="text-sm font-medium text-black">{item.title}</p>
          <div className="flex items-center space-x-1">
            <p className="text-xs">{item.time}</p>
            <span className="text-xs flex items-center">&middot;</span>
            <PublicIcon sx={{ fontSize: 12 }} />
          </div>
        </div>
        <MoreHorizIcon
          className="p-2"
          sx={{ fontSize: 36, color: grey[600] }}
        />
      </div>
      <div className="px-4 pb-4 pt-1">
        <p className="text-sm">{item.description}</p>
      </div>
      {item.imageURL && <img src={`${item.imageURL}`} alt={`${item.title}`} />}
      <div className="mx-4 py-2.5 flex items-center">
        <ThumbUpIcon sx={{ fontSize: 12, color: blue[600] }} />
      </div>
      <hr className="mx-4 border-gray-300" />
      <div className="flex items-center justify-center px-4 space-x-1">
        <div className="flex px-3 m-1 w-4/12 items-center justify-center hover:bg-customBg-100 cursor-pointer hover:rounded">
          <div className="py-1.5 px-1 flex items-center">
            <ThumbUpOutlinedIcon sx={{ fontSize: 18 }} />
          </div>
          <p className="text-sm py-1.5 px-1">Like</p>
        </div>
        <div className="flex px-3 m-1 w-4/12 items-center justify-center hover:bg-customBg-100 cursor-pointer hover:rounded">
          <div className="py-1.5 px-1 flex items-center">
            <ChatBubbleOutlineOutlinedIcon sx={{ fontSize: 18 }} />
          </div>
          <p className="text-sm py-1.5 px-1">Comment</p>
        </div>
        <div className="flex px-3 m-1 w-4/12 items-center justify-center hover:bg-customBg-100 cursor-pointer hover:rounded">
          <div className="py-1.5 px-1 flex items-center">
            <ShareOutlinedIcon sx={{ fontSize: 18 }} />
          </div>
          <p className="text-sm py-1.5 px-1">Share</p>
        </div>
      </div>
    </div>
  )
}

export default PostsListItem
