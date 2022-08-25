import PostsListItem from '../PostsListItem/PostsListItem'

const PostList = ({ data }) => {
  /*  const sortingFunction = (x, y) => {
    return y.timestamp - x.timestamp
  } */
  return (
    <div className="space-y-4">
      {data.map((item, index) => (
        <PostsListItem item={item} key={index} />
      ))}
    </div>
  )
}

export default PostList
