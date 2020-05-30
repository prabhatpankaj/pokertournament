import React, { Component } from "react";
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Row, Col, Table, Dropdown } from 'react-bootstrap';
import { addPlayer, reservePlayer } from '../../actions';
import "../../Bootstrap/css/bootstrap.min.css";
import "./ReservationsView.css";

class ReservationsView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            leaguePlayers: []
        }
    }

    componentDidMount() {
        this.fetchPlayers()
    }

    fetchPlayers() {
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
        const player = this.state.leaguePlayersById[eventKey]
        if (player) {
            this.props.addPlayer(player)
            this.props.reservePlayer(player)
        }
    }

    onPlayerBuyin = (eventKey, event) => {
        event.preventDefault()
    }

    onPlayerSeat = (eventKey, event) => {
        event.preventDefault()
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
        addPlayer: player => {
            dispatch(addPlayer(player))
        },
        reservePlayer: player => {
            dispatch(reservePlayer(player))
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReservationsView));
