import HailIcon from '@mui/icons-material/Hail'
import SearchIcon from '@mui/icons-material/Search'
import { useNavigate } from 'react-router-dom'
const LeftHeader = () => {
  const navigate = useNavigate()
  return (
    <div className="flex items-center justify-center space-x-1">
      <HailIcon
        className="cursor-pointer"
        onClick={() => navigate('/')}
        color="primary"
        sx={{ fontSize: 40 }}
      />
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
