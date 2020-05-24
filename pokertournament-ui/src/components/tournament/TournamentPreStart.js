import React, { Component } from "react";
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import TournamentClock from './TournamentClock'
import TournamentLevel from './TournamentLevel'
import "../../Bootstrap/css/bootstrap.min.css";
import "./TournamentLevel.css";

class TournamentPreStart extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <React.Fragment>
                <TournamentClock />
                <TournamentLevel title="Next" level={0} />
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TournamentPreStart));
