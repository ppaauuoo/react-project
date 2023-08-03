import { useState } from "react";
import { useNavigate } from "react-router";


// type for TSX
interface FormValues {
  title: string;
  content: string;
}

export default function TodoForm() {
  const [form, setForm] = useState<FormValues>({
    title: "",
    content: "",
  });

  const navigate = useNavigate();

  // These methods will update the state properties.
  /// update form state value with new one
  function updateForm(value: Partial<FormValues>) {
    setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const newTodo = { ...form }; //turn form to JSON (form is the state value)

    await fetch("http://localhost:5050/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo), //turn JSON to String
    }).catch((error) => {
      window.alert(error);
      return;
    });

    setForm({ title: "", content: ""}); //reset component?
    navigate("/todo");
  }

  return (
    <div className="flex justify-center">
    <form onSubmit={onSubmit}>
      <div className="form-control">
        <h3>Add New Todo</h3>

        <label className="label">
          <span className="label-text">Title</span>
        </label>
        <input
          type="text"
          className="input input-bordered"
          id="title"
          value={form.title} //the value is up to the state so no matter what you do it won't changes unless
          onChange={(e) => updateForm({ title: e.target.value })} // we change the form state with onChange so the value would change 
        />
        <label className="label">
          <span className="label-text">Content</span>
        </label>
        <textarea
          className="input input-bordered"
          id="content"
          value={form.content}
          onChange={(e) => updateForm({ content: e.target.value })}
        />
        <input
          type="submit"
          value="Add"
          className="btn btn-primary"
        />
      </div>
    </form>
  </div>
  );
}
