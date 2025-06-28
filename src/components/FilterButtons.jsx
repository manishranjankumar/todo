import React from 'react';

const FilterButtons = ({ filter, setFilter }) => {
  const btnClass = (f) =>
    `px-3 py-1 rounded ${filter === f ? 'bg-blue-600 text-white' : 'bg-gray-200'} hover:bg-blue-500 hover:text-white`;

  return (
    <div className="flex justify-center gap-2 mb-4">
      <button onClick={() => setFilter('all')} className={btnClass('all')}>All</button>
      <button onClick={() => setFilter('completed')} className={btnClass('completed')}>Completed</button>
      <button onClick={() => setFilter('incomplete')} className={btnClass('incomplete')}>Incomplete</button>
    </div>
  );
};

export default FilterButtons;
