import React, { Component } from "react";
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Row, Col, Table, Dropdown } from 'react-bootstrap';
import { buyinPlayer, seatPlayer } from '../../actions';
import "../../Bootstrap/css/bootstrap.min.css";
import "./PlayersView.css";

class PlayersView extends Component {

    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }

    onPlayerBuyin = (eventKey, event) => {
        event.preventDefault()

        // TODO: Where do I save the buyin?
        // TODO: Where do I seat the player?
        // TODO: Need to make this a backend call. 
        const player = this.props.players.byPlayerId[eventKey]
        if (player) {
            this.props.buyinPlayer(player)
            this.props.seatPlayer(player)
        }
    }

    render() {
        const playerRows = []
        for (const [index, playerId] of this.props.players.reserved.entries()) {
            const player = this.props.players.byPlayerId[playerId]
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
        players: state.players   
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyinPlayer: player => {
            dispatch(buyinPlayer(player))
        },
        seatPlayer: player => {
            // TODO: Get randpm table and seat
            const tableId = "1"
            const seat = 3
            dispatch(seatPlayer(player, tableId, seat))
            // TODO: dispatch(seatPlayerAtTable)
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PlayersView));
