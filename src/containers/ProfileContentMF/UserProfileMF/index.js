import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import CreateIcon from '@mui/icons-material/Create'
import { blue, grey } from '@mui/material/colors'
import { useSelector } from 'react-redux/es/exports'

const UserProfileMF = () => {
  const user = useSelector((state) => state.data.user)
  return (
    <div className="flex items-center max-w-6xl mx-auto signInBreakpoint900:justify-start	signInBreakpoint900:px-4 justify-center signInBreakpoint900:flex-row flex-col pb-4">
      <div
        className=" bg-white z-10 -mt-20 signInBreakpoint900:-mt-8  mb-4"
        style={{ borderRadius: '50%' }}
      >
        <div
          className="h-40 w-40 bg-cover m-1 "
          style={{
            backgroundImage: `url(${user.photoURL})`,
            borderRadius: '50%',
          }}
        />
      </div>
      <div className="text-3xl font-bold pb-4 signInBreakpoint900:w-6/12	signInBreakpoint900:self-start signInBreakpoint900:pt-6	signInBreakpoint900:pl-4">
        {user.displayName}
      </div>
      <div className="flex space-x-2 signInBreakpoint900:w-2/5 signInBreakpoint900:justify-end signInBreakpoint900:self-end	signInBreakpoint900:mb-6">
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

export default UserProfileMF
