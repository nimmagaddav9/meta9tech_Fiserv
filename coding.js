//  I will give u a dataset , where I want two parameters where I want
// an output based on given parameters .
// first parameter : ascending and descending order
// second parameter : odd,even and prime .
//   give me an output ascending order and prime number or descending order
// and odd number.

import React, { useState } from "react";
//user input
const data = [10, 3, 7, 8, 15, 2, 5, 12, 9];
// Utility functions
const isPrime = (num) => {
  if (num < 2) return false; //prime number
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const filterNumbers = (numbers, type) => {
  switch (type) {
    case "odd":
      return numbers.filter((num) => num % 2 !== 0);
    case "even":
      return numbers.filter((num) => num % 2 === 0);
    case "prime":
      return numbers.filter((num) => isPrime(num));
    default:
      return numbers;
  }
};

const sortNumbers = (numbers, order) => {
  return [...numbers].sort((a, b) => (order === "asc" ? a - b : b - a));
};

const App = () => {
  const [order, setOrder] = useState("asc");
  const [filter, setFilter] = useState("prime");

  const data = [10, 3, 7, 8, 15, 2, 5, 12, 9];

  const filtered = filterNumbers(data, filter);
  const result = sortNumbers(filtered, order);

  return (
    <div style={{ padding: "20px" }}>
      <h3>Filter and Sort Numbers</h3>

      <div>
        <label>Sort Order: </label>
        <select value={order} onChange={(e) => setOrder(e.target.value)}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>

      <div>
        <label>Filter Type: </label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="odd">Odd</option>
          <option value="even">Even</option>
          <option value="prime">Prime</option>
        </select>
      </div>

      <h4>Result:</h4>
      <p>{result.join(", ")}</p>
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
