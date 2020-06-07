import React, { Component } from "react";
import { connect } from 'react-redux'
import { Card } from 'react-bootstrap';
import { withRouter } from 'react-router-dom'
import toUSCurrencyFormat from '../../utils/currencyUtils'
import "../../Bootstrap/css/bootstrap.min.css";
import "./TournamentLevel.css";

class TournamentLevel extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const { tournament, level, title } = this.props
        const levelInfo = tournament.structure.levels[level]
        const ante = levelInfo.ante > 0
            ? <Card.Text>Ante: {toUSCurrencyFormat(levelInfo.ante)}</Card.Text>
            : <React.Fragment></React.Fragment>
        const blinds = levelInfo.isBreak
            ? <React.Fragment></React.Fragment>
            :
            <React.Fragment>
                <Card.Text>Small Blind: {toUSCurrencyFormat(levelInfo.smallBlind)}</Card.Text>
                <Card.Text>Big Blind: {toUSCurrencyFormat(levelInfo.bigBlind)}</Card.Text>
                {ante}
            </React.Fragment>

        return (
            <Card>
                <Card.Header>{title} {levelInfo.name}</Card.Header>
                <Card.Body>
                    {blinds}
                    <Card.Text>{levelInfo.message}</Card.Text>
                </Card.Body>
            </Card>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TournamentLevel));
