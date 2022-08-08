import { useEffect, useRef, useState } from "react";
const fixTime = (time) => (time < 10 ? `0` + time : time);
const formatTimeToString = (time) => {
  const seconds = time % 60;
  const min = Math.floor(time / 60) % 60;
  return `00:${fixTime(min)}:${fixTime(seconds)}`;
};

function Timer() {
  // seconds
  const [time, setTime] = useState(0);
  // id
  const ref = useRef(null);
  // start time
  const startTimer = () => {
    if (ref.current !== null) return;
    ref.current = setInterval(() => {
      // prev=>prev+1
      // stale closure
      console.log(`date`, Date.now());
      setTime((time) => time + 1);
    }, 1000);
    console.log(ref);
  };
  // stop time
  const stopTimer = () => {
    clearInterval(ref.current);
    ref.current = null;
  };
  // reset time
  const resetTimer = () => {
    stopTimer();
    setTime(0);
  };
  useEffect(() => {
    // Cleanup!
    return () => {
      stopTimer();
    };
  }, []);

  return (
    <div>
      <h1> {formatTimeToString(time)} </h1>
      <button onClick={startTimer}>START</button>
      <button onClick={stopTimer}>STOP</button>
      <button onClick={resetTimer}>RESET</button>
    </div>
  );
}

export default Timer;
