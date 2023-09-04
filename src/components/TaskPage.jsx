import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, completeTask } from '../redux/actions';
import TaskList from './TaskList';
import FilterButton from './FilterButton';

const TaskPage = ({ filter }) => {
    const tasks = useSelector((state) => state.tasks);
    const [filteredTasks, setFilteredTask] = useState(tasks)
    const [activeFilter, setActiveFilter] = useState(null);
    const types = ['PRIORITY', 'START DATE', 'DUE DATE'];
    const dispatch = useDispatch();

    const handleDeleteTask = (taskId) => {
        dispatch(deleteTask(taskId));
    };

    const handleCompleteTask = (taskId) => {
        dispatch(completeTask(taskId));
    };

    const filteredTodos = (tasks) => {
        if (activeFilter === "PRIORITY") {
            const priorityMap = {
                HIGH: 1,
                MEDIUM: 2,
                LOW: 3,
            };

            return [...tasks].sort((a, b) => priorityMap[a.priority] - priorityMap[b.priority]);
        }
        else if (activeFilter === "START_DATE") {
            return [...tasks].sort((a, b) => a.createdDate - b.createdDate);
        }
        else if (activeFilter === "DUE_DATE") {
            return [...tasks].sort((a, b) => a.dueDate - b.dueDate);
        }
        else return tasks
    }

    useEffect(() => {
        const updatedTasks = filter == 'completed'
            ? tasks.filter((task) => task.completed)
            : filter == 'incomplete'
                ? tasks.filter((task) => !task.completed)
                : tasks;

        setFilteredTask(filteredTodos(updatedTasks))
        console.log(filter);
        console.log(tasks);

    }, [activeFilter, filter, tasks])
    return (
        <div>
            <h2>{filter === 'completed' ? 'Completed' : 'Incomplete'} Tasks</h2>
            <FilterButton
                types={types}
                activeFilter={activeFilter}
                setActiveFilter={setActiveFilter}
            />
            <TaskList
                tasks={filteredTasks}
                onDeleteTask={handleDeleteTask}
                onCompleteTask={handleCompleteTask}
            />
        </div>
    );
};

export default TaskPage;
