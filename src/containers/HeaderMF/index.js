import HeaderLeftMF from './HeaderLeftMF/index'
import HeaderRightMF from './HeaderRightMF/index'
import HeaderMiddleMF from './HeaderMiddleMF/index'

const HeaderMF = () => {
  return (
    <div className="flex justify-between h-14 px-4 bg-white">
      <HeaderLeftMF />
      <HeaderMiddleMF />
      <HeaderRightMF />
    </div>
  )
}

export default HeaderMF
