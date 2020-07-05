import React, { Component } from "react";
import { connect } from 'react-redux'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import "./NavBarView.css";

class NavBarView extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const profileMenuTitle = `${this.props.user.firstName} ${this.props.user.lastName}`

        if (this.props.user.enabled) {
            return (
                <div>
                    <Navbar bg="light" expand="lg">
                        <Navbar.Brand href="#home">Pocket Aces</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                {this.props.menus.map((menuItem, menuIndex) => {
                                    if (menuItem.items) {
                                        return <NavDropdown key={menuIndex} title={menuItem.name} id="basic-nav-dropdown">
                                        {menuItem.items.map((value, itemIndex) => {
                                            return <NavDropdown.Item key={itemIndex} eventKey={value.eventKey} onSelect={value.onSelect}>{value.text}</NavDropdown.Item>
                                        })}
                                        </NavDropdown>
                                    } else {
                                        return <LinkContainer exact to={menuItem.to}><Nav.Link>{menuItem.name}</Nav.Link></LinkContainer>
                                    }
                                })}
                            </Nav>
                        </Navbar.Collapse>

                        <Navbar.Collapse className="justify-content-end">
                            <NavDropdown key='1' title={profileMenuTitle} id="basic-nav-dropdown">
                                <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
                            </NavDropdown>
                        </Navbar.Collapse>

                    </Navbar>
                </div>
            )
        } else {
            return (
                <div>
                    <Navbar bg="light" expand="lg">
                        <Navbar.Brand href="#home">Pocket Aces</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                {/* <LinkContainer to="/login"><Nav.Link>Login</Nav.Link></LinkContainer> */}
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            )
        }
    }

}

const mapStateToProps = state => {
    return {
        user: state.user,
        menus: state.menus
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBarView);
