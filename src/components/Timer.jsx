import { useEffect, useState } from "react";

export default function Timer({ deadline, setIsTimeOver }) {
  const calculateTimeRemaining = () => {
    const now = new Date().getTime();
    const timeRemaining = deadline - now;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds, total: timeRemaining };
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      const newTimeRemaining = calculateTimeRemaining();

      setTimeRemaining(calculateTimeRemaining());
      if (newTimeRemaining.total <= 0) {
        // Countdown has reached zero, perform action
        setIsTimeOver(true);
        console.log("Countdown completed!"); // your desired action
        clearInterval(countdownInterval); // Stop the interval
      }
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <div className="countdown-container">
      {formatTime(timeRemaining.hours) != 0 && (
        <>
          <div>
            <span className="num">{formatTime(timeRemaining.hours)}</span>
            <span className="type">Hours</span>
          </div>
          <span className="col">:</span>
        </>
      )}
      <div>
        <span className="num">{formatTime(timeRemaining.minutes)}</span>
        <span className="type">Minutes</span>
      </div>
      <span className="col">:</span>

      <div>
        <span className="num">{formatTime(timeRemaining.seconds)}</span>
        <span className="type">Seconds</span>
      </div>
    </div>
  );
}
