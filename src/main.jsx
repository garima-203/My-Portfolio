import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom' 
import About from './Components/AboutPage.jsx'
import Home from './Components/HomePage.jsx'
import Skills from './Components/SkillsPage.jsx'
import Project from './Components/ProjectPage.jsx' 
import Contact from './Components/ContactPage.jsx'
 
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>} >
      <Route path='' element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='skills' element={<Skills/>} />
      <Route path='project' element={<Project/>} />
     <Route path='contact' element={<Contact/>} />  

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}  />
  </StrictMode>,
)
