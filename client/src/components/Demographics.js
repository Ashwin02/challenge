import { Table, Dropdown, Badge } from "react-bootstrap";
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
        // TODO: Adde error handling for all routes
        console.log(error);
      });
  }, []);

  const [allOptions, setAllOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [demographicsData, setDemographicsData] = useState([]);

  const onSelectOption = (option) => {
    console.log(option);
    setSelectedOption(option);
    getDemographicsData(option);
  };

  const getDemographicsData = (option) => {
    axios
      .get(`/users/age/${option}`)
      .then(function (response) {
        setDemographicsData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <h4>Age Demographics of Users With <Badge pill bg="success">{selectedOption.toUpperCase()}</Badge></h4>
      <Menu options={allOptions} onClickHandler={onSelectOption} />
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Age</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {demographicsData.map((item, i) => {
            return (
              <tr key={i}>
                <td> {item.age} </td>
                <td> {item.count} </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

function Menu({ options, onClickHandler }) {
  return (
    <Dropdown className="my-2">
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        Item
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {options.map((item, i) => {
          return (
            <Dropdown.Item onClick={() => onClickHandler(item)}>
              {item}
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Demographics;
