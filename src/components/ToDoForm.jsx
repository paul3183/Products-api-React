import React, { useState } from 'react'

const ToDoForm = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [isCompleted, setIsCompleted] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    const info = {
      id: Date.now(),
      title,
      description,
      isCompleted,
    }

    console.log(info)
  }

  return (
    <form action='' className='p-5 w-80' onSubmit={submit}>
      <div className='flex flex-col'>
        <label className='text-slate-100' htmlFor='title'>
          Title
        </label>
        <input
          className='ml-3'
          type='text'
          id='title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className='flex flex-col'>
        <label className='text-slate-100' htmlFor='description'>
          Description
        </label>
        <textarea
          id='description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className='flex flex-col'>
        <label className='text-slate-100' htmlFor='isCompleted'>
          Is completed
        </label>
        <input
          type='checkbox'
          id='isCompleted'
          value={isCompleted}
          onChange={(e) => setIsCompleted(e.target.checked)}
        />
      </div>
      <button className='text-slate-100 font-bold bg-sky-500 px-4 py-1 rounded-full'>
        Submit
      </button>
    </form>
  )
}

export default ToDoForm