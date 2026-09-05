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
        <div className='completed-container w-[300px]'>
            {
                CompletedTask.map((data)=>(
                    <div className="show-completed-task w-full flex justify-between mt-10">
                        <h1 className='w-full'>{data.task}</h1>
                        <button className='border-2 px-4'>Completed</button>
                    </div>
                    
                    
                ))
            }
        </div>
    )
}

export default CompletedTask
