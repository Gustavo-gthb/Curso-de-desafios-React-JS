import "./App.css";

import HelloWorld from "./components/HelloWorld";
import HelloName from "./components/HelloName";
import Train from "./components/Train";
import Family from "./components/Family";
import TrainClass from "./components/TrainClass";
import Counter from "./components/Counter";

function App() {
  const members = [
    { exercise: "back", reps: 7, weight: 34 },
    { exercise: "legs", reps: 10, weight: 300 },
    { exercise: "chest", reps: 4, weight: 34 },
  ];

  return (
    <>
      <h2>1 - Creating a simple component</h2>
      <HelloWorld />

      <h2>2 - Utilizing props</h2>
      <HelloName name="Gustavo" />

      <h2>3 - Multiple Props</h2>
      <Train exercise="Chest" reps={10} weight={30} />

      <h2>4 - Component composition</h2>
      <Family members={members} />

      <h2>5 - Class components</h2>
      <TrainClass exercise="chest" reps={10} weight={20} porsche='Panamera'/>

      <h2>6 - Component with state</h2>
      <Counter />
    </> 
  );
}

export default App;
