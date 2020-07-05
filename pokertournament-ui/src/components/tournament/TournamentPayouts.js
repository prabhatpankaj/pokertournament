import React, { Component } from "react";
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import ScrollText from 'react-scroll-text'
import "./TournamentPayout.css"

class TournamentPayouts extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const payouts = '1st Place: $778.00  2nd Place: $462.00  3rd Place: $277.00  4th Place: $185.00  5th Place: 148.00'

        return (
            <ScrollText className='payouts'>{payouts}</ScrollText>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TournamentPayouts));
