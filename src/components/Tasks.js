import { useState } from "react"

const Tasks = () => {
    const [tasks, setTasks] = useState()

    return (
        <>
          {tasks.map((task) => (<h3 key={task.id}>{task.text}</h3>))}  
        </>
    )
}

export default Tasks
