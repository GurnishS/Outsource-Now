import { StrictMode,React } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import './index.css'
import Layout from "./Layout.jsx"
import HomePage from './pages/homepage/HomePage.jsx';
import ServicePage from './pages/servicespage/ServicePage.jsx';
import ProjectsPage from './pages/projectpage/ProjectPage.jsx';
import AboutPage from './pages/aboutuspage/AboutPage.jsx';
import ContactPage from './pages/contactuspage/ContactPage.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<>
        <HomePage/>
        </>
      },
      {
        path:"services",
        element:<>
        <ServicePage/>
        </>
      },
      {
        path:"about",
        element:<>
        <AboutPage/>
        </>
      },
      {
        path:"projects",
        element:<>
        <ProjectsPage/>
        </>
      },
      {
        path:"contact-us",
        element:<>
        <ContactPage/>
        </>
      }
    ]
  }
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)