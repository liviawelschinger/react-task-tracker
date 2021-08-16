import { useState } from 'react'

const Tasks = () => {
  // state is immutable
  // call setTasks to change initial state instead of tasks.push()
  const [tasks, setTasks] = useState( [ // default
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Aug 23th at 2:00pm',
      reminder: true
    },
    {
      id: 2,
      text: 'Meeting with Alex',
      day: 'Aug 25th at 3:30pm',
      reminder: false
    },
    {
      id: 1,
      text: 'Appartment tour',
      day: 'Aug 26th at 4:00pm',
      reminder: true
    }
  ])
  return (
    <div>
      {tasks.map((task) => (<h3 key={task.id}>{task.text}</h3>))}
    </div>
  )
}

export default Tasks
