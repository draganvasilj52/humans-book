import { useDispatch, useSelector } from 'react-redux'
import { addPeopleToMessengerArray } from '../../features/dataSlice'
import { useState } from 'react'
import { updateDoc, doc, arrayRemove } from 'firebase/firestore'
import { db } from './../../firebase/config'
import { updateUserInReduxStore } from './../../services/AuthService'
import { updateLatestDataToLoggedUser } from './../../features/dataSlice'

const FriendsListItem = ({ item }) => {
  const user = useSelector((state) => state.data.user)
  const [showFriendsModal, setShowFriendsModal] = useState(false)
  const dispatch = useDispatch()

  const ifFriendsAlready = user.friendsArray.findIndex((x) => x === item.id)

  const addModalToArray = () => {
    dispatch(addPeopleToMessengerArray(item))
  }

  const removeFriend = async (e) => {
    e.stopPropagation()
    await updateDoc(doc(db, 'users', user.id), {
      friendsArray: arrayRemove(item.id),
    })
    await updateDoc(doc(db, 'users', item.id), {
      friendsArray: arrayRemove(user.id),
    })

    let updatedUser = await updateUserInReduxStore()
    dispatch(updateLatestDataToLoggedUser(updatedUser))
  }

  return (
    <div
      onMouseEnter={() => setShowFriendsModal(true)}
      onMouseLeave={() => setShowFriendsModal(false)}
      onClick={addModalToArray}
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
      {showFriendsModal && ifFriendsAlready !== -1 && (
        <div className="absolute z-20 left-20 p-3 rounded bg-white space-y-2 flex flex-col items-center justify-center group cursor-default">
          <p
            onClick={removeFriend}
            className="text-sm bg-blue-200 rounded p-1 cursor-pointer"
          >
            Remove Friend
          </p>
        </div>
      )}
    </div>
  )
}

export default FriendsListItem
