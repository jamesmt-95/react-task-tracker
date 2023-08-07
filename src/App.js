// import logo from "./logo.svg";
// import "./App.css";

import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTasks from "./components/AddTasks";
import Footer from './components/Footer';
import About from "./components/About";


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

  // useState with default value
  // const [tasks, setTasks] = useState([
  //   {
  //     id: 1,
  //     text: "Doctors Appointment",
  //     day: "Feb 5th at 2:30pm",
  //     reminder: true,
  //   },
  //   {
  //     id: 2,
  //     text: "Meeting at School",
  //     day: "Feb 6th at 1:30pm",
  //     reminder: true,
  //   },
  //   {
  //     id: 3,
  //     text: "Grocery Shopping",
  //     day: "Feb 5th at 2:30pm",
  //     reminder: false,
  //   },
  // ])

  // useState defined for Mock REST API with JSON Server
  const [tasks, setTasks] = useState([]);

  // ======= useEffect() function
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks();
  }, [])

  //function to fetch data from API
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();
    //console.log(data)
    return data
  }


  //fetch single task for toggle reminder
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json()
    return data;
  }

  //SetTasks function for updating the state of Taks Component.
  const updateTasks = () => {
    const newTasks = tasks.map((task, index) => {
      // console.log('called')
      if (task.id === 2) {
        return { ...task, text: 'Meeting at Office' }
      }
      return task;
    })
    setTasks(newTasks)
  }

  //State for toggling AddTask form
  const [formVisible, setFormVisible] = useState(false);

  //function to show/hide AddTasks Form
  const showForm = () => {
    setFormVisible(!formVisible)
  }

  //function to Add task
  const addTask = async (task) => {
    // console.log(task)

    //Adding new tasks using API Requests.
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'  //Since we're adding data, Headers with data type
      },
      body: JSON.stringify(task) //task is an object. So no need of {}
    });

    const data = await res.json()

    setTasks([...tasks, { ...data }]);


    // Function to add new task to useState,
    // setNewTask();
    function setNewTask() {
      const _id = (tasks.length) + 1; // Or Random Number
      const newTask = { _id, ...task };
      // setTasks([...tasks, { ...task }])
      setTasks([...tasks, { ...newTask }]);
    }
  }

  //Function to delete a task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    })
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //function to Toggle Reminder
  const toggleReminder = async (id) => {
    const fetchTaskData = await fetchTask(id);
    const updTask = { ...fetchTaskData, reminder: !fetchTaskData.reminder }

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updTask)
    })
    const data = await res.json()
    //setTasks(tasks.map((task) => (task.id === id ? { ...task, reminder: !task.reminder } : task)))
    setTasks(tasks.map((task) => (task.id === id ? { ...task, reminder: data.reminder } : task)))

  }

  return (
    <div className="container">
      {/* <Header title={'Task Tracker'} name={'James'} age={'Age'}/> */}
      <Header title={'Task Tracker'} showForm={showForm} formStatus={formVisible} />
      {formVisible && <AddTasks addTask={addTask} />}
      {/* {formVisible? <AddTasks addTask={addTask} /> : ''} */}
      {/* If no props given, defaultProps object will be used */}
      {tasks.length > 0 ? <Tasks tasks={tasks} setTasks={updateTasks} deleteTask={deleteTask} onToggle={toggleReminder} />
        :
        <p style={{ color: 'red' }}>No Tasks to show</p>
      }
      <Footer />
      <About/>
    </div>
  )
}


export default App;
export { Test }

//We are not using logo.svg, app.css, app.test.js etc.. so commenting
