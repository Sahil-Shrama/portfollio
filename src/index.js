import React from 'react';
import ReactDOM from 'react-dom/client';


import AboutUs from "./pages/aboutUs";
import GlobalStyle from "./components/globalStyle";
import Nav from "./components/Nav";
import ContactUs from './pages/ContactUs'
import MyWork from './pages/MyWork'
import {createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';
function App() {
  return (
    <>
    <GlobalStyle/>
    <Nav/>
   
   <Outlet/>

   
    
    </>
    
  );
}

const appRouter = createBrowserRouter([
{
path:'/',
element:<App/>,
children:[
  {
   path:'/',
   element: <AboutUs/>
  },
  
{
  path:'/MyWork',
  element:<MyWork/>
},
{
  path:'/contactUs',
  element :<ContactUs/>

}
]
},
  
])















const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<RouterProvider router={appRouter}/>    
  </React.StrictMode>
);

