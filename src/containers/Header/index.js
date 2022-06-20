import LeftHeader from "./LeftHeader";
import MiddleHeader from "./MiddleHeader";
import RightHeader from "./RightHeader";


const Header = () => {
  return (
    <div className="flex justify-between h-14 px-4 bg-white">
      <LeftHeader />
      <MiddleHeader />
      <RightHeader />
    </div>
  )
}

export default Header
