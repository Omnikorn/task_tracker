import React from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react"

function App() {
  
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

    //delete task
    const deleteTask = (id) =>{
      console.log("delete", id)
    }


  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
