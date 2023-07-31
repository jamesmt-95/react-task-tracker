// import logo from "./logo.svg";
// import "./App.css";

import React, { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTasks from "./components/AddTasks";

function Test() {
  const name = "James"
  const score = 80;
  return (
    <React.Fragment>
      <div className="App">
        <h1>Hello from React</h1>
      </div>
      <div className="User">
        <h1>Hello {name}</h1>
        <p>You have scored {0 + score}, Status is: {score > 60 ? 'Pass' : 'Fail'}</p>
      </div>
    </React.Fragment>
  );
}

function App() {
  //Taks created for Tasks Component.
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
  ])

  //SetTasks function for updating the state of Taks Component.
  const updateTasks = () => {
    const newTasks = tasks.map((task, index) => {
      console.log('called')
      if (task.id === 2) {
        return { ...task, text: 'Meeting at Office' }
      }
      return task;
    })
    setTasks(newTasks)
  }
  //Add task 
  const addTask = (task)=>{
    console.log(task)
  }

  //Function to delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, reminder: !task.reminder } : task)))
  }

  return (
    <div className="container">
      {/* <Header title={'Task Tracker'} name={'James'} age={'Age'}/> */}
      <Header title={'Task Tracker'} />
      <AddTasks addTask={addTask}/>
      {/* If no props given, defaultProps object will be used */}
      {tasks.length > 0 ? <Tasks tasks={tasks} setTasks={updateTasks} deleteTask={deleteTask} onToggle={toggleReminder} />
        :
        <p style={{ color: 'red' }}>No Tasks to show</p>
      }
    
    </div>
  )
}


export default App;
export { Test }

//We are not using logo.svg, app.css, app.test.js etc.. so commenting
