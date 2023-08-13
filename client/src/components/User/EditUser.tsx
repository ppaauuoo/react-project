import { Backdrop, CircularProgress } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Edit() {
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  interface FormState {
    name: string;
    position: string;
    level: string;
    records: any[]; // Update this type to match your actual data structure.
  }

  const [form, setForm] = useState<FormState>({
    name: "",
    position: "",
    level: "",
    records: [],
  });

  const params = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      if (!params.id) {
        // Handle the case where params.id is not available (optional).
        return;
      }

      const id = params.id.toString();
      const response = await fetch(
        `https://reactapp-e2fk.onrender.com/record/${params.id.toString()}`
      );

      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const record = await response.json();
      if (!record) {
        window.alert(`Record with id ${id} not found`);
        navigate("/");
        return;
      }

      setForm(record);
    }

    fetchData();
  }, [params.id, navigate]);

  // These methods will update the state properties.
  function updateForm(value: Partial<FormState>) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const editedPerson = {
      name: form.name,
      position: form.position,
      level: form.level,
    };
    setIsLoading(true);
    // This will send a post request to update the data in the database.
    await fetch(`https://reactapp-e2fk.onrender.com/record/${params.id}`, {
      method: "PATCH",
      body: JSON.stringify(editedPerson),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setIsLoading(false);

    navigate("/record");
  }

  // This following section will display the form that takes input from the user to update the data.
  return (
    <div className="flex justify-center h-screen">
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <h3>Update Record</h3>

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
            className="btn btn-primary"
            value={isLoading ? "Loading" : "Update Record"}
            disabled={isLoading}
            onClick={handleOpen}

          />
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
            onClick={handleClose}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        </div>
      </form>
    </div>
  );
}
