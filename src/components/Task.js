import React from "react";
import { FaTimes } from 'react-icons/fa'

const Task = ({ task, setTasks, deleteTask, onToggle }) => {
    return (
        <div key={task.id} className={`task ${task.reminder? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
            {/* Passing argument */}
            {/* <h3 onClick={setTasks}>{task.text} <FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={() => deleteTask(task.id)} /></h3> */}
            {/* Removing h3 onClick for delete task operation on Icon Click */}
            <h3>{task.text} <FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={() => deleteTask(task.id)} /></h3>
            <p>{task.day}</p>
        </div>
    );
};

export default Task;
