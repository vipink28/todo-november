import React, { useContext, useReducer } from 'react';
import { Link } from 'react-router-dom';
import TaskContext from '../context/TaskContext';
import { formatDate } from '../helper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEye as myEye } from '@fortawesome/free-regular-svg-icons';
import { secondFunction } from '../helper';
import myfunction from '../helper';
import Popup from '../components/Popup';


const reducer = (state, action) => {
    switch (action.type) {
        case "VIEW": return { type: "view", data: action.payload };
        case "EDIT": return { type: "edit", data: action.payload };
        case "DELETE": return { type: "delete", data: action.payload };
        default: return state;
    }
}

function TaskList(props) {
    const { allTasks } = useContext(TaskContext);
    const [state, dispatch] = useReducer(reducer, null);

    return (
        <div className='container'>
            <div className="bg-primary p-3 mt-4 text-white">
                <div className="d-flex">
                    <h3>Task List</h3>
                    <Link className='btn btn-info ms-auto' to="/create-task">Create Task</Link>
                </div>

                <div className='mt-3'>
                    <div className='row'>
                        <div className="col-lg-1">Sr.No.</div>
                        <div className="col-lg-3">Title</div>
                        <div className="col-lg-4">Description</div>
                        <div className="col-lg-2">Duedate</div>
                        <div className="col-lg-2">Actions</div>
                    </div>
                    {
                        allTasks?.map((task) => (
                            <div className='row py-2 mb-2 bg-dark'>
                                <div className="col-lg-1">{task?.id}</div>
                                <div className="col-lg-3">{task?.title}</div>
                                <div className="col-lg-4">{task?.description}</div>
                                <div className="col-lg-2">{formatDate(task?.duedate)}</div>
                                <div className="col-lg-2">
                                    <span className='px-2' data-bs-toggle="modal" data-bs-target="#task-popup" onClick={() => { dispatch({ type: "VIEW", payload: task }) }}>
                                        <FontAwesomeIcon icon={myEye} />
                                    </span>
                                    <span className='px-2' data-bs-toggle="modal" data-bs-target="#task-popup" onClick={() => { dispatch({ type: "EDIT", payload: task }) }}>
                                        <FontAwesomeIcon icon={faPenToSquare} />
                                    </span>
                                    <span className='px-2' data-bs-toggle="modal" data-bs-target="#task-popup" onClick={() => { dispatch({ type: "DELETE", payload: task }) }}>
                                        <FontAwesomeIcon icon={faTrash} />
                                    </span>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
            <Popup task={state} />
        </div>
    );
}

export default TaskList;