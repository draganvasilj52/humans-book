import './customcss.css'
import CameraAltIcon from '@mui/icons-material/CameraAlt'

const CoverProfile = () => {
  return (
    <div
      style={{ paddingTop: '37%' }}
      className="bg-customBg-100 rounded-b-2xl relative"
    >
      <div className="py-4 px-8 absolute left-0 bottom-0 right-0 bg rounded-b-2xl flex items-center justify-end ">
        <div className="cursor-pointer bg-white flex items-center py-1 px-2 rounded space-x-2">
          <CameraAltIcon sx={{ fontSize: 18 }} />
          <p className="  text-base font-medium">Add Cover Photo</p>
        </div>
      </div>
    </div>
  )
}

export default CoverProfile
