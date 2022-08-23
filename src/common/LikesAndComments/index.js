import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined'
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined'
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined'
import { blue } from '@mui/material/colors'
import { useState, useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { doc, onSnapshot } from 'firebase/firestore'
import { db } from '../../firebase/config'
import { likePost, unlikePost } from '../../services/AuthService'
import Likes from '../Likes'
import Comments from '../Comments'

const LikesAndComments = ({ item }) => {
  const user = useSelector((state) => state.data.user)

  let isPostLikedByLoggedUser = item.peopleWhoLiked.findIndex(
    (x) => x === user.id
  )

  /*  const canPostBeLikedAndCommented = user.friendsArray.findIndex(
    (x) => x === item.userId
  ) */

  const [showCommentsSection, setShowCommentsSection] = useState(false)
  const [likes, setLikes] = useState([])

  const handleLike = async () => {
    if (isPostLikedByLoggedUser !== -1) {
      await unlikePost(item.docRef)
    } else {
      await likePost(item.docRef)
    }
  }

  const fetch = useCallback(async () => {
    let friends = []
    const items = item.peopleWhoLiked

    items.forEach((item) => {
      onSnapshot(doc(db, 'users', item), (doc) => {
        let data = doc.data()
        friends.push(data)
        setLikes(friends)
      })
    })
  }, [item.peopleWhoLiked])

  useEffect(() => {
    fetch()
  }, [fetch, item.peopleWhoLiked])

  return (
    <>
      {item.likes > 0 && <Likes item={item} likes={likes} />}
      <hr className="mx-4 border-stone-300" />
      <div className="flex items-center justify-center px-4 space-x-1">
        <div
          onClick={handleLike}
          className={`flex px-3 m-1 w-4/12 items-center justify-center hover:bg-customBg-100 cursor-pointer hover:rounded `}
        >
          <div className="py-1.5 px-1 flex items-center">
            <ThumbUpOutlinedIcon
              sx={{
                fontSize: 18,
                color: `${isPostLikedByLoggedUser !== -1 && blue[700]}`,
              }}
            />
          </div>
          <p
            className={`text-sm py-1.5 px-1 ${
              isPostLikedByLoggedUser !== -1 ? 'text-blue-700' : ''
            }`}
          >
            Like
          </p>
        </div>
        <div
          onClick={() => setShowCommentsSection(true)}
          className="flex px-3 m-1 w-4/12 items-center justify-center hover:bg-customBg-100 cursor-pointer hover:rounded"
        >
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
      <Comments
        showCommentsSection={showCommentsSection}
        user={user}
        item={item}
      />
    </>
  )
}

export default LikesAndComments
