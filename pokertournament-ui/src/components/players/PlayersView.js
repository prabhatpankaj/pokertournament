import React, { Component } from "react";
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Row, Col, Table, Dropdown } from 'react-bootstrap';
import { reservePlayer } from '../../actions';
import fetch from "node-fetch";
import "./PlayersView.css";

class PlayersView extends Component {

    state = {
        showPlayer: null,
        showSeating: null,
        showOverlay: false
    }

    constructor(props) {
        super(props);
        this.selectedPlayers = []
    }

    onPlayersReserveSeat = (eventKey, event) => {
        event.preventDefault()

        this.selectedPlayers.forEach((playerId) => {
            this.reservePlayer(this.props.tournament, playerId)
        })
        this.selectedPlayers = []
    }

    reservePlayer = (tournament, playerId) => {
        const url = `${process.env.REACT_APP_API_PATH}/reservations/tournament/${tournament.id}/player/${playerId}`
        const that = this

        fetch(url, { method: 'POST' })
            .then(response => response.json())
            .then((reservation) => {
                that.props.reservePlayer(reservation)
            })
    }

    onPlayersBuyIn = (eventKey, event) => {
        event.preventDefault()

        this.selectedPlayers.forEach((playerId) => {
            this.buyInPlayer(this.props.tournament, playerId)
            this.seatPlayer(this.props.tournament, playerId)
        })
        this.selectedPlayers = []
    }

    buyInPlayer = (tournament, playerId) => {

    }    

    showPlayer = (player) => {
        if (this.props.players.reservedByPlayerId[player.id] !== undefined) {
            return false
        }

        if (this.props.players.seatingByPlayerId[player.id] !== undefined) {
            return false
        }

        return true
    }

    onSelectPlayer = (event) => {
        const playerId = event.target.value

        if (event.target.checked) {
            this.selectedPlayers.push(playerId)
        } else {
            var index = this.selectedPlayers.indexOf(playerId);
            this.selectedPlayers.splice(index, 1);
        }
    }

    render() {
        const playerRows = []
        this.props.players.info.forEach((player, index) => {
            if (this.showPlayer(player)) {
                playerRows.push(
                    <tr key={index}>
                        <td>
                            <input type="checkbox" value={player.id} onClick={this.onSelectPlayer.bind(this)} />
                        </td>
                        <td>{player.firstName}</td>
                        <td>{player.lastName}</td>
                        <td>{player.email}</td>
                        <td>{player.mobilePhone}</td>
                    </tr>)
            }
        })

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
                                    <th>
                                        <input type="checkbox" onClick="onSelectAll" />
                                    </th>
                                    <th colSpan="5">
                                        <Dropdown>
                                            <Dropdown.Toggle variant="primary" id="dropdown-basic">Actions</Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item onSelect={this.onPlayersReserveSeat}>Reserve Seat</Dropdown.Item>
                                                <Dropdown.Item onSelect={this.onPlayersBuyIn}>Buy-In</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </th>
                                </tr>
                                <tr>
                                    <th></th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>Mobile Phone</th>
                                    <th>Player ID</th>
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
        reservePlayer: reservation => {
            dispatch(reservePlayer(reservation))
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PlayersView));
