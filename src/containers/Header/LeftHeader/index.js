import HailIcon from '@mui/icons-material/Hail'
import SearchIcon from '@mui/icons-material/Search'
const LeftHeader = () => {
  return (
    <div className="flex items-center justify-center">
      <HailIcon color="primary" sx={{ fontSize: 40 }} />
      <div
        className="w-10 h-10 bg-customBg-100 flex items-center justify-center "
        style={{ borderRadius: 50 }}
      >
        <SearchIcon sx={{ fontSize: 20 }} />
      </div>
    </div>
  )
}

export default LeftHeader
