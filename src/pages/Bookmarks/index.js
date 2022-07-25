import HeaderMF from './../../containers/HeaderMF/index'
import LeftContent from './../../containers/MainContent/LeftContent/index'
const Bookmarks = () => {
  return (
    <div className="bg-customBg-100 h-screen space-y-3">
      <HeaderMF />
      <div className="px-3">
        <LeftContent />
      </div>
    </div>
  )
}

export default Bookmarks
