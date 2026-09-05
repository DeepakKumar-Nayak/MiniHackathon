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

  return (
    <div className='home-container text-white w-[800px] mt-8'>

      {
        task.map((data) => (
          <div className="task-container flex w-full justify-between items-center mb-2">
            <h1>{data.task}</h1>
            <div className="button-container flex gap-2">
              <Link to={`/edit/${data.id}`}>
                <button className='border-2 px-6 py-2'>Edit</button>
              </Link>

              <button className='border-2 px-6 py-2' onClick={() => HandleDelete(data.id)}>Delete</button>
              <button className='border-2 px-6 py-2'>{data.isCompleted === false ? "NotCompleted" : "Complicated"}</button>
              <button className='border-2 px-6 py-2'>{data.isCompleted === false ? "Active" : "Done n Dusted"}</button>

            </div>
          </div>
        ))
      }

    </div>
  )
}

export default Home
