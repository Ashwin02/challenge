import { Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import AlertMessage from "./AlertMessage";

function Users() {
  useEffect(() => {
    axios
      .get("/users")
      .then(function (response) {
        setUsers(response.data);
      })
      .catch(function (error) {
        setError(true);
      });
  }, []);

  const [users, setUsers] = useState([]);
  const [displayError, setError] = useState(false);
  return (
    <>
      <h4
        className="mt-2 mb-2 p-1 text-light rounded"
        style={{ backgroundColor: "#0071DC" }}
      >
        All Users
      </h4>

      <p className="text-secondary">Users and their age</p>

      <Table striped bordered hover size="sm" className="m-1 p-1">
        <thead>
          <tr>
            <th>Username</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {users.length ? (
            users.map((item, i) => {
              return (
                <tr key={i}>
                  <td> {item.username} </td>
                  <td> {item.age} </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan="2">No Record</td>
            </tr>
          )}
        </tbody>
      </Table>
      {displayError ? <AlertMessage close={() => setError(false)} /> : null}
    </>
  );
}

export default Users;
