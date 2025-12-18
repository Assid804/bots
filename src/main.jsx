import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ThemeProvider } from "@/components/ui/Theme-provider.jsx"
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import GetStarted from './pages/GetStarted'
import ContactPage from './pages/Contactus'
import HomePage from './components/form/HomePage'
import ServiceDetails from './pages/ServiceDetail'
import Gallary from './components/form/Gallary'
import Team from './components/form/Team'
import FaqDetail from './components/form/FaqDetail'
import BlogPage from './components/form/BlogDetails'



const router = createBrowserRouter([
  {path: '/', element: <Home />},
   {path: "/get-started", element: <GetStarted/>},
   {path: "/contact", element: <ContactPage />},
   {path: "/home", element: <HomePage />},
   {path: "/services", element: <ServiceDetails />},
   {path: "/gallery", element: <Gallary />},
    {path: "/team", element: <Team />},
    {path: "/faq-details", element: <FaqDetail />},
     {path: "/blog", element: <BlogPage />},
])


createRoot(document.getElementById('root')).render(
  <ThemeProvider defaultTheme="transparent" storageKey="vite-ui-theme">
      <StrictMode>

    <RouterProvider router={router} />

  </StrictMode>
    </ThemeProvider>
  
)
