import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom'
import { Router } from 'react-router-dom'
import HireMe from './components/hireme.jsx'
import { RouterProvider } from 'react-router-dom'
import CLI from './components/cli.js'

const router = createBrowserRouter([
  //routers 
  {
    path : '/', 
    element : <App />
  }, 
  {
    path : '/hire-me', 
    element : <HireMe />
  }, 
  {
    path : '/#cli',
    element : <CLI />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} ></RouterProvider>
  </StrictMode>,
)
