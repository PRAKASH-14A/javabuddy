import { createBrowserRouter, } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Home from '../pages/Home';
import Login from '../pages/Login';
import Registration from '../pages/Registration';
import Dashboard from '../dashboard/Dashboard';
import PrivateRouting from '../privaterouting/PrivateRouting';
import About from '../pages/About';
import Roadmap from '../pages/Roadmap';
import Contact from '../pages/Contact';
import Array from '../dashboard/dashboardPages/Array/Array';
import Introduction from '../dashboard/dashboardPages/Introduction/Introduction';
import Installations from '../dashboard/dashboardPages/Installtion/Installtion';
import Identifier from '../dashboard/dashboardPages/Identifier/Identifier';
import DataType from '../dashboard/dashboardPages/DataType/DataType';
import TypeCasting from '../dashboard/dashboardPages/TypeCasting/TypeCasting';
import Variable from '../dashboard/dashboardPages/Variable/Variables';
import Operator from '../dashboard/dashboardPages/Operators/Operators';
import FlowControl from '../dashboard/dashboardPages/FlowControl/FlowControl';
import Class from '../dashboard/dashboardPages/OOPSConcepts/Class';
import Method from '../dashboard/dashboardPages/OOPSConcepts/Method';
import Features from '../dashboard/dashboardPages/OOPSConcepts/Features';
import Inheritance from '../dashboard/dashboardPages/OOPSConcepts/Inheritance';
import Overloading from '../dashboard/dashboardPages/OOPSConcepts/Overloading';
import Overriding from '../dashboard/dashboardPages/OOPSConcepts/Overriding';
import Modifiers from '../dashboard/dashboardPages/OOPSConcepts/Modifiers';
import Constructors from '../dashboard/dashboardPages/OOPSConcepts/Constructors';
import Interface from '../dashboard/dashboardPages/OOPSConcepts/Interface';
import Casting from '../dashboard/dashboardPages/OOPSConcepts/Casting';
import Blocks from '../dashboard/dashboardPages/OOPSConcepts/Blocks';
import Factory from '../dashboard/dashboardPages/OOPSConcepts/Factory';
import Singleton from '../dashboard/dashboardPages/OOPSConcepts/Singleton';
import Hiding from '../dashboard/dashboardPages/OOPSConcepts/Hiding';
import Abstraction from '../dashboard/dashboardPages/OOPSConcepts/Abstraction';
import Encapsulation from '../dashboard/dashboardPages/OOPSConcepts/Encapsulation';
import Polymorphism from '../dashboard/dashboardPages/OOPSConcepts/Polymorphism';
import ObjectClass from '../dashboard/dashboardPages/java.langPackage/ObjectClass';
import StringClass from '../dashboard/dashboardPages/java.langPackage/StringClass';
import StringMethods from '../dashboard/dashboardPages/java.langPackage/StringMethods';
import StringBuffer from '../dashboard/dashboardPages/java.langPackage/StringBuffer';
import StringBufferMethods from '../dashboard/dashboardPages/java.langPackage/StringBufferMethods';
import StringBuilder from '../dashboard/dashboardPages/java.langPackage/StringBuilder';
import WrapperClass from '../dashboard/dashboardPages/java.langPackage/WrapperClass';
import WrapperConstructors from '../dashboard/dashboardPages/java.langPackage/WrapperConstructors';
import WrapperMethods from '../dashboard/dashboardPages/java.langPackage/WrapperMethods';
import AutoboxingUnboxing from '../dashboard/dashboardPages/java.langPackage/AutoboxingUnboxing';
import CollectionFramework from '../dashboard/dashboardPages/collectionFramework/CollectionFramework';
import Set from '../dashboard/dashboardPages/collectionFramework/Set';
import Queue from '../dashboard/dashboardPages/collectionFramework/Queue';
import Map from '../dashboard/dashboardPages/collectionFramework/Map';
import InterviewQuestion from '../dashboard/dashboardPages/interviewquestion/InterviewQuestion';
import ExceptionHandling from '../dashboard/dashboardPages/exceptionHandling/ExceptionHandling';
import List from '../dashboard/dashboardPages/collectionFramework/List';

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
          <Dashboard />
        </PrivateRouting>,
        children: [
          {
            path:"introduction",
            element:<Introduction/>
          },
          {
            path:"installation",
            element:<Installations/>
          },
          {
            path:"identifier",
            element:<Identifier/>
          },
          {
            path:"datatype",
            element:<DataType/>
          },
          {
            path:"typecasting",
            element:<TypeCasting/>
          },
          {
            path:"variables",
            element:<Variable/>
          },
          {
            path:"operators",
            element:<Operator/>
          },
          {
            path:"flowcontrol",
            element:<FlowControl/>
          },
          {
            path:"oops/class",
            element:<Class/>
          },
          { 
            path: "oops/methods",
            element: <Method/>
          },
          {
            path: "oops/features",
            element: <Features />
          },
          { 
            path: "oops/inheritance", 
            element: <Inheritance/> 
          },
          { 
            path: "oops/overloading", 
            element: <Overloading /> 
          },
          { 
            path: "oops/overriding", 
            element: <Overriding /> 
          },
          { 
            path: "oops/modifiers",
            element: <Modifiers /> 
          },
          { 
            path: "oops/constructors", 
            element: <Constructors /> 
          },
          { 
            path: "oops/interface", 
            element: <Interface /> 
          },
          { 
            path: "oops/blocks", 
            element: <Blocks /> 
          },
          { 
            path: "oops/casting", 
            element: <Casting /> 
          },
          { 
            path: "oops/factory", 
            element: <Factory /> 
          },
          { 
            path: "oops/singleton", 
            element: <Singleton /> 
          },
          { 
            path: "oops/hiding", 
            element: <Hiding /> 
          },
          { 
            path: "oops/abstraction", 
            element: <Abstraction /> 
          },
          { 
            path: "oops/encapsulation", 
            element: <Encapsulation /> 
          },
          { 
            path: "oops/polymorphism", 
            element: <Polymorphism /> 
          },
          { 
            path: "lang/objectclass", 
            element: <ObjectClass /> 
          },
          { 
            path: "lang/stringclass", 
            element: <StringClass /> 
          },
          { 
            path: "lang/stringmethods", 
            element: <StringMethods /> 
          },
          { 
            path: "lang/stringbuffer", 
            element: <StringBuffer /> 
          },
          { 
            path: "lang/stringbuffermethods", 
            element: <StringBufferMethods /> 
          },
          { 
            path: "lang/stringbuilder", 
            element: <StringBuilder /> 
          },
          { 
            path: "lang/wrapperclass", 
            element: <WrapperClass /> 
          },
          { 
            path: "lang/wrapperconstructors", 
            element: <WrapperConstructors /> 
          },
          { 
            path: "lang/wrappermethods", 
            element: <WrapperMethods /> 
          },
          { 
            path: "lang/autoboxing", 
            element: <AutoboxingUnboxing /> 
          },
          { 
            path: "collection/framework", 
            element: <CollectionFramework /> 
          },
          { 
            path: "collection/list", 
            element: <List /> 
          },
          { 
            path: "collection/set", 
            element: <Set /> 
          },
          { 
            path: "collection/queue", 
            element: <Queue /> 
          },
          { 
            path: "collection/map", 
            element: <Map /> 
          },
          {
            path:"arrays",
            element:<Array/>
          },  
          { 
            path: "exceptions", 
            element: <ExceptionHandling /> 
          },
          { 
            path: "interview", 
            element: <InterviewQuestion /> 
          },
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