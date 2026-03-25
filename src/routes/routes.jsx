import { createBrowserRouter, } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Home from '../pages/Home';
import Login from '../pages/Login';
import Registration from '../pages/Registration';
import DashboardHome from '../dashboard/DashboardHome';
import Dashboard from '../dashboard/Dashboard';
import PrivateRouting from '../privaterouting/PrivateRouting';
import About from '../pages/About';
import Roadmap from '../pages/Roadmap';
import Contact from '../pages/Contact';
import Array from '../dashboard/dashboardPages/Array/Array';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path:"/roadmap",
        element:<PrivateRouting>
          <Roadmap/>
        </PrivateRouting>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path: "/dashboard",
        element: <PrivateRouting>
          <DashboardHome />
        </PrivateRouting>,
        children: [
          {
            path: "/dashboard/arrays",
            element:<Array/>
          }
        ]
      }
    ]
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Registration />
  }
])
export default routes;