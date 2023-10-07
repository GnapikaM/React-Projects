import React, { useEffect, useState } from 'react';

const Todos = () => {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const handleAddTask = () => {
        if(newTask.trim() !== '') {
            setTasks([...tasks, { text: newTask, completed: false }])
            setNewTask('');
        }
    };

    const handleUpdatedTask = (index) => {
        const updatedTasks = tasks.map((task, i) => 
            i === index ? { ...task, completed: !task.completed } : task
        )
        setTasks(updatedTasks);
    }

    const handleDeleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i!== index);
        setTasks(updatedTasks);
    }

    return (
        <div>
            <h1>Todo List App</h1>   
            <div className='input'>
                <input 
                    type="text" 
                    value={newTask}
                    onChange={e => setNewTask(e.target.value)}
                />
                <button onClick={handleAddTask}>Add Task</button>
            </div>
            <div className="tasks">
                <ul>
                    {tasks.map((task, index) => (
                        <li key={index}>
                            <input 
                                type='checkbox'
                                checked={task.completed}
                                onChange={() => handleUpdatedTask(index)}
                            />
                            <span 
                                style={{ textDecoration: task.completed ? 'line-through' : 'none'}}
                            >
                                {task.text}
                            </span>
                            <button onClick={() => handleDeleteTask(index)}>Delete</button>
                        </li>
                    ))}
                </ul>   
            </div>    
        </div>
    )
}

export default Todos
