import React from 'react'
import LeftContent from "./LeftContent";
import CenterContent from "./CenterContent";
import RightContent from "./RightContent";


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
