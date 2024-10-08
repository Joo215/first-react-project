import React from "react";
import { useState, useEffect } from "react";

const UseCounter = (isFaword) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1 * (isFaword ? 1 : -1));
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return counter;
};

export default UseCounter;
