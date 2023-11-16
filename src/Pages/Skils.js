import React, { Component } from "react";
import { Container, Tab,Nav,Row,Col} from "react-bootstrap";
import js from '../img/js.png'
import html from '../img/html.png'
import css from '../img/css.png'
import react from '../img/react.jpg'
import bootstrap from '../img/bootstrap.png'
import git from '../img/git.jpg'
import less from '../img/less.png'


export default class Skils extends Component {
  render() {
    return (
      <Container>
        <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={2}>
              <Nav variant="pills" className="flex-column mt-2">
                <Nav.Item>
                  <Nav.Link eventKey='first' > JS</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='second'>HTML</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='third'> CSS</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='fourth'> React</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='fifth'> Bootstrap</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='sixth'> Git</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='seventh'> Less</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content className="mt-3">
                <Tab.Pane eventKey='first'>
                  <img src={js} style={{width: '300px'}} className="d-block img-fluid" />
<p></p>
                </Tab.Pane>
                <Tab.Pane eventKey='second'>
                  <img style={{width: '300px'}} src={html} className=" d-block img-fluid" />
<p></p>
                </Tab.Pane>
                <Tab.Pane eventKey='third'>
                  <img style={{width: '500px'}} src={css} className=" d-block img-fluid" />
<p></p>
                </Tab.Pane>
                <Tab.Pane eventKey='fourth'>
                  <img style={{width: '500px'}} src={react} className="d-block img-fluid" />
<p></p>
                </Tab.Pane>
                <Tab.Pane eventKey='fifth'>
                  <img style={{width: '500px'}} src={bootstrap} className="d-block img-fluid" />
<p></p>
                </Tab.Pane>
                <Tab.Pane eventKey='sixth'>
                  <img style={{width: '500px'}} src={git} className="d-block img-fluid" />
<p></p>
                </Tab.Pane>
                <Tab.Pane eventKey='seventh'>
                  <img style={{width: '500px'}} src={less} className="d-block img-fluid" />
<p></p>
                </Tab.Pane>
              </Tab.Content>

            </Col>
          </Row>
        </Tab.Container>
      </Container>
    );
  }
}
