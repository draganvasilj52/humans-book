import { updateDoc, doc, arrayRemove } from 'firebase/firestore'
import { db } from '../../firebase/config'
import { useSelector, useDispatch } from 'react-redux'
import { updateUserInReduxStore } from '../../services/AuthService'
import { updateLatestDataToLoggedUser } from '../../features/dataSlice'
import { addFriend } from '../../services/AuthService'

const PendingRequestFriendItem = ({ sendingUser, sender }) => {
  const user = useSelector((state) => state.data.user)

  const dispatch = useDispatch()

  const handleAddingFriendToPendingArray = async () => {
    await addFriend(sendingUser.id)

    await updateDoc(doc(db, 'users', sendingUser.id), {
      pendingFriendsArray: arrayRemove({ id: user.id, pending: true }),
    })

    await updateDoc(doc(db, 'users', user.id), {
      pendingFriendsArray: arrayRemove({ id: sender.id, pending: false }),
    })

    let updatedUser = await updateUserInReduxStore()
    dispatch(updateLatestDataToLoggedUser(updatedUser))
  }
  const handleRemovingFriendFromPendingArray = async () => {
    await updateDoc(doc(db, 'users', sendingUser.id), {
      pendingFriendsArray: arrayRemove({ id: user.id, pending: true }),
    })

    await updateDoc(doc(db, 'users', user.id), {
      pendingFriendsArray: arrayRemove({ id: sender.id, pending: false }),
    })
    let updatedUser = await updateUserInReduxStore()
    dispatch(updateLatestDataToLoggedUser(updatedUser))
  }
  const chechkIfSender = user.pendingFriendsArray.findIndex(
    (x) => x.pending === false
  )
  return (
    <div className="flex bg-gray-200 items-center space-x-2">
      <div
        className="h-9 w-9 bg-cover"
        style={{
          backgroundImage: `url(${sendingUser.photoURL})`,
          borderRadius: '50%',
        }}
      />
      {/*  <p>
        {sendingUser.firstName} {sendingUser.lastName}
      </p> */}
      {chechkIfSender !== -1 ? (
        <>
          <p>
            Accept {sendingUser.firstName} {sendingUser.lastName} for friend?
          </p>
          <button
            onClick={handleAddingFriendToPendingArray}
            className="bg-blue-200"
          >
            Accept
          </button>
          <button
            onClick={handleRemovingFriendFromPendingArray}
            className="bg-red-200"
          >
            Decline
          </button>{' '}
        </>
      ) : (
        <p className="">
          Friend Request send to {sendingUser.firstName} {sendingUser.lastName}
        </p>
      )}
    </div>
  )
}

export default PendingRequestFriendItem
