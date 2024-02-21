import React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Col, Container, Row } from 'react-bootstrap';
import './footer.css';
import github from "./images/github.png";
import instagram from "./images/instagram.png";
import twitter from "./images/twitter.png";
import youtube from "./images/youtube.png";

const Footer = () => {
    return (
        <section className="footerbody">
            <Container>
                <Row>
                    <Col>
                        <Stack direction="row" spacing={2}>
                            <a href='https://www.github.com'><Avatar alt="Github" src={github}/> </a>
                            <a href='https://www.twitter.com'><Avatar alt="Twitter" src={twitter}/></a>
                            <a href='https://www.instagram.com'><Avatar alt="Instagram" src={instagram} /> </a>
                            <a href='https://www.youtube.com'><Avatar alt="Youtube" src={youtube} /></a>
                        </Stack>
                    </Col>
                    <Col>
                        <div className='quote'>
                            <h1>Beautiful Quote For Beautiful People</h1> 
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Footer;
