import { useRoutes } from 'react-router-dom'
import SignIn from '../pages/SignIn/SignIn'
import MainContent from '../containers/MainContent'
import Header from '../containers/Header'
import { useSelector } from 'react-redux'

export default function Router() {
  const user = useSelector((state) => state.data.user)
  console.log(user)
  const routes = [
    {
      path: '/',
      element: user ? (
        <>
          <Header /> <MainContent />
        </>
      ) : (
        <SignIn />
      ),
    },
    {
      path: '/home',
      element: 'dsad',
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
