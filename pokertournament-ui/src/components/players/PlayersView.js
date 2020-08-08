import React, { Component } from "react";
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Row, Col, Table, Dropdown } from 'react-bootstrap';
import Overlay from 'react-bootstrap/Overlay'
import { buyinPlayer, seatPlayer } from '../../actions';
import fetch from "node-fetch";
import "./PlayersView.css";
import Logger from "js-logger";

// TODO: [PT-48] This should be reservations or something like that

class PlayersView extends Component {

    state = {
        showPlayer: null,
        showSeating: null,
        show: false
    }

    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }

    onPlayerBuyin = (eventKey, event) => {
        event.preventDefault()

        const player = this.props.players.byPlayerId[eventKey]
        if (player) {
            this.buyinPlayer(this.props.tournament, player)
            this.seatPlayer(this.props.tournament, player)
        }
    }

    buyinPlayer = (tournament, player) => {
        // TODO: Where do I save the buyin?
    }

    seatPlayer = (tournament, player) => {
        const url = `${process.env.REACT_APP_API_PATH}/seating/tournament/${tournament.id}/player/${player.id}/random`
        const that = this

        fetch(url, { method: 'PUT' })
            .then(response => response.json())
            .then(seating => {
                that.props.seatPlayer(player, seating.tableId, seating.seat)
                that.setState(() => ({
                    showPlayer: player,
                    showSeating: seating,
                    show: true
                }))

                setTimeout(() => {
                    that.setState(() => ({
                        show: false
                    }))
                }, 2000)
            });
    }

    setShow = (show) => {
        this.setState({ show: show })
    }

    render() {
        const playerRows = []
        for (const [index, reservation] of this.props.players.reserved.entries()) {
            const player = this.props.players.byPlayerId[reservation.playerId]
            playerRows.push(
                <tr key={index}>
                    <td>
                        <Dropdown>
                            <Dropdown.Toggle size="sm" variant="secondary" id="dropdown-basic">
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item eventKey={player.id} onSelect={this.onPlayerBuyin}>Buy-In</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </td>
                    <td>{player.firstName}</td>
                    <td>{player.lastName}</td>
                    <td>{player.email}</td>
                    <td>{player.mobilePhone}</td>
                </tr>)
        }

        const showPlayerName = this.state.showPlayer ? `${this.state.showPlayer.firstName} ${this.state.showPlayer.lastName}` : null
        const showPlayerSeating = this.state.showSeating ? `Table ${this.props.tables.tablesById[this.state.showSeating.tableId].name}, Seat ${this.state.showSeating.seat + 1}` : null
        const target = document.getElementById("heading1")

        return (
            <div className="PlayersView">
                <Row>
                    <Col>
                        <>
                            <Overlay target={target} show={this.state.show} placement="bottom">
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
                        <h1 id="heading1">Players</h1>
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
        players: state.players,
        tables: state.tables
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyinPlayer: player => {
            dispatch(buyinPlayer(player))
        },
        seatPlayer: (player, tableId, seat) => {
            dispatch(seatPlayer(player, tableId, seat))
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PlayersView));
