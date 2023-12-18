import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
    const [message, setMessage] = useState();
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    //register user
    const registerUser = async (formData) => {
        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        }

        const checkUser = await fetch(`http://localhost:5000/users?email=${formData.email}`, { method: 'GET' });

        const users = await checkUser.json();

        if (users.length > 0) {
            alert("user already exist");
        } else {
            const response = await fetch(`http://localhost:5000/users`, config);
            if (response.status === 201) {
                const user = await response.json();
                setMessage("Registered Successfully");
                localStorage.setItem("todouser", JSON.stringify(user));
                setUser(user);
                navigate('/task-list');
            } else {
                setMessage("something went wrong");
            }
        }

    }

    //login
    const login = async (formData) => {
        const response = await fetch(`http://localhost:5000/users?email=${formData.email}&password=${formData.password}`, { method: "GET" });
        const users = await response.json();
        if (users.length > 0) {
            setMessage("logged in successfully");
            localStorage.setItem("todouser", JSON.stringify(users[0]));
            setUser(users[0]);
            setTimeout(() => {
                navigate('/task-list');
            }, 3000);

        } else {
            setMessage("something went wrong");
        }
    }

    const logout = () => {
        localStorage.removeItem("todouser");
        setUser(null);
        navigate('/');
    }

    useEffect(() => {
        const localUser = localStorage.getItem("todouser");
        if (localUser) {
            const user = JSON.parse(localUser);
            setUser(user);
        }
    }, [])


    return (
        <AuthContext.Provider value={{
            registerUser,
            login,
            message,
            setMessage,
            user,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthContext;