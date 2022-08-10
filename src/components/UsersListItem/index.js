import { useDispatch } from 'react-redux'
import { addPeopleToMessengerArray } from '../../features/dataSlice'
const UsersListItem = ({ item }) => {
  const dispatch = useDispatch()
  const addModalToArray = () => {
    dispatch(addPeopleToMessengerArray(item))
  }

  return (
    <div
      onClick={addModalToArray}
      className="px-2 space-x-3 flex items-center cursor-pointer hover:bg-zinc-200 hover:rounded"
    >
      <div
        className="h-9 w-9 bg-cover"
        style={{
          backgroundImage: `url(${item.photoURL})`,
          borderRadius: '50%',
        }}
      />
      <p className="text-base	py-3.5">{item.displayName}</p>
    </div>
  )
}

export default UsersListItem
