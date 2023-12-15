import React, { useState } from 'react';

function Login(props) {
    const [formData, setFormData] = useState();
    const [message, setMessage] = useState("");
    const { set } = props;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const submitForm = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:5000/users?email=${formData.email}&password=${formData.password}`, { method: "GET" });
        const users = await response.json();
        if (users.length > 0) {
            setMessage("logged in successfully");
            localStorage.setItem("todouser", JSON.stringify(users[0]));
            set(users[0]);
        } else {
            setMessage("something went wrong");
        }
    }

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