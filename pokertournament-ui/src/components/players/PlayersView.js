import React, { Component } from "react";
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Row, Col, Table } from 'react-bootstrap';
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

    render() {
        const playerRows = []
        for (const [index, player] of this.state.players.entries()) {
            playerRows.push(
                <tr key={index}>
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
