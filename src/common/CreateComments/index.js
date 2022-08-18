import { useState } from 'react'
import { addComment } from '../../services/AuthService'
const CreateComments = ({ user, item }) => {
  const [comment, setComment] = useState('')

  const handleKeyPress = async (event) => {
    if (event.key === 'Enter') {
      const data = {
        userId: user.id,
        comment,
        firstName: user.firstName,
        lastName: user.lastName,
        photoURL: user.photoURL,
      }
      await addComment(data, item.docRef)
      setComment('')
    }
  }
  return (
    <div className="flex space-x-2 items-center justify-center px-4 py-1">
      <div
        className="h-8 w-8 bg-cover"
        style={{
          backgroundImage: `url(${user.photoURL})`,
          borderRadius: '50%',
        }}
      />
      <input
        className="px-3 cursor-pointer hover:bg-gray-300 py-2 h-10 w-11/12 text-base rounded-3xl border-0 bg-secondaryButton-100 focus:ring-0 "
        placeholder={`Write comment...`}
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        onKeyDown={handleKeyPress}
      />
    </div>
  )
}

export default CreateComments
