import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ data }) => {
  if (!data.tasks || data.tasks.length === 0) {
    return <div>No tasks available</div>
  }

  return (
    <div id='tasklist' className='h-[50%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-1 mt-16'>
      {data.tasks.map((elem) => {
        const key = elem.id || elem.taskTitle; // Use a unique identifier if possible

        if (elem.active) {
          return <AcceptTask key={key} data={elem} />
        }
        if (elem.newTask) {
          return <NewTask key={key} data={elem} />
        }
        if (elem.completed) {
          return <CompleteTask key={key} data={elem} />
        }
        if (elem.failed) {
          return <FailedTask key={key} data={elem} />
        }

        return null; // Return null if no conditions match (i.e., task is in an unknown state)
      })}
    </div>
  )
}

export default TaskList
