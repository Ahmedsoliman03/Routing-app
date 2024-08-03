// import Home from "./components/Home/Home"
import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"
import About from "./components/About/About"
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./components/Home/Home";
import NotFound from "./components/notfound/NotFound";
import Contact from "./components/contact/Contact";
import Portfolio from "./components/protfolio/Protfolio";
import Layout from "./components/layout/Layout";

let routing = createBrowserRouter([
  {path:"" , element:<Layout/> , children:[
    {index:true , element:<Home/>},
    {path:"about" , element:<About/>},
    {path:"contact" , element:<Contact/>},
    {path:"portfolio" , element:<Portfolio/>},
    {path:"*" , element:<NotFound/>},
  ]}
  
])
function App() {

  return (
    <>
    
     <RouterProvider router={routing}></RouterProvider>
     
    </>
  )
}

export default App
