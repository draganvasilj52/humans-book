import { useRoutes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ProfilePage from '../pages/ProfilePage'
import HomePage from '../pages/HomePage'
import Bookmarks from './../pages/Bookmarks/index'
import SignInMobileFirst from '../pages/SignIn/SingInMobileFirst'

export default function Router() {
  const user = useSelector((state) => state.data.user)
  console.log(user)

  const routes = [
    {
      path: '/',
      element: user ? <HomePage /> : <SignInMobileFirst />,
    },
    {
      path: user && `/${user.displayName}`,
      element: user ? <ProfilePage /> : <SignInMobileFirst />,
    },
    {
      path: '/bookmarks',
      element: user ? <Bookmarks /> : <SignInMobileFirst />,
    },
    {
      path: '*',
      element: <SignInMobileFirst />,
    },
  ]
  return useRoutes(routes)
}
