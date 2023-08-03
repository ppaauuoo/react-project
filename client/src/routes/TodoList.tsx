import { useEffect, useState } from "react";
import Todo from "../components/Todo";
import { Link } from "react-router-dom";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  // This method fetches the records from the database.
  useEffect(() => {
    async function getTodos() {
      //for performance (if being outside useEffect block it will be created evertime this component is rendered)
      const response = await fetch(`http://localhost:5050/todo/`);

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
      return <Todo todo={todo} />;
    });
  }

  return (
    <div className="flex justify-start p-4">
      <Link className="btn btn-primary btn-sm" to={`/create`}>
        Add Todo
      </Link>

      {todoList()}
    </div>
  );
};

export default TodoList;
