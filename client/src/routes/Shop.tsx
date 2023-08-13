import { Skeleton } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Item = (props: any) => {
  return (
    <>
      <div className="card bg-neutral w-64 shadow-xl text-white">
        <div className="card-body">
          <h2 className="card-title">{props.item.name}</h2>
          <p>{props.item.desc}</p>
          <p>{props.item.price}</p>
          <div className="card-actions justify-end">
            <button
              className="btn btn-primary"
              onClick={() => {
                //   props.deleteTodo(props.todo._id);
              }}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default function Shop() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getTodos() {
      setIsLoading(true);
      //for performance (if being outside useEffect block it will be created evertime this component is rendered)
      const response = await fetch(`https://reactapp-e2fk.onrender.com/item`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const items = await response.json();
      setItems(items);
      setIsLoading(false);
    }

    getTodos();

    return;
  }, [items.length]); //useEffect trigger (if length changes > trigger useEffect again)

  function itemList() {
    return items.map((item: any) => {
      return <Item item={item} key={item._id} />;
    });
  }

  return (
    <div className="px-4 py-6">
      <h3 className="text-3xl font-bold pb-4">Product List</h3>
      <Link className="btn btn-primary btn-sm" to={`/add/item`}>
        Add Item
      </Link>
      <div className="flex p-4">
        {isLoading ? (
          <>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
              <Skeleton
                animation="wave"
                variant="rounded"
                width={256}
                height={118}
              />
              <Skeleton
                animation="wave"
                variant="rounded"
                width={256}
                height={118}
              />
              <Skeleton
                animation="wave"
                variant="rounded"
                width={256}
                height={118}
              />
            </div>
          </>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
            {itemList()}
          </div>
        )}
      </div>
    </div>
  );
}
