import PostModalOptions from './../PostModalOptions/index'
import { useState } from 'react'
import PostModalCreate from '../PostModalCreate'

const PostCreateModal = ({ setCreatePost, createPost }) => {
  const [showModalOptions, setShowModalOptions] = useState(false)
  const [inputFileVisible, setInputFileVisible] = useState(true)

  return (
    <>
      {showModalOptions ? (
        <PostModalOptions
          setCreatePost={setCreatePost}
          createPost={createPost}
          setShowModalOptions={setShowModalOptions}
          inputFileVisible={inputFileVisible}
          setInputFileVisible={setInputFileVisible}
        />
      ) : (
        <PostModalCreate
          setCreatePost={setCreatePost}
          createPost={createPost}
          setShowModalOptions={setShowModalOptions}
          inputFileVisible={inputFileVisible}
          setInputFileVisible={setInputFileVisible}
        />
      )}
    </>
  )
}

export default PostCreateModal
