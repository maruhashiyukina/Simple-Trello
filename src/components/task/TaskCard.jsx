import React from 'react'
import TaskCardDeleteButton from './button/TaskCardDeleteButton'
import TaskAddInput from './TaskAddInput'
import TaskCardTitle from './TaskCardTitle'
import Tasks from './Tasks'
import { useState } from 'react'

const TaskCard = () => {
    const [inputText, setInputText] = useState("");
    const [taskList, setTaskList] = useState([])
  return (
    <div className="taskCard">
      <TaskCardTitle />
      <TaskCardDeleteButton />
      <TaskAddInput inputText={inputText} setInputText={setInputText} taskList={taskList} setTaskList={setTaskList} />
      <Tasks inputText={inputText} taskList={taskList} setTaskList={setTaskList} />
    </div>
  )
}

export default TaskCard