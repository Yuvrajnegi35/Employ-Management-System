import React from 'react'

const TaskListNumbers = ({ data }) => {
  const { newTask, completed, active, failed } = data.taskCounts

  const cards = [
    { title: 'New Task', count: newTask, bg: 'bg-blue-400' },
    { title: 'Completed Task', count: completed, bg: 'bg-green-400' },
    { title: 'Accepted Task', count: active, bg: 'bg-yellow-400', textColor: 'text-black' },
    { title: 'Failed Task', count: failed, bg: 'bg-red-400' },
  ]

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10'>
      {cards.map((card, index) => (
        <div
          key={index}
          className={`rounded-xl py-6 px-9 ${card.bg} ${card.textColor || 'text-white'}`}
        >
          <h2 className='text-3xl font-bold'>{card.count}</h2>
          <h3 className='text-xl mt-0.5 font-medium'>{card.title}</h3>
        </div>
      ))}
    </div>
  )
}

export default TaskListNumbers
