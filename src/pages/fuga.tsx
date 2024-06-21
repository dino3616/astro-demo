import { useState } from 'react';

export const Fuga = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>fuga</h1>
      <p>{count}</p>
      <button type='button' onClick={() => setCount(count + 1)}>
        increment
      </button>
    </div>
  );
};
