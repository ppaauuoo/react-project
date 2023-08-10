import { Skeleton } from "@mui/material";
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
  const [isLoading, setIsLoading] = useState(false);

  // This method fetches the records from the database.
  useEffect(() => {
    async function getTodos() {
      setIsLoading(true);
      //for performance (if being outside useEffect block it will be created evertime this component is rendered)
      const response = await fetch(`https://reactapp-e2fk.onrender.com/todo`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const todos = await response.json();
      setTodos(todos);
      setIsLoading(false);
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
    await fetch(`https://reactapp-e2fk.onrender.com/todo/${id}`, {
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
        {isLoading ? (
          <>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
              <Skeleton animation="wave" variant="rounded" width={256} height={118} />
              <Skeleton animation="wave" variant="rounded" width={256} height={118} />
              <Skeleton animation="wave" variant="rounded" width={256} height={118} />
            </div>
          </>
        ) : todos.length === 0 ? (
          // You can put additional JSX elements here for the false condition.
          <h1>You have nothing to do?</h1>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
            {todoList()}
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoList;
