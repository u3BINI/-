import React, { Component } from "react";
import {
  Navbar,
  NavbarToggle,
  Container,
  NavbarCollapse,
  FormControl,
  Nav,
  Form,
  Button,
} from "react-bootstrap";
import logo from "./logo.png";
import {BrowserRouter as Router, Switch ,Route,Link, Routes} from 'react-router-dom'
import Home from '../Pages/Home'
import Skils from '../Pages/Skils'
import Blog from '../Pages/Blog'
import Contacts from '../Pages/Contacts'


export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar collapseOnSelect   expand="lg" bg="dark" variant="dark">
          <Container className="d-flex">
            <Navbar.Brand hreaf="/">
              <img
                src={logo}
                height="50"
                width="50"
                className="d-inline-block align-top"
                alt="logo"
              /> 
            </Navbar.Brand>
            <NavbarToggle aria-controls="responsive-navbar-nav" />
            <NavbarCollapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Главная</Nav.Link>
                <Nav.Link href="/skils"> Навыки </Nav.Link>
                <Nav.Link href="/contacts">Контакты</Nav.Link>
                <Nav.Link href="/blog">Блог</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="text"
                  placeholder="Поиск"
                  className="me-sm-2"
                />
                <Button variant="outline-info">Поиск</Button>
              </Form>
            </NavbarCollapse>
          </Container>
        </Navbar>

        <Router>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/skils' element={<Skils/>}/>
            <Route exact path='/contacts' element={<Contacts/>}/>
            <Route exact path='/blog' element={<Blog/>}/>
          </Routes>
        </Router>

      </>
    );
  }
}
