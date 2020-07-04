import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Button, Form, Row, Col } from 'react-bootstrap';
import { setUser } from '../../actions';
import Logger from 'js-logger'
import fetch from "node-fetch";
import "../../Bootstrap/css/bootstrap.min.css";
import "./LoginView.css";

const FormData = require('form-data');

class LoginView extends Component {

    state = {
        redirectToReferrer: false
    }

    constructor(props) {
        super(props);
        this.form = {};
    }

    onSubmit = event => {
        const url = `${process.env.REACT_APP_API_PATH}/login`

        event.preventDefault();

        var form = new FormData();
        form.append("username", this.form.email);
        form.append("password", this.form.password);

        fetch(url, {
            method: 'POST',
            body: form
        })
            .then((response) => {
                if (response.ok) {
                    Logger.info(`${this.form.email} login success`);
                    this.getUser();
                } else {
                    throw response.statusText
                }
            })
            .catch(error => {
                Logger.error('Login error');
                Logger.error(error);
            });
    }

    getUser = () => {
        const url = `${process.env.REACT_APP_API_PATH}/users/${this.form.email}`
        const that = this

        fetch(url)
            .then(response => response.json())
            .then((user) => {
                that.props.setUser(user)
                that.setState(() => ({
                    redirectToReferrer: true
                }))
            })
            .catch(error => {
                Logger.error('Error getting principal');
                Logger.error(error);
            });
    }

    onChange = event => {
        const { name, value } = event.target;
        this.form[name] = value;
    };

    render() {
        const { from } = this.props.location.state || { from: { pathname: '/' } }
        const { redirectToReferrer } = this.state

        if (redirectToReferrer === true) {
            return <Redirect to={from} />
        }

        return (
            <div className="LoginView">
                <Row>
                    <Col sm="4" />
                    <Col sm="4">
                        <Form onSubmit={this.onSubmit}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" name="email" onChange={this.onChange} />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name="password" placeholder="Password" onChange={this.onChange} />
                            </Form.Group>

                            <Button variant="primary" type="submit">Submit</Button>
                        </Form>
                    </Col>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setUser: user => {
            dispatch(setUser(user))
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginView));
