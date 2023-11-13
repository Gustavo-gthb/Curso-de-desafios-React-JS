import { useMemo, useState } from "react";

function TodoList() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");

  const HandleTaskChange = (event) => {
    const { value } = event.target;
    setTask(value);
  };

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, { id: tasks.length + 1, text: task }]);
      setTask("");
    }
  };

  const FilteredTasks = useMemo(() => {
    const lowerSearch = search.toLowerCase();

    return tasks.filter((filtered) =>
      filtered.text.toLowerCase().includes(lowerSearch)
    );
  }, [search]);

  return (
    <>  
      <input id="task" value={task} onChange={HandleTaskChange} />
      <ul>
        {tasks.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
      <button onClick={addTask}>Adicionar Tarefa</button>
      <p></p>

      <h2>5 - Filter</h2>

      <input
        type="text"
        value={search}
        onChange={(ev) => setSearch(ev.target.value)}
      />

      <ul>
        {FilteredTasks.map((filtered) => (
          <li key={filtered.id}>{filtered.text}</li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
