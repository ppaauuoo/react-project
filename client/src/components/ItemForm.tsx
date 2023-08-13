import { Backdrop, CircularProgress } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";

// type for TSX
interface FormValues {
  name: string;
  desc: string;
  price: number;
}

export default function TodoForm() {
  const [isLoading, setIsLoading] = useState(false);

  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const [form, setForm] = useState<FormValues>({
    name: "",
    desc: "",
    price: 0,
  });

  const navigate = useNavigate();

  // These methods will update the state properties.
  /// update form state value with new one
  function updateForm(value: Partial<FormValues>) {
    setForm((prev) => {
      return { ...prev, ...value }; //set prev with value /// value = user typed value
    });
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const newItem = { ...form }; //turn form to JSON (form is the state value)
    setIsLoading(true);
    await fetch("https://reactapp-e2fk.onrender.com/item", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem), //turn JSON to String
    }).catch((error) => {
      window.alert(error);
      return;
    });
    setIsLoading(false);
    setForm({ name: "", desc: "", price: 0 }); //reset component?
    navigate("/shop");
  }

  return (
    <div className="flex justify-center h-screen items">
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <h3>Add New Item</h3>

          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            className="input input-bordered"
            id="name"
            value={form.name} //the value is up to the state so no matter what you do it won't changes unless
            onChange={(e) => updateForm({ name: e.target.value })} // we change the form state with onChange so the value would change
          />
          <label className="label">
            <span className="label-text">Desc</span>
          </label>
          <textarea
            className="input input-bordered"
            id="desc"
            value={form.desc}
            onChange={(e) => updateForm({ desc: e.target.value })}
          />
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            type="number"
            className="input input-bordered"
            id="price"
            value={form.price} //the value is up to the state so no matter what you do it won't changes unless
            onChange={(e) => updateForm({ price: parseInt(e.target.value) })} // we change the form state with onChange so the value would change
          />
          <input
            type="submit"
            value={isLoading ? "Loading" : "Add"}
            className="btn btn-primary mt-4"
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
