import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import CreateIcon from '@mui/icons-material/Create'
import { blue, grey } from '@mui/material/colors'
import { useSelector } from 'react-redux/es/exports'

const UserProfile = () => {
  const user = useSelector((state) => state.data.user)
  return (
    <div className="flex pb-4 px-4 space-x-5">
      <div className="bg-white p-1 -mt-8 z-10" style={{ borderRadius: '50%' }}>
        <div
          className="h-40 w-40 bg-cover"
          style={{
            backgroundImage: `url(${user.photoURL})`,
            borderRadius: '50%',
          }}
        />
      </div>
      <div className="w-3/5 text-3xl font-bold mt-8 mb-4">
        {user.displayName}
      </div>
      <div className="flex items-end space-x-2 pb-4">
        <div className="h-9 px-3 flex items-center space-x-1.5 bg-blue-600 rounded">
          <AddCircleOutlineIcon sx={{ fontSize: 19, color: blue[100] }} />
          <p className="text-sm	text-white">Add to story</p>
        </div>
        <div className="h-9 px-3 flex items-center space-x-1.5 bg-secondaryButton-100 rounded">
          <CreateIcon sx={{ fontSize: 19, color: grey[600] }} />
          <p className="text-sm	">Edit profile</p>
        </div>
      </div>
    </div>
  )
}

export default UserProfile
