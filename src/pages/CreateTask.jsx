import React from 'react';
import TaskForm from '../components/TaskForm';

function CreateTask(props) {
    return (
        <div className='container-fluid h-100'>
            <div className="row h-100">
                <div className="col-lg-6 d-flex justify-content-center align-items-center h-100 bg-primary text-white flex-column">
                    <TaskForm />
                </div>

                <div className="col-lg-6 d-flex justify-content-center align-items-center h-100 flex-column">

                    <div className="card w-75">
                        <div className="card-body">

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default CreateTask;