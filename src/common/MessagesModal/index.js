import { useSelector } from 'react-redux'

const MessagesModal = () => {
  const user = useSelector((state) => state.data.user)
  const conversationsArray = [...user.conversations]

  return (
    <div className="space-y-2 ">
      {conversationsArray.map((item, index) => (
        <div className="flex items-center " key={index}>
          {
            <div className="flex bg-gray-200  z-10">
              <div
                className="h-6 w-6 bg-cover"
                style={{
                  backgroundImage: `url(${item.userSenderPhotoUrl})`,
                  borderRadius: '50%',
                }}
              />
              <p className="ml-2">
                {item.userSenderFirstName} {item.userSenderLastName}:
              </p>
              <p className="pl-2">{item.enteredPhrase}</p>
            </div>
          }
        </div>
      ))}
    </div>
  )
}

export default MessagesModal
