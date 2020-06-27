import React, { Component } from "react";
import { connect } from 'react-redux'
import { Row, Col, Table } from 'react-bootstrap';
import { withRouter } from 'react-router-dom'
import "../../Bootstrap/css/bootstrap.min.css";

class TablesView extends Component {

    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }

    render() {
        const table = this.props.tables.tablesById["1"]
        const tableRows = []
        for (var index = 0; index < table.seats; ++index) {
            const playerId = table.players[index]
            const player = playerId ? this.props.players.byPlayerId[playerId] : null
            const playerName = player ? `${player.firstName} ${player.lastName}` : ''

            tableRows.push(
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{playerName}</td>
                </tr>
            )
        }


        return (
            <div className="TablesView">
                <Row>
                    <Col sm="4" />
                    <Col sm="4">
                        <h1>Tables</h1>
                    </Col>
                    <Col sm="4" />
                </Row>
                <Row>
                    <Col sm="2">
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Seat</th>
                                    <th>Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableRows}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        tables: state.tables,
        players: state.players   
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TablesView));
