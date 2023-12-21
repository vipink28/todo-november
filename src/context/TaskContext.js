import { createContext, useContext, useEffect, useState } from "react";
import AuthContext from "../auth/authContext";

const TaskContext = createContext();


export const TaskProvider = ({ children }) => {
    const { setMessage, user } = useContext(AuthContext);
    const [allTasks, setAllTasks] = useState(null);
    const [recentTasks, setRecentTasks] = useState(null);
    const [latestTask, setLatestTask] = useState(null);

    const createTask = async (formData) => {
        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        }

        const response = await fetch(`http://localhost:5000/tasks`, config);
        if (response.status === 201) {
            setMessage("Task created successfully");
        } else {
            setMessage("Something went wrong");
        }
    }

    //get all tasks
    const getAllTasks = async (id) => {
        const response = await fetch(`http://localhost:5000/tasks?userid=${id}`, { method: "GET" });
        if (response.ok) {
            const tasks = await response.json();
            setAllTasks(tasks);
            const recent = tasks.slice(-3);
            setRecentTasks(recent);
            const latest = tasks[tasks.length - 1];
            setLatestTask(latest);
        }
    }

    useEffect(() => {
        if (user) {
            getAllTasks(user.id);
        }
    }, [user])

    return (
        <TaskContext.Provider value={{
            createTask
        }}>
            {children}
        </TaskContext.Provider>
    )
}


export default TaskContext;