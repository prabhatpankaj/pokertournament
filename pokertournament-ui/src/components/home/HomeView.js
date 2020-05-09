import React, { Component } from "react";
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import "../../Bootstrap/css/bootstrap.min.css";
import "./HomeView.css";
import { Row, Col } from 'react-bootstrap';

class HomeView extends Component {

    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="HomeView">
                <Row>
                    <Col sm="4" />
                    <Col sm="4">
                        <h1>Home</h1>
                        <h2>Environment</h2>
                        <p>NODE_ENV={process.env.NODE_ENV}</p>
                        <p>REACT_APP_API_PATH={process.env.REACT_APP_API_PATH}</p>
                        <p>REACT_APP_CLOCK_API_PATH={process.env.REACT_APP_CLOCK_API_PATH}</p>
                    </Col>
                    <Col sm="4" />
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
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeView));
