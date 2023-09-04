import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';
import '../TaskForm.css';
import Modal from './Modal';
import TaskForm from './TaskForm';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import '../button.css';

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
        const data = { id: new Date().toString(), task, description, completed: false, createdDate: new Date(), dueDate: dateValue, priority }
        dispatch(addTask(data));
        setTask('');
        setDescription('');
        setDateValue(new Date())
        setPriority('')
        closeModal()
        // }
    };
    return (
        <div>
            <button className='addtaskbut' onClick={openModal}>Add Task</button>
            <div className='scrollable-div'>
                <Modal isOpen={modalOpen} onClose={closeModal}>
                    <TaskForm handleSubmit={handleSubmit} task={task} setTask={setTask} description={description} setDescription={setDescription} dateValue={dateValue} setDateValue={setDateValue} setPriority={setPriority} />
                </Modal>
                <div style={{ marginTop: "1rem" }}>
                    {todoList?.map(({ completed, createdDate, description, dueDate, priority, task }, index) => <div key={index} style={{ display: "flex", backgroundColor: "white", justifyContent: "space-between", width: "50%", padding: "0.8rem 1.6rem", margin: "auto", marginTop: "0.5rem", borderRadius: "10px" }}>
                        <div style={{ textAlign: "start" }}>
                            <p style={{ fontSize: "1.4rem" }}> {task} </p>
                            <p style={{ fontSize: "0.9rem" }}>{description}</p>
                        </div>
                        <div style={{ alignSelf: "end" }}>
                            {dueDate != null ? <p>Due: {dueDate.toDateString()} </p> : null}
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    );
};

export default ALLTask;
