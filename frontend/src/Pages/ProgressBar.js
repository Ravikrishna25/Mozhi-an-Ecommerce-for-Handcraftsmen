import React, { useState, useEffect } from 'react';
import './ProgressBar.css';

function ProgressBar() {
  // const totalTime = 1 * 24 * 60 * 60 * 1000; // 3 days in milliseconds
//   const totalTime = 3 * 24 * 60 * 60 * 1000; // 3 days in milliseconds
const totalTime = 10 * 60 * 1000; // 3 minutes in milliseconds
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (elapsedTime < totalTime) {
        setElapsedTime(elapsedTime + 1000);
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [elapsedTime, totalTime]);

  const progress = (elapsedTime / totalTime) * 100;

  return (
    <div>
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
      <div className="time-remaining">
        Time Remaining: {Math.ceil((totalTime - elapsedTime) / 1000)} seconds
      </div>
    </div>
  );
}

export default ProgressBar;
