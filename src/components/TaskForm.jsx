import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../auth/authContext';
import TaskContext from '../context/TaskContext';

function TaskForm(props) {
    const { isUpdate, data } = props;
    const { message, user } = useContext(AuthContext);
    const { createTask } = useContext(TaskContext);


    const [formData, setFormData] = useState(null);

    useEffect(() => {
        if (isUpdate) {
            setFormData(data);
        }
    }, [isUpdate])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
            userid: user.id,
            modifiedon: Date()
        }))
    }

    const onCreate = (e) => {
        e.preventDefault();
        createTask(formData);
    }

    return (
        <div className='p-2 w-50'>
            <h3 className='text-white'>{isUpdate ? "Update Task" : "Create Task"}</h3>
            <div className="card">
                <div className="card-body">
                    <form>
                        <div className="mb-3">
                            <label className='form-label'>Title</label>
                            <input type="text" name='title' className='form-control' value={formData?.title} onChange={handleChange} />
                        </div>

                        <div className="mb-3">
                            <label className='form-label'>Description</label>
                            <textarea name="description" rows="10" className='form-control' value={formData?.description} onChange={handleChange}></textarea>
                        </div>

                        <div className="mb-4">
                            <label className='form-label'>Due Date</label>
                            <input type="datetime-local" name='duedate' className='form-control' value={formData?.duedate} onChange={handleChange} />
                        </div>
                        <p>{message}</p>
                        {isUpdate ?
                            <>
                                <button className='btn btn-primary me-2'>Update Task</button>
                                <button className='btn btn-warning'>Cancel</button>
                            </> :
                            <button className='btn btn-primary' onClick={onCreate}>Create Task</button>
                        }
                    </form>
                </div>
            </div>
        </div>
    );
}

export default TaskForm;