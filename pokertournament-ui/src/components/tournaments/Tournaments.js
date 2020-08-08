import React, { Component } from "react";
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { Row, Col, Table } from 'react-bootstrap';
import { TournamentStatusDescription } from '../../constants';
import { API } from '../../constants'
import { setTournament, setTournamentState, setSeating, setTables, setPlayers, setReservations } from '../../actions';
import { toLocaleDateTime } from '../../utils/dateUtils';
import Logger from "js-logger";
import "./Tournaments.css";

class Tournaments extends Component {

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

    /**
     * Reads a tournament from the backend and stores it into state.
     * @param {*} tournamentId 
     */
    fetchTournament(tournamentId) {
        const url = `${process.env.REACT_APP_API_PATH}${API.TOURNAMENTS_URL}/${tournamentId}`
        const that = this

        fetch(url)
            .then(response => response.json())
            .then(tournament => {
                that.props.setTournament(tournament)
                that.props.setTournamentState(tournament.currentState)
                that.setState({
                    redirectToTournament: true
                });
            })
            .catch(error => {
                Logger.error('Error getting tournament');
                Logger.error(error);
            });
    }

    fetchSeating(tournamentId) {
        const url = `${process.env.REACT_APP_API_PATH}${API.SEATING_URL}/${tournamentId}`
        const that = this

        fetch(url)
            .then(response => response.json())
            .then(seating => {
                that.props.setSeating(seating)
            })
            .catch(error => {
                Logger.error('Error getting seating');
                Logger.error(error);
            });
    }

    fetchTables(tournamentId) {
        const url = `${process.env.REACT_APP_API_PATH}${API.TABLES_URL}/${tournamentId}`
        const that = this

        fetch(url)
            .then(response => response.json())
            .then(tables => {
                that.props.setTables(tables)
                that.fetchSeating(tournamentId)
            })
            .catch(error => {
                Logger.error('Error getting tables');
                Logger.error(error);
            })
    }

    fetchPlayers() {
        // TODO: [PT-38] This should be players in league
        const url = `${process.env.REACT_APP_API_PATH}${API.PLAYERS_URL}`
        const that = this

        fetch(url)
            .then(response => response.json())
            .then(players => {
                that.props.setPlayers(players)
            })
            .catch(error => {
                Logger.error('Error getting players');
                Logger.error(error);
            })
    }

    fetchReservations(tournamentId) {
        const url = `${process.env.REACT_APP_API_PATH}/reservations/tournament/${tournamentId}`
        const that = this

        fetch(url)
            .then(response => response.json())
            .then(reservations => {
                that.props.setReservations(reservations)
            })
            .catch(error => {
                Logger.error('Error getting reservations');
                Logger.error(error);
            })
    }

    onClick = tournament => {
        this.fetchTournament(tournament.id)
        this.fetchPlayers()
        this.fetchReservations(tournament.id)
        this.fetchTables(tournament.id)
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
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setTournament: tournament => {
            dispatch(setTournament(tournament))
        },
        setTournamentState: tournamentState => {
            dispatch(setTournamentState(tournamentState))
        },
        setPlayers: players => {
            dispatch(setPlayers(players))
        },
        setReservations: reservations => {
            dispatch(setReservations(reservations))
        },
        setTables: tables => {
            dispatch(setTables(tables))
        },
        setSeating: seating => {
            dispatch(setSeating(seating))
        }        
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Tournaments));
