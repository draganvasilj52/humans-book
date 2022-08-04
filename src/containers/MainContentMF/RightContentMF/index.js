import UsersList from "../../../components/UsersList"

const RightContentMF = () => {
  return (
    <div className="hidden signInBreakpoint900:grid signInBreakpoint900:col-span-1 signInBreakpoint900:pt-2 headerBreakpoint1100:max-w-sm headerBreakpoint1100:col-span-1">
      <UsersList/>
    </div>
  )
}

export default RightContentMF
