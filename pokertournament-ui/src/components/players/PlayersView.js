import React, { Component } from "react";
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Row, Col, Table, Dropdown } from 'react-bootstrap';
import { reservePlayer } from '../../actions';
import fetch from "node-fetch";
import "./PlayersView.css";

class PlayersView extends Component {

    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }

    onPlayerReserveSeat = (eventKey, event) => {
        event.preventDefault()

        const playerId = eventKey
        const playerIndex = this.props.players.infoIndexByPlayerId[playerId]
        const player = this.props.players.info[playerIndex]
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
                that.props.reservePlayer(reservation)
            })

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

    render() {
        const playerRows = []
        this.props.players.info.forEach((player, index) => {
            if (this.showPlayer(player)) {
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
        reservePlayer: reservation => {
            dispatch(reservePlayer(reservation))
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PlayersView));
