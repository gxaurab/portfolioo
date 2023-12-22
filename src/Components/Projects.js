import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import WordleImage from '../assets/img/Wordle.png';
import HugoImage  from '../assets/img/HUGOsite.png';
import TTtoe from '../assets/img/TicTacToe.png';
import loading from '../assets/img/loading.png';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Projects=()=> {
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

  return (
    <section className='projects'>
        <Container>
            <Row>
                <Col className='displayStuffs'>
                <h2> Projects</h2>
                <p> There is a lot more to build, lot more to learn</p>
                </Col>

    <Carousel responsive={responsive} infinite={true} className='project-carousel'>
      <div className='carousel-item1' id='carousel-items'>
      <Card className='CarouselStyle' style={{ width: '18rem' }}>
        <Card.Img  src={WordleImage} alt="WordleGame" />
        <Card.Body>
          <Card.Title> #1 </Card.Title>
          <Card.Text>
            A simple Javascript game: WORLDE
          </Card.Text>
          <a href='www.gaurab.me/WORDLE/'><Button variant="dark" >View the project</Button></a>
        </Card.Body>
      </Card>
      </div>
      <div className='carousel-item2' id='carousel-items'>
      <Card  className='CarouselStyle' style={{ width: '18rem' }}>
        <Card.Img  src={HugoImage} alt='portfolio-site-img' />
        <Card.Body>
          <Card.Title> #2 </Card.Title>
          <Card.Text>
            A Simple Portfolio clone  from  HUGO
          </Card.Text>
          <a href='www.gaurab.me/site/'><Button variant="dark" >View the project</Button></a>
        </Card.Body>
      </Card>
      </div>
      <div className='carousel-item3' id='carousel-items'>
      <Card  className='CarouselStyle' style={{ width: '18rem' }}>
        <Card.Img src={TTtoe} alt='tictactoe-img' />
        <Card.Body>
          <Card.Title>Project #3 </Card.Title>
          <Card.Text>
            A simple Javascript game WORLDE
          </Card.Text>
          <a href='www.gaurab.me/TicTacToe/'><Button variant="dark" >View the project</Button></a>
        </Card.Body>
      </Card>
      </div>
      <div className='carousel-item4' id='carousel-items'>
      <Card className='CarouselStyle' style={{ width: '18rem' }}>
      <Card.Img src={loading} alt='loadingProjects-img' />
        <Card.Body >
          <Card.Title>Project #4 </Card.Title>
          <Card.Text>
            A simple Javascript game WORLDE
          </Card.Text>
          <Button variant="dark" > View the project</Button>
        </Card.Body>
      </Card>
      </div>
      </Carousel>
 
 
    </Row>
    
    </Container>
    </section>
  );
}

export default Projects;