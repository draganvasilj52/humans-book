import RenderComments from '../RenderComments'
import CreateComments from '../CreateComments'

const Comments = ({ user, item, showCommentsSection }) => {
  return (
    <>
      {showCommentsSection && <hr className="mx-4 border-stone-300 pb-2" />}
      {showCommentsSection && <CreateComments user={user} item={item} />}
      {showCommentsSection &&
        item.comments.length > 0 &&
        item.comments.map((item, index) => (
          <RenderComments key={index} item={item} />
        ))}
    </>
  )
}

export default Comments
