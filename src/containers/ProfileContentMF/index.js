import CoverProfileMF from './CoverProfileMF'
import UserProfileMF from './UserProfileMF'
import NavbarProfileMF from './NavbarProfileMF'
import ContentProfileMF from './ContentProfileMF'

const ProfileContentMF = () => {
  return (
    <div className="flex flex-col ">
      <div className="bg-white">
        <CoverProfileMF />
        <UserProfileMF />
        <hr className="mx-5 border-zinc-300 max-w-6xl mx-auto" />
        <NavbarProfileMF />
      </div>

      <ContentProfileMF />
    </div>
  )
}

export default ProfileContentMF
