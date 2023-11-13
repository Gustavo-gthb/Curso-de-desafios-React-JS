import { useState } from "react";

function ToggleMultiple() {
  const [toggle, setToggle] = useState(true);

  const [count, setCount] = useState(0);

  const HandleClick = () => {
    setToggle(!toggle);
    setCount(count + 1);
  };

  return (
    <>
      <p>You clicked {count} times</p>
      <button onClick={HandleClick}>{toggle ? "ON" : "OFF"}</button>
    </>
  );
}

export default ToggleMultiple;
