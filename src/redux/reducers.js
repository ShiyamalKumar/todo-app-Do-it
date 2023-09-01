const initialState = {
    tasks: [
        { task: "task 1", description: "e23", completed: false, createdDate: new Date("2023-09-13"), dueDate: new Date("2024-10-03"), priority: "HIGH" },
        { task: "task 2", description: "e234", completed: false, createdDate: new Date("2023-10-13"), dueDate: new Date("2024-07-13"), priority: "LOW" },
        { task: "task 3", description: "e235", completed: false, createdDate: new Date("2023-06-13"), dueDate: new Date("2024-10-03"), priority: "MEDIUM" },
        { task: "task 4", description: "e2363", completed: false, createdDate: new Date("2023-10-23"), dueDate: new Date("2024-08-13"), priority: "LOW" }

    ],
};


const rootReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                tasks: [action.payload, ...state.tasks],
            };
        case 'DELETE_TASK':
            return {
                ...state,
                tasks: state.tasks.filter((task) => task.id !== action.payload),
            };
        case 'COMPLETE_TASK':
            return {
                ...state,
                tasks: state.tasks.map((task) =>
                    task.id === action.payload ? { ...task, completed: true } : task
                ),
            };
        case 'UPDATE_TASK':
            return {
                ...state,
                tasks: state.tasks.map((task) =>
                    task.id === action.payload.taskId
                        ? {
                            ...task,
                            task: action.payload.updatedTask,
                            description: action.payload.updatedDescription,
                        }
                        : task
                ),
            };

        default:
            return state;
    }
};

export default rootReducer;
