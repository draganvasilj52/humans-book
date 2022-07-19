import CreateIcon from '@mui/icons-material/Create'
import MenuBookIcon from '@mui/icons-material/MenuBook'
const CreateDropdown = () => {
  return (
    <div
      style={{ width: '40%' }}
      className="bg-white rounded absolute right-4 top-14 z-10 p-3 flex flex-col"
    >
      <div className=" w-2/5 rounded px-2 h-fit pt-1 pb-2">
        <p className="text-xl font-bold p-2">Create</p>
        <div className="hover:rounded flex items-center cursor-pointer space-x-3  px-2 hover:bg-customBg-100">
          <div
            className="w-9 h-9 flex items-center justify-center bg-secondaryButton-100"
            style={{ borderRadius: 50 }}
          >
            <CreateIcon sx={{ fontSize: 20 }} />
          </div>
          <p className="text-sm py-3">Post</p>
        </div>
        <div className="hover:rounded flex items-center cursor-pointer space-x-3  px-2 hover:bg-customBg-100">
          <div
            className="w-9 h-9 flex items-center justify-center bg-secondaryButton-100"
            style={{ borderRadius: 50 }}
          >
            <MenuBookIcon sx={{ fontSize: 20 }} />
          </div>
          <p className="text-sm py-3">Story</p>
        </div>
      </div>
    </div>
  )
}

export default CreateDropdown
