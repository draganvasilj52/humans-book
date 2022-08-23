import './customcss.css'
import CameraAltIcon from '@mui/icons-material/CameraAlt'
import { useRef } from 'react'
import { uploadBytes, ref, getDownloadURL } from 'firebase/storage'
import { storage } from '../../../firebase/config'
import { useSelector } from 'react-redux'
import { updateDoc, doc } from 'firebase/firestore'
import { db } from '../../../firebase/config'

const CoverProfileMF = () => {
  const imageRef = useRef()

  const refHandler = () => {
    imageRef.current.click()
  }

  const user = useSelector((state) => state.data.user)

  const handleCoverPhotoChange = async (e) => {
    if (e.target.files) {
      const filePath = `coverImages/${user.id}/${e.target.files[0].name}`
      const storageRef = ref(storage, filePath)
      await uploadBytes(storageRef, e.target.files[0])
      const coverURL = await getDownloadURL(ref(storage, filePath))
      await updateDoc(doc(db, 'users', user.id), {
        coverPhoto: coverURL,
      })
    }
  }
  return (
    <div
      style={{ paddingTop: '37%' }}
      className="bg-customBg-100 rounded-b-2xl relative max-w-7xl mx-auto"
    >
      <div className="py-4 px-8 absolute min-h-20 left-0 bottom-0 right-0 bg rounded-b-2xl flex items-center justify-end max-w-7xl mx-auto">
        <div className=" signInBreakpoint900:hidden cursor-pointer bg-white flex items-center px-4 rounded h-9">
          <CameraAltIcon sx={{ fontSize: 16 }} />
        </div>
        <div
          onClick={refHandler}
          className="hidden signInBreakpoint900:flex cursor-pointer z-20 bg-white space-x-2 items-center justify-center w-60 px-2 rounded h-9"
        >
          <CameraAltIcon sx={{ fontSize: 16 }} />
          <p className="  text-base font-medium">Add Cover Photo</p>
          <input
            onChange={handleCoverPhotoChange}
            style={{ display: 'none' }}
            type="file"
            ref={imageRef}
          />
        </div>
      </div>
    </div>
  )
}

export default CoverProfileMF
