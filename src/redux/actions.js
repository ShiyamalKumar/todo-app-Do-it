export const addTask = (task) => ({
    type: 'ADD_TASK',
    payload: task,
});

export const deleteTask = (taskId) => ({
    type: 'DELETE_TASK',
    payload: taskId,
});

export const completeTask = (taskId) => ({
    type: 'COMPLETE_TASK',
    payload: taskId,
});
export const updateTask = (taskId, updatedTask, updatedDescription) => {
    return {
        type: 'UPDATE_TASK',
        payload: { taskId, updatedTask, updatedDescription },
    };
};