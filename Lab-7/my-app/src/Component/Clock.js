import React, { useState, useEffect } from "react";

const Clock = () => {
  const [date,setDate] = useState(new Date());

  useEffect(() =>{
    let timerID = setInterval(() => setDate(new Date()), 1000);
    return () => {
        clearInterval(timerID);
    }
  }
  );

  return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {date.toLocaleTimeString()}.</h2>
      </div>
    );
};

export default Clock;
