import React, { useState } from 'react'

const Tasks = ({task, forEdit, forDelete}) => {

  const [isEditing, setIsEditing] = useState(false)

  let editTask;

  if(isEditing){
    editTask =
      <div className='flex gap-4 items-center'>
      <input type="checkbox" checked = {task.completed} onChange={(e) => forEdit({...task, completed: e.target.checked})} />
      <input type='text' 
      onChange={(e) => forEdit({...task, text: e.target.value})}
      className='border rounded px-4 w-1/2 py-2' value={task.text}/>
      <button className='px-3 py-2 border rounded bg-green-600' onClick={() => setIsEditing(false)}>Save</button>
      <button className='px-3 py-2 border rounded bg-red-500' onClick={() => forDelete(task)}>Delete</button>
    </div>
  }

  else editTask =
    <div className='flex gap-4 items-center'>
      <input type="checkbox" checked = {task.completed} onChange={(e) => forEdit({...task, completed: e.target.checked})} />
      <h2 className='w-1/2'>{task.text}</h2>
      <button className='px-3 py-2 border rounded bg-green-600' onClick={() => setIsEditing(true)}>Edit</button>
      <button className='px-3 py-2 border rounded bg-red-500' onClick={() => forDelete(task)}>Delete</button>
    </div>

  return (
    <>
      {editTask}
    </>
  )
}

export default Tasks