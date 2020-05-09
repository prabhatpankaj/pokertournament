import React, { Component } from "react";
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import "../../Bootstrap/css/bootstrap.min.css";
import "./DashboardView.css";
import { Row, Col } from 'react-bootstrap';

class DashboardView extends Component {

    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="DashboardView">
                <Row>
                    <Col sm="4" />
                    <Col sm="4">
                        <h1>Dashboard</h1>
                        <h3>{this.props.user.firstName} {this.props.user.lastName}</h3>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DashboardView));
