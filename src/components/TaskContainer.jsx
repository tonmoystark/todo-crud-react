import React from 'react'
import Tasks from './Tasks'
const TaskContainer = ({tasks, handleEdit, handleDelete}) => {
  return (
    <div className='mt-5'>
      {tasks.map((task) => (<Tasks key = {task.id} forDelete = {handleDelete} forEdit = {handleEdit} task = {task} />))}
    </div>
  )
}

export default TaskContainer