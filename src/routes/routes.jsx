import {createBrowserRouter,} from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Home from '../pages/Home';
import Login from '../pages/Login';
import Registration from '../pages/Registration';
import DashboardHome from '../pages/DashboardHome';
import Dashboard from '../pages/dashboard/Dashboard';
import PrivateRouting from '../privaterouting/PrivateRouting';

const routes=createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element: <Home/>
      },
      {
        path: "/dashboard",
        element: <PrivateRouting>
          <DashboardHome/>
        </PrivateRouting>,
        children: [
          {
            path: "/dashboard",
            element: <Dashboard/>
          }
        ]
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