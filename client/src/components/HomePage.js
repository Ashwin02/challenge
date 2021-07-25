import Users from "./Users";
import { Container, Row, Col } from 'react-bootstrap';

function HomePage() {
    return (
        //  <div> <Users /> </div>
        <Container fluid>
            <Row>
                <Col>1 of 3</Col>
                <Col xs={8} className="border-warning"><Users /></Col>
                <Col>3 of 3</Col>
            </Row>
           
        </Container>
    );
}

export default HomePage;
