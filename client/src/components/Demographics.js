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
      <h4
        className="mt-5 mb-2 p-1 text-light rounded"
        style={{ backgroundColor: "#0071DC" }}
      >
        <span style={{'marginRight':'10px'}}>Age Demographics of Users With</span>
        <Menu options={allOptions} onClickHandler={onSelectOption} selectedOption={selectedOption}/>
      </h4>

      <Table striped bordered hover size="sm" className="mt-5 mb-2">
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

function Menu({ options, onClickHandler, selectedOption }) {
  return (
    <Dropdown className="my-2  d-inline" >
      <Dropdown.Toggle variant="success" id="dropdown-basic" size="sm" >
        {selectedOption.length ? selectedOption : 'Item'}
      </Dropdown.Toggle>
      <Dropdown.Menu >
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
