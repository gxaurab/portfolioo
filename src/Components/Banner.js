import { Row, Col,Container } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";


const Banner =()=>{    
    return(
        <section className="banner" id="home">
            <Container>
            <Row className="aligh-items-center">
            <Col xs={12} md={6} xl={7}>
                <h1>{`Hi! I'm Gaurab`} <br/> <span className="wrap">CS Student <br/> Tech Enthuiast<br/> Full Stack on Making</span></h1>
                  <p> "While the Universe within us mirros the vast cosmos outside....."</p>
                  </Col>
                  <Col xs={12} md={6} xl={5}>
                  <img src={headerImg} alt="Header Img"/>
                  </Col>
                  </Row>
            </Container>
        </section>
    );
}
export default Banner;