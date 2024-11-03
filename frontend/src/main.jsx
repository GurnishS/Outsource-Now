import { StrictMode,React } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import './index.css'
import Layout from "./Layout.jsx"
import HeroSection from './components/herosection/Herosection.jsx';
import Servicesection from './components/servicesection/Servicesection.jsx';
import AboutSection from './components/aboutsection/Aboutsection.jsx';
import ProjectSection from './components/projectsection/Projectsection.jsx';

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
        <Servicesection/>
        </>
      },
      {
        path:"about",
        element:<>
        <AboutSection/>
        </>
      },
      {
        path:"projects",
        element:<>
        <ProjectSection/>
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