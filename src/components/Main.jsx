import React, { useState } from 'react'
import AddTask from './AddTask'
import TaskContainer from './TaskContainer'

const initialTasks = [
  { id: 1, text: 'Tomoy', completed: false },
  { id: 2, text: 'learn', completed: true },
  { id: 3, text: 'raect', completed: false },
]

const Main = () => {

  const [tasks, setTasks] = useState(initialTasks)

  const handleAddTask = (taskText) => {
    const id = crypto.randomUUID()
    const newTask = {id, text: taskText, completed: false}
    setTasks([...tasks, newTask])
  }

  const handleEdit = (editedTask) => {
    const newTask = tasks.map((task) => editedTask.id === task.id ? editedTask : task)
    setTasks(newTask)
  }

  const handleDelete = (deletedTask) => {
    const newTask = tasks.filter((task) => task.id !== deletedTask.id )
    setTasks(newTask)
  }

  return (
    <div>
      <h1 className='text-4xl'>
        Todo App with CRUD
      </h1>
      <AddTask handleAddTask = {handleAddTask}/>
      <TaskContainer tasks = {tasks} handleDelete = {handleDelete} handleEdit = {handleEdit}/>
    </div>
  )
}

export default Main