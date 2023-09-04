import React from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TaskForm = ({ handleSubmit, task, setTask, description, setDescription, dateValue, setDateValue, setPriority }) => {
    const options = ['LOW', 'MEDIUM', 'HIGH'];
    return (

        <form onSubmit={handleSubmit}>
            <div className="user-box">
                <label >Task</label>
                <input
                    type="text"
                    name="task"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    required
                    placeholder='name of the task'
                />

            </div>
            <div className="user-box">
                <label>Description</label>
                <input
                    type="text"
                    name="description (optional)"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder='about your task'
                />

            </div>
            <div className="user-box">
                <label>Priority</label>
                <select onChange={(e) => setPriority(e.target.value)}>

                    <option value={""}>none</option>
                    {options.map((option, index) => {
                        return <option key={index} >
                            {option}
                        </option>
                    })}
                </select>

            </div>
            <div className="user-box">
                <label>Due Date</label>
                <DatePicker selected={dateValue} onChange={(date) => setDateValue(date)} startDate={new Date()} />
            </div>
            <button type="submit">Add Task</button>
        </form>
    )
}

export default TaskForm