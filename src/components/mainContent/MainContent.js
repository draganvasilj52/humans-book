import React from 'react'
import CenterContent from './centerContent/CenterContent'
import LeftContent from './leftContent/LeftContent'
import RightContent from './rightContent/RightContent'

const MainContent = () => {
  return (
    <div className="grid grid-cols-4 px-4 mt-6 ">
      <div>
        <LeftContent />
      </div>
      <div className="col-span-2">
        <CenterContent />
      </div>
      <div>
        <RightContent />
      </div>
    </div>
  )
}

export default MainContent
