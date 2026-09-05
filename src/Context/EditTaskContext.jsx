import { createContext, useEffect, useState } from "react";

export const EditTaskContext = createContext()

export function EditTaskProvider({children}){
    const[editTask, setEditTask] = useState({})

    return(
        <EditTaskContext value={{editTask, setEditTask}}>
            {children}
        </EditTaskContext>
    )

}