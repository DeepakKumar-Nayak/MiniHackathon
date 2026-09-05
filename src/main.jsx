
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { appRouter } from './router/appRouter'
import { TaskProvider } from './Context/TaskContext'



createRoot(document.getElementById('root')).render(
  <TaskProvider>
    <RouterProvider router={appRouter} />
  </TaskProvider>
)
