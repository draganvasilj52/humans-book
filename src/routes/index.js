import { useRoutes } from 'react-router-dom'
import SignIn from '../pages/SignIn/SignIn'
import { useSelector } from 'react-redux'
import ProfilePage from '../pages/ProfilePage'
import HomePage from '../pages/HomePage'
export default function Router() {
  const user = useSelector((state) => state.data.user)

  const routes = [
    {
      path: '/',
      element: user ? (
        <HomePage />
      ) : (
        <div className="bg-customBg-100 h-screen flex items-center justify-center">
          <SignIn />
        </div>
      ),
    },
    {
      path: `/${user.displayName}`,
      element: user ? (
        <ProfilePage />
      ) : (
        <div className="bg-customBg-100 h-screen flex items-center justify-center">
          <SignIn />
        </div>
      ),
    },
    {
      path: '/media',
      element: 'dsa',
    },
    {
      path: '/games',
      element: 'dsa',
    },
    {
      path: '/groups',
      element: 'dsa',
    },
    {
      path: '*',
      element: <SignIn />,
    },
  ]
  return useRoutes(routes)
}
