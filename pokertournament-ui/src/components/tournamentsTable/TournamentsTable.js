import React, { Component } from "react";
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { Row, Col, Table } from 'react-bootstrap';
import { TournamentStatusDescription } from '../../constants';
import { setTournament, setTournamentState } from '../../actions';
import { toLocaleDateTime } from '../../utils/dateUtils';
import Logger from "js-logger";
import "../../Bootstrap/css/bootstrap.min.css";
import "./TournamentsTable.css";

class TournamentsTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tournaments: [],
            redirectToTournament: false
        }
    }

    componentDidMount() {
        this.fetchTournaments()
    }

    fetchTournaments() {
        const url = `${process.env.REACT_APP_API_PATH}/tournaments?statusCode=${this.props.statusCode}`
        const that = this

        fetch(url)
            .then(response => response.json())
            .then(tournaments => {
                that.setState({
                    tournaments: tournaments
                });
            });
    }

    fetchTournament(tournamentId) {
        const url = `${process.env.REACT_APP_API_PATH}/tournaments/${tournamentId}`
        const that = this

        fetch(url)
            .then(response => response.json())
            .then(tournament => {
                that.props.setTournament(tournament)
                that.props.setTournamentState(tournament.currentState)

                that.setState({
                    tournament: tournament,
                    tournamentState: tournament.currentState,
                    redirectToTournament: true
                });
            })
            .catch(error => {
                Logger.error('Error getting tournament');
                Logger.error(error);
            });

    }

    onClick = tournament => {
        this.fetchTournament(tournament.id)
    }

    getTournamentRows(tournaments) {
        const tournamentRows = []
        for (const [index, tournament] of tournaments.entries()) {
            tournamentRows.push(
                <tr key={index} onClick={() => this.onClick(tournament)}>
                    <td>{tournament.name}</td>
                    <td>{toLocaleDateTime(tournament.scheduledStart)}</td>
                    <td>{tournament.location}</td>
                </tr>)
        }
        return tournamentRows
    }

    render() {
        const tournamentRows = this.getTournamentRows(this.state.tournaments)
        const { redirectToTournament } = this.state

        if (redirectToTournament === true) {
            return <Redirect to="/tournament" />
        }

        return (
            <div className="TournamentsTable">
                <Row>
                    <Col sm="4" />
                    <Col sm="4">
                        <h2>{TournamentStatusDescription[this.props.statusCode]}</h2>
                    </Col>
                    <Col sm="4" />
                </Row>
                <Row>
                    <Col sm="1" />
                    <Col sm="10">
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Scheduled Start</th>
                                    <th>Location</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tournamentRows}
                            </tbody>
                        </Table>
                    </Col>
                    <Col sm="1" />
                </Row>
            </div>
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
        setTournament: tournament => {
            dispatch(setTournament(tournament))
        },
        setTournamentState: tournamentState => {
            dispatch(setTournamentState(tournamentState))
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TournamentsTable));
