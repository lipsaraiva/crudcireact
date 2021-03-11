import React, { Component } from 'react'; 
import { Link } from "react-router-dom";
import {Navbar, Nav} from 'react-bootstrap';

export default class Menu extends Component {
  render() {
    return (
      //Menu de navegacao - navbar bootstrap
      <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link class="nav-link" to="/loja/index">Listar Produtos</Link>
            <Link class="nav-link" to="/loja/form">Criar Produto</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

