import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AddTask from "./components/AddTask";
import MyTasks from "./components/MyTasks";

const App = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <>
      <Header />
      <main>
        <MyTasks todos={todos} setTodos={setTodos} />

        <AddTask
          setInput={setInput}
          input={input}
          todos={todos}
          setTodos={setTodos}
        />
      </main>
      <Footer />
    </>
  );
};

export default App;
