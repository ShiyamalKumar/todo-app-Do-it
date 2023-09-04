import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTask } from '../redux/actions';
import '../styles.css';
import 'font-awesome/css/font-awesome.min.css';
import '../TaskForm.css';


const TaskList = ({ tasks, onDeleteTask, onCompleteTask }) => {
    const dispatch = useDispatch();
    const [editingTaskId, setEditingTaskId] = useState(null);
    const [editedTask, setEditedTask] = useState('');
    const [editedDescription, setEditedDescription] = useState('');
    const [error, setError] = useState('')

    const handleEditClick = (task) => {
        setEditingTaskId(task.id);
        setEditedTask(task.task);
        setEditedDescription(task.description);
    };

    const handleEditCancel = () => {
        setEditingTaskId(null);
        setEditedTask('');
        setEditedDescription('');
    };


    const handleSaveEdit = (task) => {
        // Dispatch action to update task details
        if (editedTask.trim().length !== 0) {

            dispatch(updateTask(task.id, editedTask, editedDescription));
            setEditingTaskId(null);
            setEditedTask('');
            setEditedDescription('');
            setError('')
        }
        else setError('Task Name cannot be empty!!!')
    };

    return (
        <div className='scrollable-div'>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        {editingTaskId === task.id ? (
                            <div>
                                <p style={{ display: `${error.length === 0 ? "none" : "block"}` }}>{error.length === 0 ? null : error}</p>
                                <input
                                    type="text"
                                    value={editedTask}
                                    onChange={(e) => setEditedTask(e.target.value)}

                                />
                                <input
                                    type="text"
                                    value={editedDescription}
                                    onChange={(e) => setEditedDescription(e.target.value)}
                                />
                                <button className='button-30' onClick={() => handleSaveEdit(task)}>Save</button>
                                <button className='button-30' onClick={handleEditCancel}>Cancel</button>
                            </div>
                        ) : (
                            <div style={{ width: "50%", margin: "0 auto", marginTop: "0.5rem", paddingBottom: "0.5rem", border: `${task.priority == 'HIGH' ? '2px solid red' : task.priority == 'MEDIUM' ? '2px solid orange' : task.priority == "LOW" ? "2px solid yellow" : ""}` }}>
                                <h3 className={task.completed ? 'completed' : ''}>{task.task}</h3>
                                {/* <p>{task.description} id value{task.id}</p> */}
                                {!task.completed ? <button className='button-30-comp' onClick={() => onCompleteTask(task.id)}><i className="fa fa-check"></i></button> : null}
                                {!task.completed ? <button className='button-30-edit' onClick={() => handleEditClick(task)}><i className="fa fa-pencil"></i></button> : null}
                                <button className='button-30-delete' onClick={() => onDeleteTask(task.id)}><i className="fa fa-trash"></i></button>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
