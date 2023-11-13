import { useState } from "react";

function Toggle() {
  const [toggle, setToggle] = useState(true);

  return (
    <>
      <button onClick={() => setToggle(!toggle)}>
        {toggle ? "ON" : "OFF"}
      </button>
    </>
  );
}

export default Toggle;
