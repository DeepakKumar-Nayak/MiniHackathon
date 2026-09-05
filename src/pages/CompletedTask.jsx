import React, { useContext } from 'react'
import { TaskContext } from '../Context/TaskContext'

function CompletedTask() {
    const { task } = useContext(TaskContext)
    const CompletedTask = task.filter((item)=>(item.isCompleted ===  true))
    console.log(CompletedTask)

    if(CompletedTask.length ===0){
        return(
            <div>
                <h1>No Task Is Completed Yet</h1>
            </div>
        )
    }

    return (
        <div className='completed-container w-[600px]'>
            {
                CompletedTask.map((data)=>(
                    <div className="show-completed-task w-full flex justify-between mt-10 items-center">
                        <div className="task-info"> 
                        <h1 className='w-full text-2xl'>{data.task}</h1>
                        <h1 className='text-l w-[400px]'>{data.description}</h1>
                        </div>
                        
                        <button className='border-2 px-4 py-2 bg-green-900'>Completed</button>
                    </div>
                    
                    
                ))
            }
        </div>
    )
}

export default CompletedTask
