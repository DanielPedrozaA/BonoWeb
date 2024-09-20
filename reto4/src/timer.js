import React, { useEffect, useState } from 'react';
import './timer.css';  // Asegúrate de que esta hoja de estilos esté vinculada correctamente

const Timer = () => {

    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(true);

    useEffect(() => {
        let timer;
        if (isActive && !isPaused) {
            timer = setInterval(() => {
                setSeconds((seconds) => {
                    if (seconds === 59) {
                        setMinutes((minutes) => minutes + 1);
                        return 0;
                    } else {
                        return seconds + 1;
                    }
                });
            }, 1000);
        } else if (!isActive && seconds !== 0 && minutes !== 0) {
            clearInterval(timer);
        }

        return () => clearInterval(timer);
    }, [isActive, isPaused, seconds, minutes]);

    const handleStart = () => {
        setIsActive(true);
        setIsPaused(false);
    };

    const handleStop = () => {
        setIsPaused(true);
    };

    const handleReset = () => {
        setIsActive(false);
        setMinutes(0);
        setSeconds(0);
        setIsPaused(true);
    };

    return (
        <div className="timer">
            <div className="container">
                <h1>Timer</h1>
                <div className="timer_container">
                    <h1>{minutes} mins {seconds} secs</h1>
                </div>
                <div className="buttons">
                    <button className="start-button" onClick={handleStart}>Start</button>
                    <button className="stop-button" onClick={handleStop}>Stop</button>
                    <button className="reset-button" onClick={handleReset}>Reset</button>
                </div>
            </div>
        </div>
    );
}

export default Timer;
