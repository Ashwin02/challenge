import { Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";

function Demographics() {
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
      <h4>Age Demographics of Users With {'value'}</h4>

      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Age</th>
            <th>Count</th>
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

export default Demographics;
