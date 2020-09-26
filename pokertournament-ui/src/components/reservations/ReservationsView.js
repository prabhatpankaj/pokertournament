import React, { Component } from "react";
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Row, Col, Table, Dropdown } from 'react-bootstrap';
import Overlay from 'react-bootstrap/Overlay'
import { buyinPlayer, seatPlayer } from '../../actions';
import randomlySeatPlayer from '../../playerActions'
import "./ReservationsView.css";
import Logger from "js-logger";

class ReservationsView extends Component {

    state = {
        showPlayer: null,
        showSeating: null,
        showOverlay: false
    }

    constructor(props) {
        super(props);
        this.selectedPlayers = []
    }

    onPlayersBuyIn = (eventKey, event) => {
        event.preventDefault()

        this.selectedPlayers.forEach((playerId) => {
            this.buyInPlayer(playerId)
            this.seatPlayer(playerId)
        })
        this.selectedPlayers = []
    }

    buyInPlayer = (playerId) => {
        Logger.info(`buyInPlayer:${playerId}`)
    }    

    seatPlayer = (playerId) => {
        const playerIndex = this.props.players.infoIndexByPlayerId[playerId]
        const player = this.props.players.info[playerIndex]
        if (player) {
            const that = this

            randomlySeatPlayer(this.props.tournament.id, this.props.tables, playerId)
                .then(response => response.json())
                .then(seating => {
                    that.props.seatPlayer(seating)
                    that.setState(() => ({
                        showPlayer: player,
                        showSeating: seating,
                        showOverlay: true
                    }))
                    setTimeout(() => {
                        that.setState(() => ({
                            showOverlay: false
                        }))
                    }, 2000)
                })
                .catch(error => {
                    alert(error)
                })
        }
    }

    showPlayer = (player) => {
        return (this.props.players.seatingByPlayerId[player.id] !== undefined) ? false : true
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
        this.props.players.reserved.forEach((reservation, index) => {
            const playerIndex = this.props.players.infoIndexByPlayerId[reservation.playerId]
            const player = this.props.players.info[playerIndex]
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

        var showPlayerName
        if (this.state.showPlayer) {
            showPlayerName = `${this.state.showPlayer.firstName} ${this.state.showPlayer.lastName}`
        } else {
            showPlayerName = null
        }
        var showPlayerSeating
        if (this.state.showSeating) {
            const tableName = this.props.tables.tableInfo[this.props.tables.indexForTableId[this.state.showSeating.tableId]].name
            showPlayerSeating = `Table ${tableName}, Seat ${this.state.showSeating.seat + 1}`
        } else {
            showPlayerSeating = null
        }
        const target = document.getElementById("heading1")

        return (
            <div className="ReservationsView">
                <Row>
                    <Col>
                        <Seater/>
                        <>
                            <Overlay target={target} show={this.state.showOverlay} placement="bottom">
                                {({ placement, arrowProps, show: _show, popper, ...props }) => (
                                    <div
                                        {...props}
                                        className="SeatingOverlay"
                                        style={{
                                            ...props.style
                                        }}
                                    >
                                        <div className="PlayerName">{showPlayerName}</div>
                                        <div className="PlayerSeating">{showPlayerSeating}</div>
                                    </div>
                                )}
                            </Overlay>
                        </>
                    </Col>
                </Row>
                <Row>
                    <Col sm="4" />
                    <Col sm="4">
                        <h1 id="heading1">Reservations</h1>
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
                                                <Dropdown.Item onSelect={this.onPlayersBuyIn}>Buy-In</Dropdown.Item>
                                                <Dropdown.Item onSelect={this.onPlayersForfeitReservation}>Forfeit Reservation</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </th>
                                </tr>
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
        players: state.players,
        tables: state.tables
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyinPlayer: player => {
            dispatch(buyinPlayer(player))
        },
        seatPlayer: (seating) => {
            dispatch(seatPlayer(seating))
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReservationsView));
