import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './projects.css';

import WordleImage from './images/Wordle.png';
import HugoImage from './images/HUGOsite.png';
import TTtoe from './images/TicTacToe.png';
import loading from './images/loading.png';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Projects = () => {
  const responsive = {
    superLargeDesktop: {
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
            <h2>Projects</h2>
            <p>There is a lot more to build, lot more to learn</p>
          </Col>
        </Row>
        <Row>
          <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={5000} className="project-slider">
            <Card className='CarouselStyle'>
              <Card.Img src={WordleImage} alt="WordleGame" />
              <Card.Body>
                <Card.Title> #1 </Card.Title>
                <Card.Text>A simple Javascript game: WORLDE</Card.Text>
                <a href='www.gaurab.me/WORDLE/'><Button variant="dark" >View the project</Button></a>
              </Card.Body>
            </Card>
            
            <Card className='CarouselStyle'>
              <Card.Img src={HugoImage} alt='portfolio-site-img' />
              <Card.Body>
                <Card.Title> #2 </Card.Title>
                <Card.Text>A Simple Portfolio clone from HUGO</Card.Text>
                <a href='www.gaurab.me/site/'><Button variant="dark" >View the project</Button></a>
              </Card.Body>
            </Card>
            
            <Card className='CarouselStyle'>
              <Card.Img src={TTtoe} alt='tictactoe-img' />
              <Card.Body>
                <Card.Title>Project #3 </Card.Title>
                <Card.Text>A simple Javascript game WORLDE</Card.Text>
                <a href='www.gaurab.me/TicTacToe/'><Button variant="dark" >View the project</Button></a>
              </Card.Body>
            </Card>
            
            <Card className='CarouselStyle'>
              <Card.Img src={loading} alt='loadingProjects-img' />
              <Card.Body>
                <Card.Title>Project #4 </Card.Title>
                <Card.Text>A simple Javascript game WORLDE</Card.Text>
                <Button variant="dark" >View the project</Button>
              </Card.Body>
            </Card>
          </Carousel>
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
