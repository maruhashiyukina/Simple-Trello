import React from 'react'
import TaskAddInput from './TaskAddInput'
import TaskCardTitle from './TaskCardTitle'
import Tasks from './Tasks'
import { useState } from 'react'

const TaskCard = ({taskCardsList, setTaskCardsList, taskCard, index}) => {
    const [inputText, setInputText] = useState("");
    const [taskList, setTaskList] = useState([]);

    const taskCardDeleteButton = (taskCard) => {
        setTaskCardsList(taskCardsList.filter((e) => (e.id !== taskCard.id)));
      };
    
  return (
    <div className="taskCard">
        <div className='taskCardTitleAndTaskCardDeleteButtonArea'>
            <TaskCardTitle />
            <div>
                <button className='taskCardDeleteButton' onClick={() => taskCardDeleteButton(taskCard)}>
                    <i className="fa-solid fa-xmark"></i>
                </button>
            </div>
        </div>
        <TaskAddInput inputText={inputText} setInputText={setInputText} taskList={taskList} setTaskList={setTaskList} />
        <Tasks inputText={inputText} taskList={taskList} setTaskList={setTaskList} />
    </div>
  )
};

export default TaskCard
