import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AppProvider } from './components/context.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import QuizPage from './components/QuizPage.jsx'

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/",
        element:<QuizPage/>
      }
    ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AppProvider>
  <RouterProvider router={appRouter}/>
  </AppProvider>
</React.StrictMode>
)
