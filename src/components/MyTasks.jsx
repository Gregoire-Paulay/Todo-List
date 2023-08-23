const MyTasks = ({ todos, setTodos }) => {
  const handleCheck = (index) => {
    const todosCopy = [...todos];
    todosCopy[index].isDone = !todosCopy[index].isDone;
    setTodos(todosCopy);
  };

  return (
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
  );
};

export default MyTasks;
