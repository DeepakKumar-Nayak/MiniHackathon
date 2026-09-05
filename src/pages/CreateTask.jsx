import React, { createContext, useContext } from 'react'
import { useForm } from 'react-hook-form'
import { nanoid } from 'nanoid'
import { TaskContext } from '../Context/TaskContext'
import { EditTaskContext } from '../Context/EditTaskContext'
import { useNavigate } from 'react-router'



function CreateTask() {
    const navigate = useNavigate()
    const { task, setAllTask } = useContext(TaskContext)

    const { register, reset, getValues, handleSubmit } = useForm()

    function AddTask() {
        const data = getValues()
        const newData = [...task, { ...data, id: nanoid(), isCompleted: false }]
        setAllTask(newData)
        localStorage.setItem('tasks', JSON.stringify(newData))
        reset()
        navigate("/")
    }

    return (
        <div className='create-task mt-10'>
            <form className='w-[500px] flex justify-between gap-5' onSubmit={handleSubmit(AddTask)}>
                <input className='border-2 w-full py-2 px-1' type="text" placeholder='Enter Your Task Here' {...register('task')} />
                <input className='border-2 px-5 py-2' type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default CreateTask
