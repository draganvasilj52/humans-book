const RenderConversations = ({ item }) => {
  return (
    <div className="flex bg-gray-200  items-center z-10 ">
      <div
        className="h-6 w-6 bg-cover"
        style={{
          backgroundImage: `url(${item.userReciever.photoURL})`,
          borderRadius: '50%',
        }}
      />
      <p>
        {item.userReciever.firstName} {item.userReciever.lastName}
      </p>
      <p className="pl-4">{item.enteredPhrase}</p>
    </div>
  )
}

export default RenderConversations
