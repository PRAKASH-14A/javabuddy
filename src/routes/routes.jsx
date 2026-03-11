import {createBrowserRouter,} from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Home from '../components/pages/Home';
import Footer from '../components/footer/Footer';
import Login from '../components/pages/Login';
import Registration from '../components/pages/Registration';

const routes=createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element: <Home/>
      }
    ]
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/register",
    element: <Registration/>
  }
])
export default routes;