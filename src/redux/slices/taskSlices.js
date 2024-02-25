import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tasks: [], // Initialize tasks as an empty array
};

export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload);
        },
        toggleTask: (state, action) => {
            const { id } = action.payload;
            const task = state.tasks.find(task => task.id === id);
            if (task) {
                task.isDone = !task.isDone;
            }
        },
        editTask: (state, action) => {
            const { id, description } = action.payload;
            const task = state.tasks.find(task => task.id === id);
            if (task) {
                task.description = description;
            }
        },
        deleteTask: (state, action) => {
            const { id } = action.payload;
            state.tasks = state.tasks.filter(task => task.id !== id);
        },
    },
});

export const { addTask, toggleTask, editTask, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;
