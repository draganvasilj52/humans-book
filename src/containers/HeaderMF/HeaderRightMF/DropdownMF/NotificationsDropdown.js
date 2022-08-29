import { useSelector } from 'react-redux'
import RenderPendingFriendRequests from './../../../../common/RenderPendingFriendRequests/index'

const NotificationsDropdown = () => {
  const user = useSelector((state) => state.data.user)
  return (
    <div
      className="bg-white rounded absolute right-4 h-56 top-14 z-10 p-3 flex flex-col space-y-4"
      style={{ width: '40%' }}
    >
      {user.pendingFriendsArray.length > 0 ? (
        user.pendingFriendsArray.map((item, index) => (
          <div key={index} className="">
            <RenderPendingFriendRequests item={item} />
          </div>
        ))
      ) : (
        <div className="">No new notifications</div>
      )}
    </div>
  )
}

export default NotificationsDropdown
