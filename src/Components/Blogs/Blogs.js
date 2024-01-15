import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import BlogImg1 from './blog1.jpg'; // Ensure the path is correct
import { Container, Row, Col } from 'react-bootstrap';
import './blogs.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Blogs = () => {
  return (
    <section className='blogs'>
      <Container>
        <Row>
          <Col className='displayStuffs'>
            <h2>Blogs</h2>
            <p>These are a few of my favorite blogs.</p>
          </Col>
        </Row>
        <Row>
          <Carousel 
           responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={5000}
            className='blog-carousel'
          >
            <Card className='blog-card'>
              <Card.Img variant="top" src={BlogImg1} />
              <Card.Body>
                <Card.Title>Blog Title 1</Card.Title>
                <Card.Text>
                  Description for Blog 1.
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
            <Card className='blog-card'>
              <Card.Img variant="top" src={BlogImg1} />
              <Card.Body>
                <Card.Title>Blog Title 1.1111</Card.Title>
                <Card.Text>
                  Description for Blog 1
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
            <Card className='blog-card'>
              <Card.Img variant="top" src={BlogImg1} />
              <Card.Body>
                <Card.Title>Blog Title 2222</Card.Title>
                <Card.Text>
                  Description for Blog 1.
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
            <Card className='blog-card'>
              <Card.Img variant="top" src={BlogImg1} />
              <Card.Body>
                <Card.Title>Blog Title3333</Card.Title>
                <Card.Text>
                  Description for Blog 1.
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>

          </Carousel>
        </Row>
      </Container>
    </section>
  );
}

export default Blogs;
