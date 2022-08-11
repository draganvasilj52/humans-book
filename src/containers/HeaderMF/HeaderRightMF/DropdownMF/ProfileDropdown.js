import LogoutIcon from '@mui/icons-material/Logout'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux/es/exports'
import { logOut } from '../../../../features/dataSlice'
import SettingsIcon from '@mui/icons-material/Settings'
import HelpIcon from '@mui/icons-material/Help'
import { useNavigate } from 'react-router-dom'

const ProfileDropdown = () => {
  const navigate = useNavigate()

  const user = useSelector((state) => state.data.user)

  const dispatch = useDispatch()

  const handleClick = async () => {}

  return (
    <div
      style={{ width: '40%' }}
      className="bg-white rounded absolute right-4 top-14 z-10 p-3 flex flex-col"
    >
      <div
        onClick={() => navigate(`/${user.displayName}`)}
        className="flex space-x-3 p-2 hover:bg-customBg-100 hover:rounded cursor-pointer"
      >
        <div
          className="h-16 w-16 bg-cover"
          style={{
            backgroundImage: `url(${user.photoURL})`,
            borderRadius: '50%',
          }}
        />
        <div className="flex flex-col justify-center ">
          <p className="text-base	font-bold">{user.displayName}</p>
          <p className="text-sm	">View Your Profile</p>
        </div>
      </div>
      <hr className="my-2.5 mx-4 border-gray-300" />
      <div className="flex p-2 hover:bg-customBg-100 hover:rounded items-center space-x-3 cursor-pointer">
        <div
          className="w-9 h-9 bg-secondaryButton-100 flex justify-center items-center"
          style={{ borderRadius: '50%' }}
        >
          <SettingsIcon sx={{ fontSize: 20 }} />
        </div>
        <p className="text-base font-medium text-black ">
          Settings and privacy
        </p>
      </div>
      <div className="flex p-2 hover:bg-customBg-100 hover:rounded items-center space-x-3 cursor-pointer">
        <div
          className="w-9 h-9 bg-secondaryButton-100 flex justify-center items-center"
          style={{ borderRadius: '50%' }}
        >
          <HelpIcon sx={{ fontSize: 20 }} />
        </div>
        <p className="text-base font-medium text-black ">Help and support</p>
      </div>
      <div
        onClick={handleClick}
        className="flex p-2 hover:bg-customBg-100 hover:rounded items-center space-x-3 cursor-pointer"
      >
        <div
          className="w-9 h-9 bg-secondaryButton-100 flex justify-center items-center"
          style={{ borderRadius: '50%' }}
        >
          <LogoutIcon sx={{ fontSize: 20 }} />
        </div>
        <p
          onClick={() => dispatch(logOut())}
          className="text-base font-medium text-black "
        >
          Sign out
        </p>
      </div>
    </div>
  )
}

export default ProfileDropdown
