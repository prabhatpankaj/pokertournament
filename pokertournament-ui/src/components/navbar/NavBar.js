import React, { Component } from "react";
import { connect } from 'react-redux'
import { Navbar as BootstrapNavBar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import "../../Bootstrap/css/bootstrap.min.css";
import "./NavBar.css";

class NavBar extends Component {

    // eslint-disable-next-line
    constructor(props) {
        super(props);
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
                                <LinkContainer to="/tournaments"><Nav.Link>Tournaments</Nav.Link></LinkContainer>
                                <LinkContainer to="/players"><Nav.Link>Players</Nav.Link></LinkContainer>
                                <LinkContainer to="/dashboard"><Nav.Link>Dashboard</Nav.Link></LinkContainer>
                                <LinkContainer to="/clock"><Nav.Link>Clock</Nav.Link></LinkContainer>
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
