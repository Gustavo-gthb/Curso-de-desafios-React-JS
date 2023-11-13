import "./App.css";
import Clock from "./components/Clock";
import DataFetcher from "./components/DataFetcher";
import TodoList from "./components/TodoList";
import Toggle from "./components/Toggle";
import ToggleMultiple from "./components/ToggleMultiple";
import WindowWindthChecker from "./components/WindowWindthChecker";

function App() {
  return (
    <>
      <h2>1 - Using State</h2>
      <Toggle />

      <h2>2 - Multiple States</h2>
      <ToggleMultiple />

      <h2>3 - Real-time Clock</h2>
      <Clock />

      <h2>4 - Task List</h2>
      <TodoList />

      <h2>6 - Check screen width</h2>
      <WindowWindthChecker />

      <h2>7 - Simulating an API request</h2>
      <DataFetcher />
    </>
  );
}

export default App;
