
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { appRouter } from './router/appRouter'
import { TaskProvider } from './Context/TaskContext'
import { EditTaskProvider } from './Context/EditTaskContext'


createRoot(document.getElementById('root')).render(
  <TaskProvider>
    <EditTaskProvider>
      <RouterProvider router={appRouter} />
    </EditTaskProvider>
  </TaskProvider>
)
