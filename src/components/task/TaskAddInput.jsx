import React from 'react'

const TaskAddInput = ({inputText, setInputText, taskList, setTaskList}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputText === ""){
          return;
        }
        //カードを追加する
        setTaskList([...taskList, 
            {
                text: inputText,
                id: taskList.length,
                draggableId: `task-${taskList.length}`
            }
        ]);
        setInputText("");
    }

    const handleChange = (e) => {
        setInputText(e.target.value);
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input className="taskAddInput" type="text" placeholder='add a task' onChange={handleChange} value={inputText} />
      </form>
    </div>
  )
}

export default TaskAddInput
