import React from 'react';
import { Button } from 'react-bootstrap';
import '../App.css';
import { Container, Row, Col } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'

function NewPage(props) {
  return (
    <div classname='newpage'>
      <Container>
        <Row>
          <Col>
            <div className='row m-3'>
              <div className='col'>
              <LinkContainer to="/network">
                <Button size="lg"  target="_blank" variant="primary">Network Devices</Button>
              </LinkContainer>
              </div>
            </div>
            <div className='row m-3'>
              <div className='col'>
                <Button href="http://www.google.com" size="lg" target="_blank" variant="primary">Up/Down Status</Button>
              </div>
            </div>

            <div className='row m-3'>
              <div className='col'>
                <Button href="http://www.google.com" size="lg" target="_blank" variant="primary">Scan Devices</Button>
              </div>

            </div>
            <div className='row m-3'>
              <div className='col'>
                <Button href="http://www.google.com" size="lg" target="_blank" variant="primary">Scan Now</Button>
              </div>
            </div>

            <div className='row m-3'>
              <div className='col'>
                <Button href="http://www.google.com" size="lg" target="_blank" variant="primary">Device Utility</Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      {/* <Container>
        <Col>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td colSpan={2}>Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
        </Col>

      </Container> */}
    </div>
  )
}

export default NewPage;