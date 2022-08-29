import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { updateLatestDataToLoggedUser } from '../../features/dataSlice'
import {
  updateUserInReduxStore,
  addFriendToPendingFriendsArray,
} from '../../services/AuthService'
const UsersListItem = ({ item }) => {
  const dispatch = useDispatch()

  const user = useSelector((state) => state.data.user)

  const ifFriendsAlready = user.friendsArray.findIndex((x) => x === item.id)

  const ifFriendsInPendingArray = user.pendingFriendsArray.findIndex(
    (x) => x.id === item.id
  )

  /*   const ifFriendsInPendingArrayIsPendingFalse = user.pendingFriendsArray.find(
    (x) => x.id === item.id
  ) */

  const [showFriendsModal, setShowFriendsModal] = useState(false)

  const handleAddFriends = async (e) => {
    e.stopPropagation()

    await addFriendToPendingFriendsArray(item.id)
    let updatedUser = await updateUserInReduxStore()
    dispatch(updateLatestDataToLoggedUser(updatedUser))
  }

  return (
    <div
      onMouseEnter={() => setShowFriendsModal(true)}
      onMouseLeave={() => setShowFriendsModal(false)}
      className="px-2 space-x-3 flex items-center hover:bg-zinc-200 hover:rounded relative group cursor-pointer "
    >
      <div
        className="h-9 w-9 bg-cover"
        style={{
          backgroundImage: `url(${item.photoURL})`,
          borderRadius: '50%',
        }}
      />
      <p className="text-base	py-3.5">
        {item.firstName} {item.lastName}
      </p>
      {showFriendsModal && item.id !== user.id && (
        <div className="absolute z-20 left-20 p-3 rounded bg-white space-y-2 flex flex-col items-center justify-center group cursor-default">
          <div className="flex items-center justify-center space-x-2">
            <div
              className="h-9 w-9 bg-cover"
              style={{
                backgroundImage: `url(${item.photoURL})`,
                borderRadius: '50%',
              }}
            />
            <p className="text-base	py-3.5">
              {item.firstName} {item.lastName}
            </p>
          </div>
          {ifFriendsAlready !== -1 ? (
            <p className="text-sm bg-blue-200 rounded p-1">Already friends</p>
          ) : ifFriendsInPendingArray !== -1 ? (
            <p className="text-sm bg-blue-200 rounded p-1">Friend Request</p>
          ) : (
            <p
              onClick={handleAddFriends}
              className="text-sm bg-blue-200 rounded p-1 hover:cursor-pointer"
            >
              Add Friend
            </p>
          )}
        </div>
      )}
    </div>
  )
}

export default UsersListItem
