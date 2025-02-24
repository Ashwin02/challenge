import { Table, Dropdown} from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import AlertMessage from "./AlertMessage";

function Demographics() {
  useEffect(() => {
    axios
      .get("/allOptions")
      .then(function (response) {
        setAllOptions(response.data);
        
      })
      .catch(function (error) {
        setError(true)
      });
  }, []);

  const [allOptions, setAllOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [demographicsData, setDemographicsData] = useState([]);
  const [displayError, setError] = useState(false)

  const onSelectOption = (option) => {
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
        setError(true)
      });
  };

  return (
    <>
      <h4
        className="mt-5 mb-2 p-1 text-light rounded"
        style={{ backgroundColor: "#0071DC" }}
      >
        <span style={{ marginRight: "10px" }}>
          Age Demographics of Users With
        </span>
        <Menu
          options={allOptions}
          onClickHandler={onSelectOption}
          selectedOption={selectedOption}
        />
      </h4>

      <Table striped bordered hover size="sm" className="mt-5 mb-2">
        <thead>
          <tr>
            <th>Age</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {demographicsData.length ? (
            demographicsData.map((item, i) => {
              return (
                <tr key={i}>
                  <td> {item.age} </td>
                  <td> {item.count} </td>
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
      {displayError ? <AlertMessage close={() => setError(false)}/> : null}
    </>
  );
}

function Menu({ options, onClickHandler, selectedOption }) {
  return (
    <Dropdown className="my-2  d-inline">
      <Dropdown.Toggle variant="success" id="dropdown-basic" size="sm">
        {selectedOption.length ? selectedOption : "Item"}
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
