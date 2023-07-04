
import React, { useEffect, useState } from "react";
import './../styles/App.css';

const App = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  const[val,setVal]=useState([]);
  useEffect(() => {
    let intervalId;
    
    if (isRunning) {
    intervalId = setInterval(() => {
    const now = Date.now();
    setElapsedTime(now - startTime);
    }, 10);
    }
    return () => clearInterval(intervalId);
}, [isRunning, startTime]);

const handleStart = ()=>{
  setStartTime(Date.now()-elapsedTime);
setIsRunning(true);
}
const handleStop = () => {
setIsRunning(false);
  };
const handleReset =()=>{
  setStartTime(0);
  setElapsedTime(0);
  setIsRunning(false);
  setVal([]);
}
const HandleLap = ()=>{
 let temp =formate(elapsedTime);
 val.push(temp)
 setVal(val);
}

const formate = (time)=>{
const ms= (`0${Math.floor(time%1000)}`).slice(-2);
const sec = (`0${Math.floor((time/1000)%60)}`).slice(-2);
const min= (`0${Math.floor((time / (1000 * 60)) % 60)}`).slice(-2);
return `${min}:${sec}:${ms}`;
}
  return (
    <div>
        <p  className="countdown">{formate(elapsedTime)}</p>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={HandleLap}>Lap</button>
        <button onClick={handleReset}>Reset</button>
    <ul>
   {val.map((value,index)=>{
return <li key={index}>{value}</li>
   })   }
    </ul>
    </div>
  )
}

export default App
