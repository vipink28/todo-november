import React, { useContext, useState } from 'react';
import AuthContext from '../auth/authContext';
import TaskContext from '../context/TaskContext';

function TaskForm(props) {
    const { message } = useContext(AuthContext);
    const { createTask } = useContext(TaskContext);

    const [formData, setFormData] = useState(null);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const onCreate = (e) => {
        e.preventDefault();
        createTask(formData);
    }

    return (
        <div className='p-2 w-50'>
            <h3 className='text-white'>Create Task</h3>
            <div className="card">
                <div className="card-body">
                    <form>
                        <div className="mb-3">
                            <label className='form-label'>Title</label>
                            <input type="text" name='title' className='form-control' onChange={handleChange} />
                        </div>

                        <div className="mb-3">
                            <label className='form-label'>Description</label>
                            <textarea name="description" rows="10" className='form-control' onChange={handleChange}></textarea>
                        </div>

                        <div className="mb-4">
                            <label className='form-label'>Due Date</label>
                            <input type="datetime-local" name='duedate' className='form-control' onChange={handleChange} />
                        </div>
                        <p>{message}</p>
                        <button className='btn btn-primary' onClick={onCreate}>Create Task</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default TaskForm;