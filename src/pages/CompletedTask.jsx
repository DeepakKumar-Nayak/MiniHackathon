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
        <div className='completed-container'>
            {
                CompletedTask.map((data)=>(
                    <h1>{data.task}</h1>
                ))
            }
        </div>
    )
}

export default CompletedTask
