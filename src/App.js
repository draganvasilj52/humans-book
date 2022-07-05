import Router from './routes'

import { useSelector } from 'react-redux'
function App() {
  const realUser = useSelector((state) => state.data.user)
  console.log('pravi user', realUser)
  return <Router />
}

export default App
