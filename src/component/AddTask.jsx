// AddTask.jsx

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/slices/taskSlices';

const AddTask = () => {
    const dispatch = useDispatch();
    const [description, setDescription] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (description.trim() === '') return;
        dispatch(addTask({ description, isDone: false }));
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={description} onChange={e => setDescription(e.target.value)} />
            <button type="submit">Add Task</button>
        </form>
    );
};

export default AddTask;
