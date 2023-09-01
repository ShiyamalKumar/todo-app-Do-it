import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTask } from '../redux/actions';

const TaskList = ({ tasks, onDeleteTask, onCompleteTask }) => {
    const dispatch = useDispatch();
    const [editingTaskId, setEditingTaskId] = useState(null);
    const [editedTask, setEditedTask] = useState('');
    const [editedDescription, setEditedDescription] = useState('');

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
        dispatch(updateTask(task.id, editedTask, editedDescription));
        setEditingTaskId(null);
        setEditedTask('');
        setEditedDescription('');
    };

    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id}>
                    {editingTaskId === task.id ? (
                        <div>
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
                            <button onClick={() => handleSaveEdit(task)}>Save</button>
                            <button onClick={handleEditCancel}>Cancel</button>
                        </div>
                    ) : (
                        <div>
                            <h3 className={task.completed ? 'completed' : ''}>{task.task}</h3>
                            <p>{task.description} id value{task.id}</p>
                            <button onClick={() => onCompleteTask(task.id)}>Complete</button>
                            <button onClick={() => handleEditClick(task)}>Edit</button>
                            <button onClick={() => onDeleteTask(task.id)}>Delete</button>
                        </div>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default TaskList;
