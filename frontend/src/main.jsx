import { StrictMode,React } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import './index.css'
import Layout from "./Layout.jsx"
import HeroSection from './components/herosection/Herosection.jsx';
import Servicesection from './components/servicesection/Servicesection.jsx';
import AboutSection from './components/aboutsection/Aboutsection.jsx';
import ProjectSection from './components/projectsection/Projectsection.jsx';
import ServicePage from './components/servicespage/ServicePage.jsx';
import ProjectsPage from './components/projectpage/ProjectPage.jsx';
import AboutPage from './components/aboutuspage/AboutPage.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<>
        <HeroSection />
        <Servicesection/>
        <AboutSection />
        <ProjectSection />
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
      }
    ]
  }
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)