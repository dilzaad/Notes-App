import React from 'react'
import { useState } from 'react'

const App = () => {

  const [title, setitle] = useState('')
  const [detail, setDetail] = useState('')
  const [task, setTask] = useState([])

  // Add Note
  const submitHandler = (e) => {
    e.preventDefault()

    const copyTask = [...task]

    copyTask.push({
      title: title,
      detail: detail
    })

    setTask(copyTask)

    console.log(title)
    console.log(detail)

    setitle('')
    setDetail('')
  }

  // Delete Note
  const deleteNote = (index) => {

    const updatedTask = task.filter((elem, idx) => {
      return idx !== index
    })

    setTask(updatedTask)
  }

  return (
    <div className='min-h-screen bg-slate-950 text-white'>

      {/* Top Section */}
      <div className='relative flex flex-col lg:flex-row justify-evenly'>

        {/* Logo - Mobile */}
        <div className='flex justify-center pt-4 mb-2 lg:hidden'>
          <img
            src="https://static.vecteezy.com/system/resources/previews/016/731/807/original/notes-3d-icon-png.png"
            alt="Notes"
            className='w-24 h-24 sm:w-32 sm:h-32'
          />
        </div>

        {/* Left Side */}
        <div className='w-full lg:w-1/2'>

          {/* Form */}
          <form
            onSubmit={submitHandler}
            className='w-full flex items-start justify-center p-6 sm:p-10'
          >

            <div className='flex w-full sm:w-3/4 lg:w-1/2 items-start flex-col gap-4'>

              {/* Title */}
              <input
                type="text"
                placeholder="Enter Notes Heading"
                className='border border-slate-700 bg-slate-900 text-white placeholder-slate-500 font-medium w-full px-5 py-3 outline-none rounded-xl focus:border-violet-500 focus:ring-1 focus:ring-violet-500'
                value={title}
                onChange={(e) => {
                  setitle(e.target.value)
                }}
              />

              {/* Detail */}
              <textarea
                placeholder='Enter Detail'
                className='border border-slate-700 bg-slate-900 text-white placeholder-slate-500 font-medium h-32 w-full px-5 py-3 outline-none rounded-xl resize-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500'
                value={detail}
                onChange={(e) => {
                  setDetail(e.target.value)
                }}
              ></textarea>

              {/* Add Button */}
              <button
                type="submit"
                className='px-5 py-3 w-full font-semibold bg-violet-600 hover:bg-violet-500 active:scale-95 transition-all duration-200 text-white rounded-xl shadow-lg shadow-violet-500/20'
              >
                Add Notes
              </button>

            </div>

          </form>

        </div>

        {/* Logo - Desktop */}
        <div className='hidden lg:block absolute top-4 right-4'>
          <img
            src="https://static.vecteezy.com/system/resources/previews/016/731/807/original/notes-3d-icon-png.png"
            alt="Notes"
            className='w-24 h-24 sm:w-32 sm:h-32'
          />
        </div>

      </div>


      {/* Recent Notes */}
      <div className='w-full px-6 sm:px-10 pb-10'>

        <h4 className='mb-6 flex justify-center text-3xl font-bold text-violet-400'>
          Recent Notes
        </h4>

        {/* Notes Container */}
        <div className='flex flex-wrap gap-6 w-full'>

          {task.map(function (elem, idx) {

            return (
              <div
                key={idx}
                className='h-[280px] w-40 shrink-0 rounded-2xl bg-slate-900 border border-slate-700 p-4 flex flex-col'
              >

                {/* Note Title */}
                <h3 className='font-bold text-lg text-violet-400 mb-3 break-words'>
                  {elem.title}
                </h3>

                {/* Note Detail */}
                <p className='text-slate-300 text-sm leading-6 break-words'>
                  {elem.detail}
                </p>

                {/* Delete Button */}
                <button
                  onClick={() => deleteNote(idx)}
                  className='mt-auto w-full py-2 bg-red-600 hover:bg-red-500 active:scale-95 transition-all duration-200 text-white rounded-lg'
                >
                  Delete
                </button>

              </div>
            )

          })}

        </div>

      </div>

    </div>
  )
}

export default App