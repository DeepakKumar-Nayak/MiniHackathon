import React, { useContext, useEffect } from 'react'
import { TaskContext } from '../Context/TaskContext'
import { useNavigate } from 'react-router'
import { Link } from "react-router"
function Home() {
  const { task, setAllTask } = useContext(TaskContext)
  const navigate = useNavigate()

  useEffect(() => {
    console.log(task)
  }, [task])

  function HandleDelete(id) {
    const DeleteTask = task.filter((data) => data.id !== id)
    setAllTask(DeleteTask)
    localStorage.setItem('tasks', JSON.stringify(DeleteTask))
    navigate('/')
  }

  function HandleIsComplited(id){
    const updatedData = task.map((item)=>(
      item.id === id ? {...item, isCompleted: !item.isCompleted}:item 
    ))
    setAllTask(updatedData)
    localStorage.setItem('tasks', JSON.stringify(updatedData))
  }

  return (
    <div className='home-container text-white w-[800px] mt-8'>

      {
        task.map((data) => (
          <div className="task-container flex w-full justify-between items-center mb-2">
            <div className="task-info flex flex-col">
            <h1 className='text-2xl font-bold'>{data.task}</h1>
            <h1 className='text-sm w-[300px]'>{data.description}</h1>
            </div>
            
            <div className="button-container flex gap-2">
              <Link to={`/edit/${data.id}`}>
                <button className='border-2 px-6 py-2'>Edit</button>
              </Link>

              <button className='border-2 px-6 py-2' onClick={() => HandleDelete(data.id)}>Delete</button>
              <button className='border-2 px-6 py-2' onClick={()=> HandleIsComplited(data.id)}>{data.isCompleted ? "Completed":"Pending"}</button>
              <button className='border-2 px-6 py-2'>{data.isCompleted === false ? "Active" : "Done n Dusted"}</button>

            </div>
          </div>
        ))
      }

    </div>
  )
}

export default Home
