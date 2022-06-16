import {useRoutes} from "react-router-dom";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import MainContent from "../containers/MainContent";
import Header from "../containers/Header";

const routes = [
    {
        path: '/signIn',
        element: <SignIn/>
    },
    {
        path: '/signUp',
        element: <SignUp/>
    },
    {
        path: '/home',
        element: <><Header/> <MainContent/></>
    },
    {
        path: '/media',
        element: 'dsa'
    },
    {
        path: '/games',
        element: 'dsa'
    },
    {
        path: '/groups',
        element: 'dsa'
    },
    {
        path: '*',
        element: <SignIn/>
    }
]

export default function Router() {
    return useRoutes(routes);
}