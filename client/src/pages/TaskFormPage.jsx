import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { createTask, deleteTask, updateTask, getTask } from "../api/Task.api"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "react-hot-toast"

export function TasksFormPage () {

    const { register, handleSubmit, formState: { errors}, setValue } = useForm()

    const param = useParams()

    const navigate = useNavigate()

    const onSubmit = handleSubmit(
        async data => {
        if (param.id){
        updateTask(param.id,data)
        toast.success('Task updated!',{
            position:"bottom-right",
            icon: '👏',
            style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff'
    }
            
        })
        }
        else{
        await createTask(data)
        toast.success('Task created!',{
            position:"bottom-right",
            icon: '👏',
            style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff'
    }
            
        })
        }
        navigate("/tasks")
        })

    useEffect(()=>{
    async function loadTask() {
        if (param.id){
            const res = await getTask(param.id)
            setValue("title", res.data.title)
            setValue("description", res.data.description)
            // esta es otra manera de mostrarlos en setvalue
            //const {
            //    data: {title, description},
            // }= await getTask(param.id)
            //setValue("title",title)
            //setValue("description",description)
        }
    }
        loadTask()
    },[])

    return(
        <div className="max-w-xl mx-auto">
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Title:"
                {...register("title", { required: true})}
                className="bg-zinc-500 p-3 rounded-lg block w-full mb-3"/>
                {errors.title && <span className="bg-red-500 p-2 rounded-lg">Title is required</span>}
                <textarea rows="3" placeholder="Description:" 
                {...register("description", { required: true})} 
                className="bg-zinc-500 p-3 rounded-lg block w-full mb-3 mt-3">
                </textarea>
                {errors.description && <span className="bg-red-500 p-2 rounded-lg">Description is required</span>}
                <button className="bg-indigo-500 p-3 rounded-lg block w-full mt-3">
                Save
                </button>

            </form>
            {param.id && (
                <div className="flex justify-end">
                <button className="bg-red-500 p-3 rounded-lg w-48 mt-3"
                onClick={async()=>
                {
                    const accepted = window.confirm("Are you sure?")
                    if (accepted) {
                    await deleteTask(param.id)
                    toast.success('Task deleted!',{
                    position:"bottom-right",
                    icon: '👏',
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff'
                    }
                })
                    navigate("/tasks")
                    }
                }
                }>
                    Delete
                </button>
                </div>
            )}
        </div>
    )
}