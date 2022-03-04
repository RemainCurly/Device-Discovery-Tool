import React from 'react';
import { Button } from 'react-bootstrap';
import '../App.css';
import { Table } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';

function NewPage(props) {
  return (
    <div classname='newpage'>
      <Container>
        <Row>
          <Col>
            <div className='row m-2'>
              <div className='col'>
                <Button href="http://www.google.com" size="lg" target="_blank" variant="primary">1</Button>
              </div>
            </div>
            <div className='row m-2'>
              <div className='col'>
                <Button href="http://www.google.com" size="lg" target="_blank" variant="primary">2</Button>
              </div>
            </div>

            <div className='row m-2'>
              <div className='col'>
                <Button href="http://www.google.com" size="lg" target="_blank" variant="primary">Primary9</Button>
              </div>

            </div>
            <div className='row m-2'>
              <div className='col'>
                <Button href="http://www.google.com" size="lg" target="_blank" variant="primary">Primary12</Button>
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