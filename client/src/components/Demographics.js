import { Table, Dropdown } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";

function Demographics() {
  useEffect(() => {
    axios
      .get("/allOptions")
      .then(function (response) {
        // handle success
        setAllOptions(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  const [allOptions, setAllOptions] = useState([]);
  console.log("items ", allOptions);
  return (
    <>
      <h4>Age Demographics of Users With "value"</h4>
      <Menu options={allOptions} />
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Age</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {/* {users.map((item, i) => {
            return (
              <tr key={i}>
                <td> {item.username} </td>
                <td> {item.age} </td>
              </tr>
            );
          })} */}
        </tbody>
      </Table>
    </>
  );
}

function Menu({ options }) {
  return (
    <Dropdown className="my-2">
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        Item
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {options.map((item, i) => {
          return <Dropdown.Item>{item}</Dropdown.Item>;
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Demographics;
