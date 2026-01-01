import React, { useState } from 'react'

const AddTask = ({handleAddTask}) => {

  const [taskWriting, setTaskWriting] = useState('')

  function handleTaskWriting(e){
    setTaskWriting(e.target.value)
  }

  function handleAddButton () {
    handleAddTask(taskWriting)
    setTaskWriting('')
  }

  return (
    <div className='mt-10'>
      <input type="text" value={taskWriting} onChange={handleTaskWriting} className='border px-4 py-2 rounded' placeholder='Write your task' />
      <button className='px-4 py-2 ml-2 bg-indigo-500 rounded font-semibold' onClick={handleAddButton}>Add</button>
    </div>
  )
}

export default AddTask