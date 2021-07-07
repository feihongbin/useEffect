import React, { useState, useEffect } from "react";
const Timer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      console.log(count)
      setCount(count + 1)
      // setCount(c => c + 1)
    }, 1000);
  }, [count]);

  return <h1>{count}</h1>;
};

export default Timer

