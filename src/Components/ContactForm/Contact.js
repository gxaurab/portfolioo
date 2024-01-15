
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';
import { Col, Container, Row } from 'react-bootstrap';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_depfg24", "template_7z3xz5d", form.current, "Rd3-9rYeWa8ROP8h6")
      .then((result) => {
          console.log(result.text);
          if (form.current) {
            form.current.reset();
          }
      }, (error) => {
          console.log(error.text);
      });
  };

    return (
<div className='contactFULL'>
<Container>
  <Row>
    <Container>
      <h1 className='findme'>  findMee</h1>
      <p > fill up the form</p>
      </Container>
  </Row>
</Container>
      <form ref={form} onSubmit={sendEmail}>
      <div className="background">
        <div className="container">
          <div className="screen">
            <div className="screen-header">
              <div className="screen-header-left">
                <div className="screen-header-button close"></div>
                <div className="screen-header-button maximize"></div>
                <div className="screen-header-button minimize"></div>
              </div>
              <div className="screen-header-right">
                <div className="screen-header-ellipsis"></div>
                <div className="screen-header-ellipsis"></div>
                <div className="screen-header-ellipsis"></div>
              </div>
            </div>
            <div className="screen-body">
              <div className="screen-body-item left">
                <div className="app-title">
                  <span>CONTACT</span>
                  <span>ME</span>
                </div>
                <div className="app-contact">CONTACT INFO : +977 9813626267</div>
              </div>
              <div className="screen-body-item">
                <div className="app-form">
                  <div className="app-form-group">
                    <input className="app-form-control" placeholder="NAME"/>
                  </div>
                  <div className="app-form-group">
                    <input className="app-form-control" placeholder="EMAIL" />
                  </div>
                  <div className="app-form-group">
                    <input className="app-form-control" placeholder="Org/ School/ Place" />
                  </div>
                  <div className="app-form-group message">
                    <input className="app-form-control" placeholder="MESSAGE" />
                  </div>
                  <div className="app-form-group buttons">
                    <button className="app-form-button">SEND</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          </div>
          </form>
          </div>
    );
    };
  export default Contact;
  