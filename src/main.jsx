import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ThemeProvider } from "@/components/ui/Theme-provider.jsx"
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'



const router = createBrowserRouter([
  {path: '/', element: <Home />},
])


createRoot(document.getElementById('root')).render(
  <ThemeProvider defaultTheme="transparent" storageKey="vite-ui-theme">
      <StrictMode>

    <RouterProvider router={router} />

  </StrictMode>
    </ThemeProvider>
  
)
