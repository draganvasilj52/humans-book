import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import PublicIcon from '@mui/icons-material/Public'
import { grey } from '@mui/material/colors'
import moment from 'moment'
import LikesAndComments from '../../common/LikesAndComments'

const PostsListItem = ({ item }) => {
  const postImages = (post) => {
    const post_images = post.images?.map((file, index) => (
      <div key={index} className="w-full cover">
        <img src={file} alt="cover" className="w-full h-full" />
      </div>
    ))
    return post_images
  }

  return (
    <div className="flex flex-col bg-white rounded">
      <div className="flex pt-3 px-4 mb-3 space-x-3">
        <div
          className="h-10 w-10 bg-cover"
          style={{
            backgroundImage: `url(${item.photoURL})`,
            borderRadius: '50%',
          }}
        />
        <div className="flex flex-col w-11/12	">
          <p className="text-sm font-medium text-black">
            {item.firstName} {item.lastName}
          </p>
          <div className="flex items-center space-x-1">
            <p className="text-xs">{moment(item.timestamp).fromNow()}</p>
            <span className="text-xs flex items-center">&middot;</span>
            <PublicIcon sx={{ fontSize: 12 }} />
          </div>
        </div>
        <MoreHorizIcon
          className="p-2"
          sx={{ fontSize: 36, color: grey[600] }}
        />
      </div>
      {item.desc && (
        <div className="px-4 pb-4 pt-1">
          <p className="text-sm">{item.desc}</p>
        </div>
      )}
      {item?.images && (
        <div
          className={`grid pb-3 ${item.images?.length === 1 && 'grid-cols-1'} ${
            item.images?.length === 2 && 'grid-cols-2'
          }`}
        >
          {postImages(item)}
        </div>
      )}
      <LikesAndComments item={item} />
    </div>
  )
}

export default PostsListItem
