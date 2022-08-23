import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import {
  addPeopleToMessengerArray,
  updateLatestDataToLoggedUser,
} from '../../features/dataSlice'
import { addFriend, updateUserInReduxStore } from '../../services/AuthService'
const UsersListItem = ({ item }) => {
  const dispatch = useDispatch()
  const addModalToArray = () => {
    dispatch(addPeopleToMessengerArray(item))
  }

  const user = useSelector((state) => state.data.user)

  const [showFriendsModal, setShowFriendsModal] = useState(false)

  const handleAddFriends = async () => {
    if (item.id !== user.id) {
      await addFriend(item.id)
      let updatedUser = await updateUserInReduxStore()
      dispatch(updateLatestDataToLoggedUser(updatedUser))
    }
  }

  return (
    <div
      onClick={addModalToArray}
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
          <p
            onClick={handleAddFriends}
            className="text-sm bg-blue-200 rounded p-1 hover:cursor-pointer"
          >
            Add Friend
          </p>
        </div>
      )}
    </div>
  )
}

export default UsersListItem
