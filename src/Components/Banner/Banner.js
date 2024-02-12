import { Row, Col, Container } from "react-bootstrap";
import planeicon from "./images/planeicons.webp";
import './Banner.css';

const Banner = () => {
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center"> {/* Corrected class name from "aligh-items-center" to "align-items-center" */}
                    <Col xs={12} md={6} xl={7}>
                        <h1 className="aa"> Hi <br /> I am Gaurab </h1>
                        <h2 className="aa CS"> CS Student </h2>
                        <h2 className="aa fullsack"> Full Stack In Making </h2>
                        <p> " Universe within us mirrors the cosmos outside"</p>
                    </Col>
                    <Col xs={12} md={6} xl={5} className="text-right"> {/* Added className for text alignment */}
                        <img className="planeicon" src={planeicon} alt="plane image" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Banner;
