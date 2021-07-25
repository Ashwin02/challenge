import { Alert } from "react-bootstrap";
import { useState, useEffect } from "react";

function AlertMessage({ close }) {
  useEffect(() => {
    setShow(true);
    setTimeout(() => {
      closeAlert();
    }, 5000);
  }, []);
  const [show, setShow] = useState(false);

  const closeAlert = () => {
    setShow(false);
    close();
  };

  if (show) {
    return (
      <div className="fixed-bottom">
        <Alert variant="danger" onClose={() => closeAlert(false)} dismissible>
          Something went wrong, please try again.
        </Alert>
      </div>
    );
  }
  return null;
}

export default AlertMessage;
