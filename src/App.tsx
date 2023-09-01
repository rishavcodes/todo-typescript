import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import TaskList from './Components/TaskList';
import HomePage from './Components/HomePage';
import AboutPage from './Components/AboutPage';
import { Task } from './types';
import './App.css';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [error, setError] = useState<string>('');

  // Simulate fetching tasks from an API
  useEffect(() => {
    setError('');
    // You can keep this try-catch block to handle errors while fetching tasks if needed
    try {
      // Simulate an error for demonstration purposes (remove this in a real application)
      if (Math.random() < 0.2) {
        throw new Error('An error occurred while fetching tasks.');
      }

      // In a real application, you might fetch tasks from an API here
      // For now, we'll start with an empty task list
      setTasks([]);
    } catch (error) {
      let errorMessage = "Failed to do something exceptional";
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      console.log(errorMessage);
    }
  }, []);


  const handleTaskAdd = (task: Task) => {
    setTasks(prevTasks => [...prevTasks, task]);
  };

  const handleTaskStatusChange = (taskId: number) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, isComplete: !task.isComplete } : task
      )
    );
  };

  const handleTaskRemove = (taskId: number) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  };

  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <ul>
            <li>
              <Link className='nav-item' to="/">Task List</Link>
            </li>
            <li>
              <Link className='nav-item' to="/home">Home</Link>
            </li>
            <li>
              <Link className='nav-item' to="/about">About</Link>
            </li>
          </ul>
        </nav>
        {error && <div className="error">{error}</div>}
        <Routes>
        <Route path="/" element={
          <TaskList
          tasks={tasks}
          onTaskStatusChange={handleTaskStatusChange}
          onTaskRemove={handleTaskRemove}
          onTaskAdd={handleTaskAdd}
        />
        }>
          
        </Route>
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
