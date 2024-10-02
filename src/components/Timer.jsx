import { useState, useEffect, useRef } from "react";
import TimerItem from "./TimerItem";
import { useTranslation } from "react-i18next";

const ClockTimer = () => {
  const [time, setTime] = useState(new Date(1970, 0, 1, 12, 0, 0));
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    if (isRunning) {
      const startTime = Date.now() - elapsedTime;
      intervalRef.current = setInterval(() => {
        const currentTime = Date.now() - startTime;
        setElapsedTime(currentTime);
        setTime(new Date(1970, 0, 1, 12, 0, 0 + currentTime / 1000));
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning, elapsedTime]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const secondDegrees = (time.getSeconds() * 6) % 360;
  const minuteDegrees = (time.getMinutes() * 6 + time.getSeconds() * 0.1) % 360;
  const hourDegrees =
    ((time.getHours() % 12) * 30 + time.getMinutes() * 0.5) % 360;

  return (
    <section className="clock-container">
      <div className="clock-face">
        {[...Array(12)].map((_, i) => (
          <TimerItem key={i} index={i} />
        ))}

        <div
          className="hand hour-hand"
          style={{ transform: `rotate(${hourDegrees}deg)` }}
        />
        <div
          className="hand minute-hand"
          style={{ transform: `rotate(${minuteDegrees}deg)` }}
        />
        <div
          className="hand second-hand"
          style={{ transform: `rotate(${secondDegrees}deg)` }}
        />
      </div>
      <div className="controls">
        <button onClick={startTimer}>{t("start")}</button>
        <button onClick={stopTimer}>{t("stop")}</button>
      </div>
    </section>
  );
};

export default ClockTimer;
