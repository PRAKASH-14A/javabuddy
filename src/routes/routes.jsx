import {createBrowserRouter,} from 'react-router-dom'
import Layout from '../components/layouts/Layout'

const routes=createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    // children:[
    //   path:"/",
    //   element:
    // ]
  }
])
export default routes;