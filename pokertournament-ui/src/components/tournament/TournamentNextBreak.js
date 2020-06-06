import React, { Component } from "react";
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Card } from 'react-bootstrap';
import formatSeconds from '../../utils/clockUtils'
import "../../Bootstrap/css/bootstrap.min.css";

class TournamentNextBreak extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const timeUntilNextBreak = formatSeconds(this.props.clock.secondsLeftUntilBreak)

        return (
            <Card>
                <Card.Header>Next Break</Card.Header>
                <Card.Body>
                    <Card.Text>{timeUntilNextBreak}</Card.Text>
                </Card.Body>
            </Card>
        )
    }

}

const mapStateToProps = state => {
    return {
        tournament: state.tournament,
        tournamentState: state.tournamentState,
        clock: state.clock
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TournamentNextBreak));
