import React, { useContext } from 'react'
import { TaskContext } from '../Context/TaskContext'

function ActiveTask() {
    const { task } = useContext(TaskContext)
    const getactiveTask = task.filter((item) => (item.isCompleted === false))
    console.log(getactiveTask)

    if(getactiveTask.length ===0){
        return(
            <div>
                <h1>All Task Are Completed</h1>
            </div>
        )
    }
    return (
        <div className='active-task w-[300px]'>
            {
                getactiveTask.map((data)=>(
                    
                    <div className='w-full flex justify-between items-center mt-10'>
                        <h1>{data.task}</h1>
                        <button className='border-2 px-5 py-2'>Avtive</button>
                    </div>
                    
                    
                ))
            }
        </div>
    )
}

export default ActiveTask
