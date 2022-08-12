import LeftContentMF from './LeftContentMF'
import CenterContentMF from './CenterContentMF'
import RightContentMF from './RightContentMF'
import { useSelector, useDispatch } from 'react-redux'
import ContactsModal from './../../common/ContactsModal/index'
import { changeIndexInMessengerArray } from '../../features/dataSlice'
import './minHeight.css'

const MainContentMF = () => {
  const messengerArray = useSelector((state) => state.data.messengerArray)

  const dispatch = useDispatch()

  return (
    <>
      <div className="bg-customBg-100 minHeight  py-6 signInBreakpoint900:gap-x-8 signInBreakpoint900:grid signInBreakpoint900:grid-cols-3 headerBreakpoint1100:grid-cols-4 ">
        <div className="headerBreakpoint1100:col-span-1 hidden headerBreakpoint1100:grid headerBreakpoint1100:max-w-sm	">
          <LeftContentMF />
        </div>

        <CenterContentMF />

        <RightContentMF />
      </div>
      <div>
        {messengerArray.map((item, index) => (
          <div
            key={index}
            onClick={() => dispatch(changeIndexInMessengerArray(index))}
          >
            <ContactsModal item={item} index={index} />
          </div>
        ))}
      </div>
    </>
  )
}

export default MainContentMF
