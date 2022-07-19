import LeftContentMF from './LeftContentMF'
import CenterContentMF from './CenterContentMF'
import RightContentMF from './RightContentMF'

const MainContentMF = () => {
  return (
    <div className="bg-customBg-100  py-6 signInBreakpoint900:gap-x-8 signInBreakpoint900:grid signInBreakpoint900:grid-cols-3 headerBreakpoint1100:grid-cols-4 ">
      <div className="headerBreakpoint1100:col-span-1 hidden headerBreakpoint1100:grid headerBreakpoint1100:max-w-sm	">
        <LeftContentMF />
      </div>

      <CenterContentMF />

      <RightContentMF />
    </div>
  )
}

export default MainContentMF
