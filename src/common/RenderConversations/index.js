const RenderConversations = ({ item }) => {
  //const user = useSelector((state) => state.data.user)

  return (
    <>
      {
        /* user.id === item.userRecieverId && */
        <div className="flex bg-gray-200  items-center z-10 ">
          <div
            className="h-6 w-6 bg-cover"
            style={{
              backgroundImage: `url(${item.userSenderPhotoUrl})`,
              borderRadius: '50%',
            }}
          />
          <p className="ml-4">
            {item.userSenderFirstName} {item.userSenderLastName}
          </p>
          <p className="pl-4">{item.enteredPhrase}</p>
        </div>
      }
    </>
  )
}

export default RenderConversations
