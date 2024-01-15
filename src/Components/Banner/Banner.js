import { Row, Col,Container } from "react-bootstrap";

import './Banner.css';

const Banner =()=>{    
    return(
        
        <section className="banner" id="home">
            <Container>
            <Row className="aligh-items-center">
            <Col xs={12} md={6} xl={7}>
                <h1 className="aa"> Hi <br></br> I am Gaurab </h1> 
                    <h2 className="aa CS"> CS Student </h2>
                    <h2 className="aa fullsack"> Full Stack In Making</h2>
                  <p> " Universe within us mirros the cosmos outside"</p>
                  </Col>
                  <Col xs={12} md={6} xl={5}>
                  </Col>
                  </Row>
            </Container>
        </section>
    );
}
export default Banner;