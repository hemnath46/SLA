import { useState } from "react";

const TodoApp2 = () => {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);

    // Add task
    const addTask = () => {
        if (task.trim() === "") return;

        const newTask = {
            text: task,
            completed: false
        };

        setTasks([...tasks, newTask]);
        setTask("");
    };

    // Toggle completed
    const toggleComplete = (index) => {
        const updated = [...tasks];
        updated[index].completed = !updated[index].completed;
        setTasks(updated);
    };

    // Delete task
    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    return (
        <div style={{ padding: 20 }}>
            <h2>Todo App with Completed Feature</h2>

            <input
                type="text"
                value={task}
                placeholder="Enter task"
                onChange={(e) => setTask(e.target.value)}
            />

            <button onClick={addTask}>Add</button>

            <ul>
                {tasks.map((item, index) => (
                    <li key={index}>
                        <input
                            type="checkbox"
                            checked={item.completed}
                            onChange={() => toggleComplete(index)}
                        />

                        <span
                            style={{
                                textDecoration: item.completed ? "line-through" : "none"
                            }}
                        >
                            {item.text}
                        </span>

                        <button onClick={() => deleteTask(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoApp2;
