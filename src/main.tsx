import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.tsx'
import "./main.css"

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      // {index:true, element: <LandingPage/>},
      // {path:'*', element: <PageNotFound/>}
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <RouterProvider router={router}/>
  </>
)