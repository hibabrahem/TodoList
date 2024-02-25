import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

const ListTask = () => {
    const { tasks } = useSelector(state => state.tasks);
    const [filter, setFilter] = useState('');

    const filteredTasks = tasks.filter(task => {
        if (filter === '') return true;
        const isDoneText = task.isDone ? 'done' : 'not done';
        return isDoneText.includes(filter.toLowerCase());
    });

    return (
        <div>
            <input
                type="text"
                value={filter}
                onChange={e => setFilter(e.target.value)}
                placeholder="Filter by done/not done"
            />
            <ul>
                {filteredTasks.map(task => (
                    <Task key={task.id} task={task} />
                ))}
            </ul>
        </div>
    );
};

export default ListTask;
