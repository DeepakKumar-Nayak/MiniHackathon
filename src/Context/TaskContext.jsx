import { createContext, useState } from "react";

export const TaskContext = createContext()
export function TaskProvider({children}){
    const [task, setAllTask] = useState(()=>(JSON.parse(localStorage.getItem('tasks') || '[]')))

    return(
        <TaskContext value ={{task, setAllTask}}>
            {children}
        </TaskContext>
    )

}