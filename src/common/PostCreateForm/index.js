import { useState } from 'react'
import { db, storage } from '../../firebase/config'
import { ref, uploadBytes } from 'firebase/storage'
import { useSelector } from 'react-redux'
import { addDoc } from 'firebase/firestore'
import { collection } from 'firebase/firestore'
import { getDownloadURL } from 'firebase/storage'
import { doc, updateDoc } from 'firebase/firestore'
import { arrayUnion } from 'firebase/firestore'
const PostCreateForm = ({ setCreatePost }) => {
  const [imageData, setImageData] = useState(null)
  const [textData, setTextData] = useState('')
  const [uploadError, setUploadError] = useState('')
  const user = useSelector((state) => state.data.user)

  const types = ['image/png', 'image/jpeg']

  const handleImg = (e) => {
    e.preventDefault()
    const selected = e.target.files[0]
    if (selected && types.includes(selected.type)) {
      setImageData(e.target.files[0])
      setUploadError('')
    } else {
      setImageData(null)
      setUploadError('attach png and jpeg')
    }
  }
  console.log(user)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (imageData) {
      const filePath = `postImages/${user.uid}/${imageData.name}`
      const storageRef = ref(storage, filePath)
      await uploadBytes(storageRef, imageData)

      const photoURL = await getDownloadURL(ref(storage, filePath))

      await addDoc(collection(db, 'blogs'), {
        title: user.displayName,
        time: '1h',
        description: textData,
        userId: user.id,
        imageURL: photoURL,
      })
    } else {
      await addDoc(collection(db, 'blogs'), {
        title: user.displayName,
        time: '1h',
        description: textData,
        userId: user.id,
      })
      const washingtonRef = doc(db, 'users', `${user.id}`)
      await updateDoc(washingtonRef, {
        posts: arrayUnion({
          title: user.displayName,
          time: '1h',
          description: textData,
          userId: user.id,
        }),
      })
    }

    setCreatePost(false)
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <div className="h-10 px-4 my-4 flex items-center">
          <img
            className="h-full"
            src={`${user.photoURL}`}
            alt=""
            style={{ borderRadius: '50%' }}
          />
          <p className="text-base pl-3">{user.displayName}</p>
        </div>

        <input
          onChange={(e) => setTextData(e.target.value)}
          value={textData}
          type="text"
          className="pl-4 pr-9 pt-1 pb-2 text-base rounded-3xl border-0 focus:ring-0 p-0"
          placeholder={`What's your thoughts, ${user.firstName}?`}
        />
      </div>

      <input onChange={handleImg} className="bg-gray-200" type="file" />

      {uploadError && <p className="text-red-500">{uploadError}</p>}

      <button type="submit" className="text-center p-4 text-white bg-blue-600">
        Create
      </button>
    </form>
  )
}

export default PostCreateForm
