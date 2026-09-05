import React, { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import { TaskContext } from '../Context/TaskContext'
import { useForm } from 'react-hook-form'


function EditTaskDetail() {
    const {id} = useParams()
    const navigate = useNavigate()
    const {task, setAllTask} = useContext(TaskContext)
    const getTaskToEdit = task.find((data)=>(data.id === id))
    const {register, handleSubmit, getValues} = useForm({

        defaultValues:{
            task:getTaskToEdit.task || "",
            description:getTaskToEdit.description || ""
        }
    })

    function EditData(){
        const data = getValues()
        const updatedData = task.map((item)=>(
            getTaskToEdit.id === item.id ? {...item, task:data.task} : item
        ))
        setAllTask(updatedData)
        localStorage.setItem('tasks', JSON.stringify(updatedData))
        navigate("/")

    }


   

    return (
        <div className='form-container w-[600px]'>
            <form className='flex flex-col gap-5 mt-5' onSubmit={handleSubmit(EditData)}>
                <input className='w-full border-2 px-2 py-2' type="text" placeholder='Get Your Data Edited Here' {...register('task')}/>
                <input  className='w-full border-2 px-2 py-2' type="text" placeholder='Get Your Description Edit Here' {...register('description')}/>
                <input className='border-2 px-5 py-2 bg-white text-black font-bold' type="submit" value="Update" />
            </form>
        </div>
    )
}

export default EditTaskDetail
