import FriendsListItem from '../FriendsListItem'

const FriendsList = ({ friends }) => {
  return (
    <div className="flex flex-col pb-3">
      <p className="text-base font-semibold py-3 px-2">FRIENDS</p>
      {friends.map((item, index) => (
        <FriendsListItem item={item} key={index} />
      ))}
    </div>
  )
}

export default FriendsList
