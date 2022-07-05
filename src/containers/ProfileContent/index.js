import CoverProfile from './CoverProfile'
import UserProfile from './UserProfile'
import NavbarProfile from './NavbarProfile'
import ContentProfile from './ContentProfile'
const ProfileContent = () => {
  return (
    <div className="flex flex-col ">
      <CoverProfile />
      <UserProfile />
      <hr className="mx-4 border-zinc-300" />
      <NavbarProfile />
      <ContentProfile />
    </div>
  )
}

export default ProfileContent
