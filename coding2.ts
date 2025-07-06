//  I will give u a dataset , where I want two parameters where I want
// an output based on given parameters .
// first parameter : ascending and descending order
// second parameter : odd,even and prime .
//   give me an output ascending order and prime number or descending order
// and odd number.

import React, { useState, ChangeEvent } from 'react';

// Types
type FilterType = 'odd' | 'even' | 'prime';
type SortOrder = 'asc' | 'desc';

// Utility functions
const isPrime = (num: number): boolean => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const filterNumbers = (numbers: number[], type: FilterType): number[] => {
  switch (type) {
    case 'odd':
      return numbers.filter(num => num % 2 !== 0);
    case 'even':
      return numbers.filter(num => num % 2 === 0);
    case 'prime':
      return numbers.filter(num => isPrime(num));
    default:
      return numbers;
  }
};

const sortNumbers = (numbers: number[], order: SortOrder): number[] => {
  return [...numbers].sort((a, b) => (order === 'asc' ? a - b : b - a));
};

// Main Component
const App: React.FC = () => {
  const [order, setOrder] = useState<SortOrder>('asc');
  const [filter, setFilter] = useState<FilterType>('prime');

  const data: number[] = [10, 3, 7, 8, 15, 2, 5, 12, 9];

  const filtered = filterNumbers(data, filter);
  const result = sortNumbers(filtered, order);

  const handleOrderChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setOrder(e.target.value as SortOrder);
  };

  const handleFilterChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value as FilterType);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h3>Filter and Sort Numbers</h3>

      <div>
        <label>Sort Order: </label>
        <select value={order} onChange={handleOrderChange}>
          <option value='asc'>Ascending</option>
          <option value='desc'>Descending</option>
        </select>
      </div>

      <div>
        <label>Filter Type: </label>
        <select value={filter} onChange={handleFilterChange}>
          <option value='odd'>Odd</option>
          <option value='even'>Even</option>
          <option value='prime'>Prime</option>
        </select>
      </div>

      <h4>Result:</h4>
      <p>{result.join(', ')}</p>
    </div>
  );
};

export default App;


//output
// | Filter | Order      | Output         |
// | ------ | ---------- | -------------- |
// | Prime  | Ascending  | 2, 3, 5, 7     |
// | Prime  | Descending | 7, 5, 3, 2     |
// | Odd    | Descending | 15, 9, 7, 5, 3 |
// | Even   | Ascending  | 8, 10, 12      |
