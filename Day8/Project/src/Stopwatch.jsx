import React, { useRef, useState } from 'react';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null); // Ref to store interval ID

  const startTime = () => {
    if (intervalRef.current !== null) return; // already running

    intervalRef.current = setInterval(() => {
      setTime(prevTime => prevTime + 1); // ✅ functional update
    }, 1000);
  };

  const stopTime = () => {
    clearInterval(intervalRef.current); // ✅ stop the interval
    intervalRef.current = null;
  };

  const resetTime = () => {
    stopTime(); // stop if running
    setTime(0); // reset to 0
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>⏱ Time: {time} sec</h2>
      <button onClick={startTime}>▶ Start</button>
      <button onClick={stopTime} style={{ margin: '0 10px' }}>⏹ Stop</button>
      <button onClick={resetTime}>🔁 Reset</button>
    </div>
  );
};

export default Stopwatch;
