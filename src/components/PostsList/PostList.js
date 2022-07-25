import PostsListItem from '../PostsListItem/PostsListItem'

const PostList = ({ data }) => {
  return (
    <div className="space-y-4">
      {data.map((item, index) => (
        <PostsListItem item={item} key={index} />
      ))}
    </div>
  )
}

export default PostList
