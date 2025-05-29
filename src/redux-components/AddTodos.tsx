const AddTodos = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input type="text" />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodos;
