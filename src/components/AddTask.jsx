const AddTask = ({ setInput, input, todos, setTodos }) => {
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

  return (
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
  );
};

export default AddTask;
