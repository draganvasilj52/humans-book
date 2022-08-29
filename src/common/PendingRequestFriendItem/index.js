import { updateDoc, doc, arrayRemove } from 'firebase/firestore'
import { db } from '../../firebase/config'
import { useSelector, useDispatch } from 'react-redux'
import { updateUserInReduxStore } from '../../services/AuthService'
import { updateLatestDataToLoggedUser } from '../../features/dataSlice'
import { addFriend } from '../../services/AuthService'

const PendingRequestFriendItem = ({ pendingUser }) => {
  const user = useSelector((state) => state.data.user)
  const dispatch = useDispatch()

  const handleAddingFriendToPendingArray = async () => {
    await addFriend(pendingUser.id)
    await updateDoc(doc(db, 'users', user.id), {
      pendingFriendsArray: arrayRemove(pendingUser.id),
    })
    let updatedUser = await updateUserInReduxStore()
    dispatch(updateLatestDataToLoggedUser(updatedUser))
  }
  const handleRemovingFriendFromPendingArray = async () => {
    await updateDoc(doc(db, 'users', user.id), {
      pendingFriendsArray: arrayRemove(pendingUser.id),
    })
    let updatedUser = await updateUserInReduxStore()
    dispatch(updateLatestDataToLoggedUser(updatedUser))
  }
  return (
    <div>
      <div
        className="h-9 w-9 bg-cover"
        style={{
          backgroundImage: `url(${pendingUser.photoURL})`,
          borderRadius: '50%',
        }}
      />
      <p>
        {pendingUser.firstName} {pendingUser.lastName}
      </p>
      <p>Accept for friend?</p>
      <button
        onClick={handleAddingFriendToPendingArray}
        className="bg-blue-200"
      >
        Yes
      </button>
      <button
        onClick={handleRemovingFriendFromPendingArray}
        className="bg-red-200"
      >
        No
      </button>
    </div>
  )
}

export default PendingRequestFriendItem
