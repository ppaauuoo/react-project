import { Box, Skeleton } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Record = (props: any) => (
  <tr>
    <td>{props.record.name}</td>
    <td>{props.record.position}</td>
    <td>{props.record.level}</td>
    <td>
      <Link className="btn btn-primary btn-sm" to={`/edit/${props.record._id}`}>
        Edit
      </Link>
      <button
        className="btn btn-danger btn-sm"
        onClick={() => {
          props.deleteRecord(props.record._id);
        }}
      >
        Delete
      </button>
    </td>
  </tr>
);

export default function RecordList() {
  const [records, setRecords] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  

  // This method fetches the records from the database.
  useEffect(() => {
    async function getRecords() {
      setIsLoading(true);
      const response = await fetch(
        `https://reactapp-e2fk.onrender.com/record/`
      );

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const records = await response.json();
      setRecords(records);
      setIsLoading(false);
    }

    getRecords();

    return;
  }, [records.length]);

  // This method will delete a record
  async function deleteRecord(id: string) {
    await fetch(`https://reactapp-e2fk.onrender.com/record/${id}`, {
      method: "DELETE",
    });

    const newRecords = records.filter((el: any) => el._id !== id);
    setRecords(newRecords);
  }

  // This method will map out the records on the table
  function recordList() {
    return records.map((record: any) => {
      return (
        <Record
          record={record}
          deleteRecord={() => deleteRecord(record._id)}
          key={record._id}
        />
      );
    });
  }

  // This following section will display the table with the records of individuals.
  return (
    <>
      <div className="px-4 py-6 h-screen">
        <h3 className="text-3xl font-bold pb-4">Record List</h3>
        <Link className="btn btn-primary btn-sm" to={`/add/record`}>
          Add Record
        </Link>
        {isLoading ? (
          <>
            <div className="flex flex-col justify-center p-4 gap-4">
              <Skeleton animation="wave" variant="rounded" />
              <Skeleton animation="wave" variant="rounded" />
              <Skeleton animation="wave" variant="rounded" />
            </div>
          </>
        ) : records.length === 0 ? (
          <div className="flex p-4">
            <h1>You have no one?</h1>
          </div>
        ) : (
          // You can put additional JSX elements here for the false condition.
          <table className="table-auto text-center w-full border-collapse mt-4">
            <thead>
              <tr>
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Position</th>
                <th className="border px-4 py-2">Level</th>
                <th className="border px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>{recordList()}</tbody>
          </table>
        )}
      </div>
    </>
  );
}
