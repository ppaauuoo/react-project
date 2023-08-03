import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Record = (props: any) => (
  <tr>
    <td>{props.record.name}</td>
    <td>{props.record.position}</td>
    <td>{props.record.level}</td>
    <td>
      <Link className="btn btn-primary btn-sm" to={`/edit/${props.record._id}`}>Edit</Link>
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

  // This method fetches the records from the database.
  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:5050/record/`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const records = await response.json();
      setRecords(records);
    }

    getRecords();

    return;
  }, [records.length]);

  // This method will delete a record
  async function deleteRecord(id: string) {
    await fetch(`http://localhost:5050/record/${id}`, {
      method: "DELETE"
    });

    const newRecords = records.filter((el:any) => el._id !== id);
    setRecords(newRecords);
  }

  // This method will map out the records on the table
  function recordList() {
    return records.map((record:any) => {
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
    <div className="px-4 py-6">
      <h3 className="text-3xl font-bold pb-4">Record List</h3>
      <Link className="btn btn-primary btn-sm" to={`/add/record`}>Add Record</Link>
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
    </div>
  );
}
