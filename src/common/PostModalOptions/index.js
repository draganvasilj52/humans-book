import CollectionsIcon from "@mui/icons-material/Collections";
import { green } from "@mui/material/colors";

const PostModalOptions = ({
  showOptionsModal,
  setShowOptionsModal,
  setCreatePost,
}) => {
  return (
    <div
      id='defaultModal'
      tabIndex='-1'
      aria-hidden='true'
      className={`${
        showOptionsModal ? "" : "hidden"
      } flex items-center justify-center h-screen bg-opacity-80 bg-gray-100 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full`}>
      <div className=' relative p-4 w-full max-w-2xl h-full md:h-auto'>
        <div className=' relative bg-white rounded-lg shadow dark:bg-gray-700'>
          <div className='flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600'>
            <h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
              Add to Post
            </h3>
            <button
              onClick={() => {
                setCreatePost(true);
                setShowOptionsModal(false);
              }}
              type='button'
              className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white'
              data-modal-toggle='defaultModal'>
              <svg
                className='w-5 h-5'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  fillRule='evenodd'
                  d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                  clipRule='evenodd'></path>
              </svg>
            </button>
          </div>
        </div>
        <div className='flex bg-white cursor-pointer'>
          <CollectionsIcon sx={{ fontSize: 24, color: green[500] }} />
          <p>Photo/video</p>
        </div>
      </div>
    </div>
  );
};

export default PostModalOptions;
