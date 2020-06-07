import React, { Component } from "react";
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Card } from 'react-bootstrap';

class TournamentCurrentTime extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => this.setState({ time: new Date() }), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const currentTime = this.state.time ? this.state.time.toLocaleTimeString() : ''

        return (
            <Card>
                <Card.Header>Current Time</Card.Header>
                <Card.Body>
                    <Card.Text>{currentTime}</Card.Text>
                </Card.Body>
            </Card>
        )
    }

}

const mapStateToProps = state => {
    return {
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TournamentCurrentTime));
