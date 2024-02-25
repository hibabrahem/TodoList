import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, deleteTask, editTask } from '../redux/slices/taskSlices';

const Task = ({ task }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedDescription, setEditedDescription] = useState(task.description);
    const dispatch = useDispatch();

    const handleToggle = () => {
        dispatch(toggleTask({ id: task.id }));
    };

    const handleDelete = () => {
        dispatch(deleteTask({ id: task.id }));
    };

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    const handleEditSubmit = () => {
        dispatch(editTask({ id: task.id, description: editedDescription }));
        setIsEditing(false);
    };

    return (
        <div>
            {isEditing ? (
                <>
                    <input type="text" value={editedDescription} onChange={(e) => setEditedDescription(e.target.value)} />
                    <button onClick={handleEditSubmit}>Save</button>
                    <button onClick={handleEditToggle}>Cancel</button>
                </>
            ) : (
                <>
                    <input type="checkbox" checked={task.isDone} onChange={handleToggle} />
                    <span>{task.description}</span>
                    <button onClick={handleEditToggle}>Edit</button>
                    <button onClick={handleDelete}>Delete</button>
                </>
            )}
        </div>
    );
};

export default Task;
