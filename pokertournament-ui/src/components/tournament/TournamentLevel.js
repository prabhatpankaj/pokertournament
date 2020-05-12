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

        const { tournament, level } = this.props
        const levelInfo = tournament.levels[level]

        return (
            <Card>
                <Card.Body>
                    <Card.Title>Level {level}</Card.Title>
                    <Card.Text>Small Blind: {toUSCurrencyFormat(levelInfo.smallBlind)}</Card.Text>
                    <Card.Text>Big Blind: {toUSCurrencyFormat(levelInfo.bigBlind)}</Card.Text>
                    <Card.Text>Ante: {toUSCurrencyFormat(levelInfo.ante)}</Card.Text>
                    <Card.Text>{levelInfo.message}</Card.Text>
                </Card.Body>
            </Card>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TournamentLevel));
