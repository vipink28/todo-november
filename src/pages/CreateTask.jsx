import React, { useContext, useState } from 'react';
import TaskForm from '../components/TaskForm';
import TaskContext from '../context/TaskContext';
import { formatDate } from '../helper';

function CreateTask(props) {

    const { latestTask, recentTasks } = useContext(TaskContext);
    const [isUpdate, setIsUpdate] = useState(false);

    const edit = () => {
        setIsUpdate(true);
    }

    return (
        <div className='container-fluid h-100'>
            <div className="row h-100">
                <div className="col-lg-6 d-flex justify-content-center align-items-center h-100 bg-primary text-white flex-column">
                    <TaskForm isUpdate={isUpdate} data={latestTask} />
                </div>

                <div className="col-lg-6 d-flex justify-content-center align-items-center h-100 flex-column">

                    <div className="card w-75 bg-primary">
                        <div className="card-body text-white">
                            <div className="d-flex align-items-center">
                                <h5>Latest Task</h5>
                                <button className='btn btn-info ms-auto' onClick={edit}>Edit</button>
                            </div>

                            <h4>{latestTask?.title}</h4>
                            <p>{latestTask?.description}</p>

                            <div className='d-flex align-items-center'>
                                <p className='text-warning'>DueDate : {formatDate(latestTask?.duedate)}</p>
                                <p className='text-warning ms-auto'>Modified On : {formatDate(latestTask?.modifiedon)}</p>
                            </div>

                        </div>
                    </div>

                    <div className="card w-75 bg-primary mt-4">
                        <div className="card-body text-white">
                            <div className="d-flex align-items-center">
                                <h5>Recent Tasks</h5>
                            </div>
                            {
                                recentTasks?.map((task) => (
                                    <div className='d-flex p-2 border border-warning'>
                                        <span>{task?.title}</span>
                                        <span className='ms-auto'>{formatDate(task?.duedate)}</span>
                                    </div>
                                ))
                            }

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default CreateTask;