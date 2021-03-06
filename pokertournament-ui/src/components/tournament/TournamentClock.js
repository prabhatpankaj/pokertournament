import React, { Component } from "react";
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Card } from 'react-bootstrap';
import formatSeconds from '../../utils/clockUtils'
import "./TournamentClock.css";
var dateFormat = require('dateformat');

class TournamentClock extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const currentLevel = this.props.tournamentState.currentLevel
        const scheduledStart = dateFormat(this.props.tournament.scheduledStart, "dddd, mmmm d, yyyy	h:MM TT")
        const timeLeftInLevel = this.props.clock.secondsLeftInLevel > 0 
            ? formatSeconds(this.props.clock.secondsLeftInLevel)
            : ''

        return (

            <div className="TournamentClock">
                <Card>
                    <Card.Body>
                        {currentLevel === -1
                            ? <h2>{scheduledStart}</h2>
                            : <Card.Text className='clock'>{timeLeftInLevel}</Card.Text>
                        }
                    </Card.Body>
                </Card>

            </div >
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TournamentClock));
