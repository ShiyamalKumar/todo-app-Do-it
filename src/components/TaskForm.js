import React from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TaskForm = ({ handleSubmit, task, setTask, description, setDescription, dateValue, setDateValue, setPriority }) => {
    const options = ['LOW', 'MEDIUM', 'HIGH'];
    return (

        <form onSubmit={handleSubmit}>
            <div className="user-box">
                <input
                    type="text"
                    name="task"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    required
                />
                <label>Task</label>
            </div>
            <div className="user-box">
                <input
                    type="text"
                    name="description (optional)"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <label>Description</label>
            </div>
            <div className="user-box">
                <select onChange={(e) => setPriority(e.target.value)}>

                    <option value={""}>none</option>
                    {options.map((option, index) => {
                        return <option key={index} >
                            {option}
                        </option>
                    })}
                </select>
                <label>Priority</label>
            </div>
            <div className="user-box" style={{ marginRight: "-2rem" }}>
                <DatePicker selected={dateValue} onChange={(date) => setDateValue(date)} />
                <label>Due Date</label>
            </div>
            <button type="submit">Add Task</button>
        </form>
    )
}

export default TaskForm