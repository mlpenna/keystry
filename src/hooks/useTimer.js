import { useEffect, useState } from "react";

const useTimer = (initialSeconds = 10) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isActive, setIsActive] = useState(false);

  function resetTimer() {
    setSeconds(initialSeconds);
    setIsActive(true);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      if (seconds === 0) {
        setIsActive(false);
      }
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    } else if (!isActive) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return [resetTimer, seconds];
};

export default useTimer;
