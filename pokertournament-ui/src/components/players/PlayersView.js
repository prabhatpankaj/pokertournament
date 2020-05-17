import React, { Component } from "react";
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Row, Col, Table, Dropdown } from 'react-bootstrap';
import Logger from 'js-logger'
import "../../Bootstrap/css/bootstrap.min.css";
import "./PlayersView.css";

class PlayersView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            players: []
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
                that.setState({
                    players: players
                });
            });
    }

    onPlayerReserveSeat = (eventKey, event) => {
        event.preventDefault()
        Logger.info(`onPlayerReserveSeat eventKey=${eventKey} event=?`)
    }

    onPlayerBuyin = (eventKey, event) => {
        event.preventDefault()
        Logger.info(`onPlayerBuyin eventKey=${eventKey} event=?`)
    }

    onPlayerSeat = (eventKey, event) => {
        event.preventDefault()
        Logger.info(`onPlayerSeat eventKey=${eventKey} event=?`)
    }

    render() {
        const playerRows = []
        for (const [index, player] of this.state.players.entries()) {
            playerRows.push(
                <tr key={index}>
                    <td>
                        <Dropdown>
                            <Dropdown.Toggle size="sm" variant="secondary" id="dropdown-basic">
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item eventKey={player.id} onSelect={this.onPlayerReserveSeat}>Reserve Seat</Dropdown.Item>
                                <Dropdown.Item eventKey={player.id} onSelect={this.onPlayerBuyin}>Buy-In</Dropdown.Item>
                                <Dropdown.Item eventKey={player.id} onSelect={this.onPlayerSeat}>Seat</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </td>
                    <td>{player.firstName}</td>
                    <td>{player.lastName}</td>
                    <td>{player.email}</td>
                    <td>{player.mobilePhone}</td>
                </tr>)
        }

        // TODO: Maybe react-data-grid instead of React Bootstrap Table 
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
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PlayersView));
