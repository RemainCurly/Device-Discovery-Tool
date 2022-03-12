import React from 'react';
import { Button } from 'react-bootstrap';
import '../App.css';
import { Container, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

function NewPage(props) {
  return (
    <div classname='newpage'>
      <Container>
        <Row>
          <Col>

            <div className='row m-3'>
              <div className='col'>
                <LinkContainer to="/network">
                  <Button size="lg" target="_blank" variant="primary">Network Devices</Button>
                </LinkContainer>
              </div>
            </div>

            <div className='row m-3'>
              <div className='col'>
                <LinkContainer to="/down">
                  <Button size="lg" target="_blank" variant="primary">Up/Down Status</Button>
                </LinkContainer>
              </div>
            </div>

            <div className='row m-3'>
              <div className='col'>
                <LinkContainer to="/">
                  <Button size="lg" target="_blank" variant="primary">Scan Devices (schedule)</Button>
                </LinkContainer>
              </div>
            </div>

            <div className='row m-3'>
              <div className='col'>
                <LinkContainer to="/">
                  <Button size="lg" target="_blank" variant="primary">Scan Now</Button>
                </LinkContainer>
              </div>
            </div>

            <div className='row m-3'>
              <div className='col'>
                <LinkContainer to="/">
                  <Button size="lg" target="_blank" variant="primary">Device Utility</Button>
                </LinkContainer>
              </div>
            </div>

          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default NewPage;