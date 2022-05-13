import React from 'react';
import { Button } from 'react-bootstrap';
import '../App.css';
import { Container, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

function NewPage() {
  return (
    <div>
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
                  <Button size="lg" target="_blank" variant="primary">Down Devices</Button>
                </LinkContainer>
              </div>
            </div>

            <div className='row m-3'>
              <div className='col'>
                <Button size="lg" target="_blank" variant="secondary">Scan Devices (schedule)</Button>
              </div>
            </div>

            <div className='row m-3'>
              <div className='col'>
                <Button size="lg" target="_blank" variant="secondary">Scan Now</Button>
              </div>
            </div>

            <div className='row m-3'>
              <div className='col'>
                <Button size="lg" target="_blank" variant="secondary">Device Utility</Button>
              </div>
            </div>

          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default NewPage;