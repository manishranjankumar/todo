import React from 'react';

const TaskList = ({ tasks, onToggle, onDelete }) => {
  if (tasks.length === 0) return <p className="text-center text-gray-500">No tasks to display.</p>;

  return (
    <ul className="space-y-2">
      {tasks.map(({ id, name, desc, completed }) => (
        <li key={id} className={`p-3 rounded shadow flex justify-between items-start ${completed ? 'bg-green-100' : 'bg-gray-50'}`}>
          <div className="flex-1">
            <h3 className={`font-semibold ${completed ? 'line-through text-gray-500' : ''}`}>
              {name}
            </h3>
            {desc && <p className="text-sm text-gray-600">{desc}</p>}
          </div>
          <div className="ml-4 space-x-2">
            <button
              onClick={() => onToggle(id)}
              className={`px-2 py-1 rounded text-white ${completed ? 'bg-yellow-500' : 'bg-green-500'} hover:opacity-80`}
            >
              {completed ? 'Undo' : 'Done'}
            </button>
            <button
              onClick={() => onDelete(id)}
              className="px-2 py-1 bg-red-500 text-white rounded hover:opacity-80"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
