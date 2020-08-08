import React, { Component } from "react";
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Row, Col, Table, Dropdown } from 'react-bootstrap';
import { reservePlayer } from '../../actions';
import fetch from "node-fetch";
import "./ReservationsView.css";
import Logger from "js-logger";

// TODO: [PT-48] How do I load this page with players from the league that have not yet
// reserved a spot? 

class ReservationsView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            leaguePlayers: []
        }
    }

    componentDidMount() {
        // TODO: [PT-48] This should exclude those players that have already made reservations
        // this.fetchPlayers()
        this.getAvailablePlayers()
    }

    getAvailablePlayers = () => {
        // Logger.info(JSON.stringify(this.props.players))
        // const initialPlayers = {
        //     "byPlayerId": {},
        //     "reserved": [],
        //     "boughtIn": [],
        //     "active": [],
        //     "busted": []
        // }

        // TODO: [PT-48] At this point, byPlayerId is loaded, but the others are not. They should be loaded with
        // the tournament. 
        // TODO: [PT-48] Then, a list of available players (league players not already reserved) can be created in state
        // here and rebuilt (or updated) on each reservation.
        
    }

    fetchPlayers = () => {
        // TODO: [PT-48] This should be by leagueId
        // TODO: [PT-48] I think this is already done when the tournament is loaded.
        const url = `${process.env.REACT_APP_API_PATH}/players`
        const that = this

        fetch(url)
            .then(response => response.json())
            .then(players => {
                let leaguePlayersById = {}
                players.forEach(player => {
                    leaguePlayersById[player.id] = player
                })

                that.setState({
                    leaguePlayers: players,
                    leaguePlayersById: leaguePlayersById
                });
            });
    }

    onPlayerReserveSeat = (eventKey, event) => {
        event.preventDefault()

        // TODO: Where do I save the registration?
        // TODO: Need to make backend calls
        const player = this.state.leaguePlayersById[eventKey]
        if (player) {
            this.reservePlayer(this.props.tournament, player)
        }
    }

    reservePlayer = (tournament, player) => {
        const url = `${process.env.REACT_APP_API_PATH}/reservations/tournament/${tournament.id}/player/${player.id}`
        const that = this

        fetch(url, { method: 'POST' })
            .then(response => response.json())
            .then((reservation) => {
                that.props.reservePlayer(player)
            })

    }

    render() {
        const playerRows = []
        for (const [index, player] of this.state.leaguePlayers.entries()) {
            playerRows.push(
                <tr key={index}>
                    <td>
                        <Dropdown>
                            <Dropdown.Toggle size="sm" variant="secondary" id="dropdown-basic">
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item eventKey={player.id} onSelect={this.onPlayerReserveSeat}>Reserve Seat</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </td>
                    <td>{player.firstName}</td>
                    <td>{player.lastName}</td>
                    <td>{player.email}</td>
                    <td>{player.mobilePhone}</td>
                </tr>)
        }

        return (
            <div className="PlayersView">
                <Row>
                    <Col sm="4" />
                    <Col sm="4">
                        <h1>Players</h1>
                    </Col>
                    <Col sm="4" />
                </Row>
                <Row>
                    <Col sm="2" />
                    <Col sm="8">
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Action</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>Mobile Phone</th>
                                </tr>
                            </thead>
                            <tbody>
                                {playerRows}
                            </tbody>
                        </Table>
                    </Col>
                    <Col sm="2" />
                </Row>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        tournament: state.tournament,
        tournamentState: state.tournamentState,
        players: state.players
    }
}

const mapDispatchToProps = dispatch => {
    return {
        reservePlayer: player => {
            dispatch(reservePlayer(player))
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReservationsView));
