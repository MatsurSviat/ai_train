'use client'
import React, { useState, useDeferredValue } from 'react';

const ExpensiveCalculationDisplay = ({ input }) => {
  // Simulate heavy calculation
  let t = 0;
  for (let i = 0; i < 1e7; i++) { // Slightly smaller loop for example
    t += i;
  }
  return <div>Result of expensive calculation: {t + input}</div>;
};

export default function Dashboard() {
  const [inputValue, setInputValue] = useState(0);
  const deferredInput = useDeferredValue(inputValue);

  return (
    <div>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(Number(e.target.value))}
      />
      {/* This component's re-render will be deferred if main thread is busy */}
      <ExpensiveCalculationDisplay input={deferredInput} />
    </div>
  );
}