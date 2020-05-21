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
        const currentLevel = this.props.tournament.currentState ? this.props.tournament.currentState.currentLevel : 0

        return (
            <React.Fragment>
                <TournamentClock />
                <TournamentLevel title="Next" level={currentLevel + 1} />
            </React.Fragment>
        )
    }

}

const mapStateToProps = state => {
    return {
        tournament: state.tournament
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TournamentPreStart));
