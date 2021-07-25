import { Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";

function Users() {
  useEffect(() => {
    axios
      .get("/users")
      .then(function (response) {
        // handle success
        setUsers(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  const [users, setUsers] = useState([]);
  console.log("users ", users);
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
          {users.map((item, i) => {
            return (
              <tr key={i}>
                <td> {item.username} </td>
                <td> {item.age} </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

export default Users;
