const tasks = [{
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
}]

const Tasks = () => {
    return (
        <>
            {tasks.map((task) => {
                return (<h3>{task.text}</h3>)
            })}
        </>
    )
}

export default Tasks