import React, { Component } from "react";
import { connect } from 'react-redux'
import { Card } from 'react-bootstrap';

class TournamentViewCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <Card>
                <Card.Header>{this.props.title}</Card.Header>
                <Card.Body>
                    <Card.Text>{this.props.text}</Card.Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(TournamentViewCard);
