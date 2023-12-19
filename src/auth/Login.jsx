import React, { useContext, useEffect, useState } from 'react';
import AuthContext from './authContext';

function Login(props) {
    const [formData, setFormData] = useState();
    const { login, message, setMessage } = useContext(AuthContext);




    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const submitForm = async (e) => {
        e.preventDefault();
        login(formData);
    }


    useEffect(() => {
        setMessage("");
    }, [])

    return (
        <form>
            <div className='mb-3'>
                <label className='form-label'>Email</label>
                <input type="email" className='form-control' name='email' onChange={handleChange} />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Password</label>
                <input type="password" className='form-control' name='password' onChange={handleChange} />
            </div>
            <p>{message}</p>
            <button className='btn btn-primary' onClick={submitForm}>Login</button>
        </form>
    );
}

export default Login;