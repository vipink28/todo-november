import React from 'react';
import illustration from '../assets/illustration.png';
import { Link, Outlet } from 'react-router-dom';

function Home(props) {
    return (
        <div className='container-fluid h-100'>
            <div className="row h-100">
                <div className="col-lg-6 d-flex justify-content-center align-items-center h-100 bg-primary text-white flex-column">
                    <h1 className='text-center display-2'>An app to make your life easy</h1>
                    <img className='img-fluid' src={illustration} alt="illustration" />
                </div>

                <div className="col-lg-6 d-flex justify-content-center align-items-center h-100 flex-column">

                    <div className="card w-75">
                        <div className="card-header d-flex">
                            <Link className='p-2 w-50' to="/login">Login</Link>
                            <Link className='p-2 w-50' to="/register">Register</Link>
                        </div>
                        <div className="card-body">
                            <Outlet />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Home;