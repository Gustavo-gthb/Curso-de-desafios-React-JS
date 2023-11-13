import { useState } from "react";


function Counter() {

    const [count, setCount] = useState(1);

    const addCount = () => {
        setCount(count + 1);
    }

    const InitialCount = () => {
        setCount(count * 0);
    }

  return (
    <>
        <h1>{count}</h1>
        <button onClick={addCount}>Adicionando</button>
        <p></p>
        <button onClick={InitialCount}>Zerar contador</button>
    </>
  )
}

export default Counter;