import React, { Component } from "react";
import { connect } from 'react-redux'
import { Navbar as BootstrapNavBar, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import "../../Bootstrap/css/bootstrap.min.css";
import "./NavBar.css";

class NavBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    // TODO: Add name to NavBar <h3>{this.props.user.firstName} {this.props.user.lastName}</h3>
    // TODO: Could I use actions to control what menu items should show up?

    onSelect = (eventKey, event) => {
        event.preventDefault()
        alert(eventKey)
    }

    render() {
        if (this.props.user.enabled) {
            return (
                <div>
                    <BootstrapNavBar bg="light" expand="lg">
                        <BootstrapNavBar.Brand href="#home">Pocket Aces</BootstrapNavBar.Brand>
                        <BootstrapNavBar.Toggle aria-controls="basic-navbar-nav" />
                        <BootstrapNavBar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <LinkContainer exact to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
                                <LinkContainer to="/players"><Nav.Link>Players</Nav.Link></LinkContainer>
                                <NavDropdown title="Tournament" id="basic-nav-dropdown">
                                    <NavDropdown.Item eventKey='start' onSelect={this.onSelect}>Start</NavDropdown.Item>
                                    <NavDropdown.Item eventKey='pause' onSelect={this.onSelect}>Pause</NavDropdown.Item>
                                    <NavDropdown.Item eventKey='stop' onSelect={this.onSelect}>Stop</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </BootstrapNavBar.Collapse>
                    </BootstrapNavBar>
                </div>
            )
        } else {
            return (
                <div>
                    <BootstrapNavBar bg="light" expand="lg">
                        <BootstrapNavBar.Brand href="#home">Pocket Aces</BootstrapNavBar.Brand>
                        <BootstrapNavBar.Toggle aria-controls="basic-navbar-nav" />
                        <BootstrapNavBar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <LinkContainer to="/login"><Nav.Link>Login</Nav.Link></LinkContainer>
                            </Nav>
                        </BootstrapNavBar.Collapse>
                    </BootstrapNavBar>
                </div>
            )
        }
    }

}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
