import {createBrowserRouter} from "react-router"
import AppLayout from "../Layout/AppLayout"
import Home from "../pages/Home"
import CreateTask from "../pages/CreateTask"
import CompletedTask from "../pages/CompletedTask"
import ActiveTask from "../pages/ActiveTask"

export const appRouter = createBrowserRouter([
    {
        path:"/",
        Component:AppLayout,
        children:[
            {
                path:"",
                Component:Home
            }, 
            {
                path:"create",
                Component:CreateTask
            }, 
            {
                path:"completed",
                Component:CompletedTask
            },
            {
                path:"active",
                Component:ActiveTask
            }
        ]
    }
])

