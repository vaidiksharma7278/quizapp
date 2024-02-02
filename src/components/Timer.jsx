import { useState,useEffect } from "react";
const Timer = () => {
    const [isActive, setIsActive] = useState(false);
    const [seconds, setSeconds] = useState(0);
    useEffect(() => {
      let timer = null;
      if(isActive){
        timer = setInterval(() => {
          setSeconds((seconds) => seconds + 1);
        }, 1000);
      }
      return () => {
        clearInterval(timer);
      };
    });
    return (
      <div>
      Seconds: {seconds}
      <br />
      <button onClick={()=>{
        setIsActive(true);
      }}> Start </button>
    </div>
    );
  };
  export default Timer;