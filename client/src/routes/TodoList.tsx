import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Todo = (props: any) => {
  return (
    <>
      <div className="card bg-neutral w-64 shadow-xl text-white">
        <div className="card-body">
          <h2 className="card-title">{props.todo.title}</h2>
          <p>{props.todo.content}</p>
          <div className="card-actions justify-end">
            <button
              className="btn btn-primary"
              onClick={() => {
                props.deleteTodo(props.todo._id);
              }}
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  // This method fetches the records from the database.
  useEffect(() => {
    async function getTodos() {
      //for performance (if being outside useEffect block it will be created evertime this component is rendered)
      const response = await fetch(`http://localhost:5050/todo`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const todos = await response.json();
      setTodos(todos);
    }

    getTodos();

    return;
  }, [todos.length]); //useEffect trigger (if length changes > trigger useEffect again)

  // This method will map out the records on the table
  function todoList() {
    return todos.map((todo: any) => {
      return (
        <Todo
          todo={todo}
          deleteTodo={() => deleteTodo(todo._id)}
          key={todo._id}
        />
      );
    });
  }

  // This method will delete a record
  async function deleteTodo(id: string) {
    await fetch(`http://localhost:5050/todo/${id}`, {
      method: "DELETE",
    });

    const newList = todos.filter((e: any) => e._id !== id);
    setTodos(newList);
  }

  return (
    <div className="px-4 py-6 h-screen">
      <h3 className="text-3xl font-bold pb-4">Todo List</h3>
      <Link className="btn btn-primary btn-sm" to={`/add/todo`}>
        Add Todo
      </Link>
      <div className="flex p-4">
        {todos.length === 0 ? (
          <h1>You have nothing to do?</h1>
        ) : (
          // You can put additional JSX elements here for the false condition.
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">{todoList()}</div>
        )}
      </div>
    </div>
  );
};

export default TodoList;
