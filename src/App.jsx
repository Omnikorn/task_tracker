import React from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react"
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask]= useState(false)
  const [tasks, setTasks] = useState([{
    id: 1,
    text: "Doctors app",
    day: "wednesday 7th at 2pm",
    reminder: true
  },
    {
      id: 2,
      text: "kikis birthday",
      day: "friday  9th at 6pm",
      reminder: true
    },
    {
      id: 3,
      text: "hair cut",
      day: "Saturday 10th at 9am",
      reminder: false
    }])
    // adding a task
    const addTask = (task) => {
      const id= Math.floor(Math.random()*10000)+1
      const newTask = {id, ...task}
      setTasks([...tasks, newTask])
    } 


    //delete task
    const deleteTask = (id) =>{
      setTasks(tasks.filter((task)=> task.id !== id))
    }

    //toggle reminder
    const toggleReminder = (id) => {
      setTasks(tasks.map((task)=> task.id === id ?{...task,reminder: !task.reminder}: task))
    }

  return (
    <div className="container">
      <Header onAdd={()=>setShowAddTask(!showAddTask)}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>) : ("No Tasks to Show")}
    </div>
  );
}

export default App;
