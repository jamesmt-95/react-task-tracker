// import React from 'react'
import React, { useState } from "react";
import Task from "./Task";
// const tasks = [
//     {
//         id: 1,
//         text: "Doctors Appointment",
//         day: "Feb 5th at 2:30pm",
//         reminder: true,
//     },
//     {
//         id: 2,
//         text: "Meeting at School",
//         day: "Feb 6th at 1:30pm",
//         reminder: true,
//     },
//     {
//         id: 3,
//         text: "Grocery Shopping",
//         day: "Feb 5th at 2:30pm",
//         reminder: false,
//     },
// ];

//============== It's a best practice to Lift state up to the closest common parent ==============
// 'TasksState' - component created with state in it.
const TasksState = () => {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: "Doctors Appointment",
            day: "Feb 5th at 2:30pm",
            reminder: true,
        },
        {
            id: 2,
            text: "Meeting at School",
            day: "Feb 6th at 1:30pm",
            reminder: true,
        },
        {
            id: 3,
            text: "Grocery Shopping",
            day: "Feb 5th at 2:30pm",
            reminder: false,
        },
    ]);
    // To update state
    const updateTask = () => {
        const newState = tasks.map((task, index) => {
            if (task.id === 2) {
                return { ...task, text: "Meeting at Office" };
                //React requires state to be immutable. In other words,
                // we don't mutate state if we want to change it, instead we make a copy of it
                // and replace the old state with the new copy - that's immutability.
            }
            return task; //map function will add each item to newState, Also 2nd item will be updated.
        });
        setTasks(newState); // Or directly update setTasks([...tasks, {}])
    };

    // Then on a button click updateTask
    return (
        <div>
            {/* {tasks.map((task) => (<h3 key={task.id}>{task.text} : {task.reminder? 'True':'False'}</h3>))} */}
            {/* () - return  */}
            {tasks.map((task) => (
                <h3 key={task.id} onClick={updateTask}>
                    {task.text} : {task.reminder ? "True" : "False"}
                </h3>
            ))}
        </div>
    );
};


// 'Tasks' - component created with state as props, also setTasks function. Check App.js file for more info.
const Tasks = ({ tasks, setTasks, deleteTask, onToggle }) => {
    return (
        <div>
            {tasks.map((task, index) => (
                // <h3 key={task.id} onClick={setTasks}>{task.text} : {task.reminder? 'True':'False'}</h3>
                // instead of rendering <h3> for each task, Component 'Task' is created.
                <Task key={index} task={task} setTasks={setTasks} deleteTask={deleteTask} onToggle={onToggle} />
            ))}
        </div>
    )
};


export default Tasks;
export { TasksState };

// export default TasksState;
