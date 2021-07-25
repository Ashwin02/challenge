import { Table, Dropdown } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";

function Demographics() {
  useEffect(() => {
    axios
      .get("/allItems")
      .then(function (response) {
        // handle success
        setAllItems(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  const [allItems, setAllItems] = useState([]);
  console.log("items ", allItems);
  return (
    <>
      <h4>Age Demographics of Users With "value"</h4>
      <Menu listOfItems={allItems}/>
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

function Menu({listOfItems}) {
  return (
    <Dropdown className="my-2">
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        Item
      </Dropdown.Toggle>

      <Dropdown.Menu>
          {
              listOfItems.map((item, i) =>{
                  return <Dropdown.Item>{item}</Dropdown.Item>
              })
          }
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Demographics;
