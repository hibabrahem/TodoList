import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './redux/slices/taskSlices';

export const store = configureStore({
    reducer: {
        tasks: taskReducer, // Use 'tasks' as the slice name
        // Add other reducers here if needed
    },
});
