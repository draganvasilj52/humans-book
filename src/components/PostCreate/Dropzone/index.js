import { useDropzone } from 'react-dropzone'
import { useCallback, useState, useRef, useEffect } from 'react'
import {
  arrayUnion,
  updateDoc,
  doc,
  addDoc,
  collection,
  serverTimestamp,
} from 'firebase/firestore'
import { uploadBytes, ref, getDownloadURL } from 'firebase/storage'
import { useSelector } from 'react-redux'
import CloseIcon from '@mui/icons-material/Close'
import { grey, green } from '@mui/material/colors'
import CollectionsIcon from '@mui/icons-material/Collections'
import { db, storage } from './../../../firebase/config'

const Dropzone = ({
  setCreatePost,
  setShowModalOptions,
  inputFileVisible,
  setInputFileVisible,
}) => {
  const inputTextRef = useRef(null)
  const [selectedImages, setSelectedImages] = useState([])

  const onDrop = useCallback(
    (acceptedFiles) => {
      let data = [...selectedImages, ...acceptedFiles]
      data.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
      setSelectedImages(data)
    },
    [selectedImages]
  )

  const selected_images = selectedImages?.map((file, index) => (
    <img
      key={index}
      src={file.preview}
      style={{ width: '150px', height: '150px' }}
      alt="image0"
    />
  ))

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false,
    maxFiles: 4,
  })

  const user = useSelector((state) => state.data.user)

  const handleDropzoneClose = () => {
    setInputFileVisible(false)
    setSelectedImages([])
  }

  useEffect(() => {
    inputTextRef.current.focus()
  })

  const uploadPost = async () => {
    const docRef = await addDoc(collection(db, 'posts'), {
      desc: inputTextRef.current.value,
      timestamp: serverTimestamp(),
      userId: user.id,
      likes: 0,
      comments: [],
    })
    await Promise.all(
      selectedImages.map((image) => {
        const filePath = `postImages/${docRef.id}/${image.name}`
        const storageRef = ref(storage, filePath)
        uploadBytes(storageRef, image, 'data_url').then(async () => {
          const photoURL = await getDownloadURL(ref(storage, filePath))
          await updateDoc(doc(db, 'posts', docRef.id), {
            images: arrayUnion(photoURL),
          })
        })
      })
    )

    inputTextRef.current.value = ''
    setSelectedImages([])
    setCreatePost(false)
  }

  return (
    <div className="space-y-4 mx-4 pb-4">
      <div className="flex flex-col ">
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
          ref={inputTextRef}
          type="text"
          className="w-full pt-1 pb-2 text-base rounded-3xl border-0 focus:ring-0 p-0"
          placeholder={`What's your thoughts, ${user.displayName}?`}
        />
      </div>
      {inputFileVisible && (
        <>
          <div
            className="border-gray-300 border p-3 rounded h-56 relative"
            {...getRootProps()}
          >
            <input {...getInputProps()} />

            <div className="bg-gray-100 hover:bg-gray-200 rounded p-6 cursor-pointer h-full flex items-center justify-center">
              {selected_images.length > 0 ? (
                selected_images
              ) : (
                <p>Add photos/videos</p>
              )}
            </div>
          </div>
          <div
            onClick={handleDropzoneClose}
            className="rounded-full border border-gray-200 w-7 h-7 hover:bg-gray-200 cursor-pointer flex items-center justify-center absolute right-10 top-52 z-20"
          >
            <CloseIcon sx={{ fontSize: 20, color: grey[600] }} />
          </div>
        </>
      )}
      <div className="flex items-center p-2 space-x-56 border-gray-300 border rounded">
        <p
          onClick={() => setShowModalOptions(true)}
          className="text-base cursor-pointer"
        >
          Add to post
        </p>

        <div
          onClick={() => setInputFileVisible(true)}
          className="rounded-full border border-gray-200 w-9 h-9 flex items-center justify-center cursor-pointer hover:bg-gray-100"
        >
          <CollectionsIcon sx={{ fontSize: 24, color: green[500] }} />
        </div>
      </div>

      <button
        className=" w-full text-center p-4 text-white bg-blue-600  font-medium"
        onClick={uploadPost}
      >
        Create
      </button>
    </div>
  )
}

export default Dropzone
