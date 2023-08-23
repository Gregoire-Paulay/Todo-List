import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input) {
      const todosCopy = [...todos];
      todosCopy.push({ title: input, isDone: false });
      setTodos(todosCopy);
      setInput("");
    } else {
      alert("Veuillez remplir le champ pour créer une nouvelle tâche.");
    }
  };

  const handleCheck = (index) => {
    const todosCopy = [...todos];
    todosCopy[index].isDone = !todosCopy[index].isDone;
    setTodos(todosCopy);
  };

  return (
    <>
      <Header />
      <main>
        <div>
          {todos.map((todo, index) => {
            return (
              <div key={todo.title} className="myTask">
                <input
                  type="checkbox"
                  onChange={() => {
                    handleCheck(index);
                  }}
                />
                <span className={todo.isDone === true ? "done" : undefined}>
                  {todo.title}
                </span>
                <button
                  onClick={() => {
                    const todosCopy = [...todos];
                    todosCopy.splice(index, 1);
                    setTodos(todosCopy);
                  }}
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
            );
          })}
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enregistrez une nouvelle tâche"
            value={input}
            onChange={(event) => {
              setInput(event.target.value);
            }}
          />

          <input type="submit" value="Add Task" />
        </form>
      </main>
      <Footer />
    </>
  );
};

export default App;
