import React, { useState } from "react";



function AddTasks({ addTask }) {

    // Each inputs should have a separate state. So creating separate states.

    //state for Task name
    const [text, setText] = useState('');
    //state for Day & Time
    const [day, setDay] = useState('');
    //state for Reminder checkbox
    const [reminder, setReminder] = useState(false);

    const submitTask = (e) => {
        e.preventDefault();

        if (!text) {
            alert('Please add a task')
            return
        }
        addTask({ text, day, reminder })

        setText('');
        setDay('');
        setReminder(false);

    }

    return (
        <form action="" className="add-form" onSubmit={submitTask}>
            <div className="form-control">
                <label htmlFor="task">Task</label>
                <input type="text" name="" id="task" placeholder="Add Task" value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className="form-control">
                <label htmlFor="day-time">Day & Time</label>
                <input type="text" name="" id="day-time" placeholder="Add Day & Time" value={day} onChange={(e) => setDay(e.target.value)} />
            </div>
            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input type="checkbox" checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>
            <input type="submit" className="btn btn-block" value="Save Task" />
        </form>
    );
}

export default AddTasks;
