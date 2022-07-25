import PostList from '../../../components/PostsList/PostList'
import PostCreate from './../../../components/PostCreate/PostCreate'

const ContentProfile = () => {
  return (
    <div className="bg-customBg-100 flex space-x-3  pt-4">
      <div className="w-2/5"></div>
      <div className="w-3/5 flex flex-col space-y-3 px-4">
        <PostCreate />
        <PostList />
      </div>
    </div>
  )
}

export default ContentProfile
