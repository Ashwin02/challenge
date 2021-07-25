import Users from "./Users";
import Demographics from "./Demographics"
import { Container, Row, Col } from "react-bootstrap";

function HomePage() {
  return (
    <Container fluid>
      <Row className="min-vh-100" style={{'backgroundColor': '#041e42'}}>
        <Col></Col>
        <Col xs={8} className="border-warning p-4 bg-light text-dark">
          <Users />
          <Demographics />
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default HomePage;
