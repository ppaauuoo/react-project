import { useState } from "react";
import { useNavigate } from "react-router";


// type for TSX
interface FormValues {
  name: string;
  position: string;
  level: string;
}

export default function Create() {
  const [isLoading, setIsLoading] = useState(false)

  const [form, setForm] = useState<FormValues>({
    name: "",
    position: "",
    level: "",
  });

  const navigate = useNavigate();

  // These methods will update the state properties.
  function updateForm(value: Partial<FormValues>) {
    setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const newPerson = { ...form };
    setIsLoading(true)

    await fetch("https://reactapp-e2fk.onrender.com/record", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPerson),
    }).catch((error) => {
      window.alert(error);
      return;
    });
    setIsLoading(false)

    setForm({ name: "", position: "", level: "" });
    navigate("/record");
  }

  return (
  
    <div className="flex justify-center h-screen">
    <form onSubmit={onSubmit}>
      <div className="form-control">
        <h3>Create New Record</h3>

        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input
          type="text"
          className="input input-bordered"
          id="name"
          value={form.name}
          onChange={(e) => updateForm({ name: e.target.value })}
        />
        <label className="label">
          <span className="label-text">Position</span>
        </label>
        <input
          type="text"
          className="input input-bordered"
          id="position"
          value={form.position}
          onChange={(e) => updateForm({ position: e.target.value })}
        />
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Intern</span>
            <input
            className="radio"
            type="radio"
            name="positionOptions"
            id="positionIntern"
            value="Intern"
            checked={form.level === "Intern"}
            onChange={(e) => updateForm({ level: e.target.value })}
          />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Junior</span>
            <input
            className="radio"
            type="radio"
            name="positionOptions"
            id="positionJunior"
            value="Junior"
            checked={form.level === "Junior"}
            onChange={(e) => updateForm({ level: e.target.value })}
          />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Senior</span>
            <input
            className="radio"
            type="radio"
            name="positionOptions"
            id="positionSenior"
            value="Senior"
            checked={form.level === "Senior"}
            onChange={(e) => updateForm({ level: e.target.value })}
          />
          </label>
        </div>
        <input
          type="submit"
          value={isLoading?"Loading":"Add Record"}
          className="btn btn-primary"
          disabled={isLoading}
        />
      </div>
    </form>
  </div>
  );
}
