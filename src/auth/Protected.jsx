import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Protected({ children }) {

    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const checkLocalUser = () => {
        const localUser = localStorage.getItem("todouser");
        if (!localUser) {
            navigate('/');
        } else {
            setIsLoggedIn(true);
        }
    }

    useEffect(() => {
        checkLocalUser();
    }, [])

    return (
        <div>
            {isLoggedIn ? children : "no data"}
        </div>
    );
}

export default Protected;