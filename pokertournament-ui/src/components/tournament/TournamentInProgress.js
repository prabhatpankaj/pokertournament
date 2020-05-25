import React, { Component } from "react";
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import TournamentClock from './TournamentClock'
import TournamentLevel from './TournamentLevel'
import "../../Bootstrap/css/bootstrap.min.css";

class TournamentInProgress extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const currentLevel = this.props.tournamentState.currentLevel

        return (
            <React.Fragment>
                <TournamentClock />
                <TournamentLevel title="Current" level={currentLevel} />
                <TournamentLevel title="Next" level={currentLevel+1} />
            </React.Fragment>
        )
    }

}

const mapStateToProps = state => {
    return {
        tournament: state.tournament,
        tournamentState: state.tournamentState
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TournamentInProgress));
