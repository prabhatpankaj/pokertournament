import React, { Component } from "react";
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import TournamentViewCard from './TournamentViewCard'
// import Logger from 'js-logger'
import "../../Bootstrap/css/bootstrap.min.css";
import formatSeconds from '../../utils/clockUtils'

class TournamentNextBreak extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const timeLeftUntilBreak = formatSeconds(this.props.clock.remainingSecondsUntilBreak)

        return (
            <TournamentViewCard title='Next Break' text={timeLeftUntilBreak} />
        )
    }

}

const mapStateToProps = state => {
    return {
        clock: state.clock
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TournamentNextBreak));
