import PostList from '../../../components/PostsList/PostList'
import PostCreate from '../../../components/PostCreate/PostCreate'

const CenterContent = () => {
  return (
    <div className="px-8 space-y-4">
      <PostCreate />
      <PostList />
    </div>
  )
}

export default CenterContent
