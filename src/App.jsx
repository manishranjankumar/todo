import React, { useEffect, useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import FilterButtons from './components/FilterButtons';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  // Load from localStorage on mount
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(saved);
  }, []);

  // Save to localStorage on update
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => setTasks([...tasks, task]);

  const toggleComplete = (id) =>
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));

  const deleteTask = (id) =>
    setTasks(tasks.filter(task => task.id !== id));

  const filteredTasks = tasks.filter(task =>
    filter === 'completed' ? task.completed :
    filter === 'incomplete' ? !task.completed :
    true
  );

  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <div className="max-w-xl mx-auto bg-white rounded-xl shadow-md p-6">
        <h1 className="text-3xl font-bold text-center mb-4">ToDo List</h1>
        <TaskForm onAdd={addTask} />
        <FilterButtons filter={filter} setFilter={setFilter} />
        <TaskList
          tasks={filteredTasks}
          onToggle={toggleComplete}
          onDelete={deleteTask}
        />
      </div>
    </div>
  );
};

export default App;
