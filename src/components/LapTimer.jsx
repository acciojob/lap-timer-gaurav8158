import React, { useEffect, useState } from "react";

const LapTimer = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [laps, setLaps] = useState([]);

    useEffect(() => {
        let timer;
        // let startTime;
        // let elapsedTime = 0;

        if (isRunning) {
            // startTime = Date.now() - elapsedTime;
            timer = setInterval(() => {
                // const now = Date.now();
                // elapsedTime = now - startTime;
                // setTime(elapsedTime);
                setTime(prevTime => prevTime + 10);
            }, 10);
        }

        return () => {
            clearInterval(timer);
        };
    }, [isRunning]);

    const formatTime = (time) => {
        const milliseconds = Math.floor((time % 1000) / 10);
        const seconds = Math.floor((time / 1000) % 60);
        const minutes = Math.floor((time / (1000 * 60)) % 60);
        const hours = Math.floor((time / (1000 * 60 * 60)) % 24);

        return `${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}:${milliseconds < 10 ? "0" + milliseconds : milliseconds}`;

    };

    const startTimer = () => {
        setIsRunning(true);
    };

    // const pauseTimer = () => {
    //     setIsRunning(false);
    // };

    const stopTimer = () => {
        // setTime(0);
        setIsRunning(false);
        // setLaps([]);
    };

    const lapTimer = () => {
        setLaps((prevLaps) => {
            const newLaps = prevLaps.concat(time);
            return newLaps;
        });
    };


    const resetTimer = () => {
        setTime(0);
        setIsRunning(false);
        setLaps([]);
    };

    return (
        <div>

            <div>
                <p>{formatTime(time)}</p>
                {/* {isRunning ? (
  <button onClick={pauseTimer}>Pause</button>
) : ( */}
                <button onClick={startTimer} >Start</button>
                {/* )} */}
                <button onClick={lapTimer} >
                    Lap
                </button>
                <button onClick={stopTimer} >
                    Stop
                </button>
                <button onClick={resetTimer} >Reset</button>
            </div>
            <div>
                <ul>
                    {laps.map((lapTime, index) => (
                        <li key={index}>{formatTime(lapTime)}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default LapTimer
