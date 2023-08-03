const Todo = (props:any) => {
  return (
    <>
      <div className="card bg-neutral w-96 shadow-xl text-white">
        <div className="card-body">
          <h2 className="card-title">{props.todo.title}</h2>
          <p>{props.todo.content}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Done</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
