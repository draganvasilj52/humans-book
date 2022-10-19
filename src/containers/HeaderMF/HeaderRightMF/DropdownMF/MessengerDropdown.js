import { useSelector } from 'react-redux'
import RenderConversations from '../../../../common/RenderConversations'

const MessengerDropdown = () => {
  const user = useSelector((state) => state.data.user)

  return (
    <div
      className="bg-white rounded absolute right-4 h-56 top-14 z-10 p-3 flex flex-col space-y-2 overflow-y-scroll"
      style={{ width: '40%' }}
    >
      {user.conversations.length > 0 ? (
        user.conversations.map((item, index) => (
          <div key={index} className="">
            <RenderConversations item={item} />
          </div>
        ))
      ) : (
        <div className="">No conversations yet made</div>
      )}
    </div>
  )
}

export default MessengerDropdown
