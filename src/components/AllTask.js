import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';
import '../TaskForm.css';
import Modal from './Modal';
import TaskForm from './TaskForm';
import { useSelector } from 'react-redux/es/hooks/useSelector';

const ALLTask = () => {

    const [task, setTask] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('')
    const [dateValue, setDateValue] = useState(null);
    const todoList = useSelector(state => state.tasks)

    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        // if (task.trim() && description.trim()) {
        const data = { task, description, completed: false, createdDate: new Date(), dueDate: dateValue, priority }

        dispatch(addTask(data));
        setTask('');
        setDescription('');
        setDateValue(new Date())
        setPriority('')
        closeModal()
        // }
    };
    return (
        <div >
            <button onClick={openModal}>Add Task</button>
            <Modal isOpen={modalOpen} onClose={closeModal}>
                <TaskForm handleSubmit={handleSubmit} task={task} setTask={setTask} description={description} setDescription={setDescription} dateValue={dateValue} setDateValue={setDateValue} setPriority={setPriority} />
            </Modal>
            <div >
                {todoList?.map(({ completed, createdDate, description, dueDate, priority, task }, index) => <div key={index} style={{ display: "flex" }}>
                    <p>{index + 1}. </p>
                    <p>name: {task} </p>{" "}
                    <p>is completed: {completed} </p>{" "}
                    <p>created at: {createdDate.toLocaleString()} </p>{" "}
                    <p>description: {description} </p>{" "}
                    <p>Due: {dueDate.toLocaleString()} </p>{" "}
                    <p>Priority: {priority} </p>{" "}
                </div>)}
            </div>
        </div>
    );
};

export default ALLTask;
