import './customcss.css'
import CameraAltIcon from '@mui/icons-material/CameraAlt'

const CoverProfileMF = () => {
  return (
    <div
      style={{ paddingTop: '37%' }}
      className="bg-customBg-100 rounded-b-2xl relative max-w-7xl mx-auto"
    >
      <div className="py-4 px-8 absolute min-h-20 left-0 bottom-0 right-0 bg rounded-b-2xl flex items-center justify-end max-w-7xl mx-auto">
        <div className=" signInBreakpoint900:hidden cursor-pointer bg-white flex items-center px-4 rounded h-9">
          <CameraAltIcon sx={{ fontSize: 16 }} />
        </div>
        <div className="hidden signInBreakpoint900:flex cursor-pointer bg-white space-x-2 items-center justify-center w-60 px-2 rounded h-9">
          <CameraAltIcon sx={{ fontSize: 16 }} />
          <p className="  text-base font-medium">Add Cover Photo</p>
        </div>
      </div>
    </div>
  )
}

export default CoverProfileMF
