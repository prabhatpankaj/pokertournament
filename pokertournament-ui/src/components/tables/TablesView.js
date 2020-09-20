import React, { Component } from "react";
import { connect } from 'react-redux'
import { Row, Col, Table } from 'react-bootstrap';
import { withRouter } from 'react-router-dom'
import "./TablesView.css";

class TablesView extends Component {

    render() {
        let tables = []
        this.props.tables.tablesSeatingInfo.forEach((tablesSeatingInfo, tableIndex) => {
            const table = this.props.tables.tableInfo[tableIndex]
            const tableRows = []

            for (var seatIndex = 0; seatIndex < table.seats; ++seatIndex) {
                const playerId = tablesSeatingInfo[seatIndex]
                const player = (playerId == null) ? null : this.props.players.info[this.props.players.infoIndexByPlayerId[playerId]]
                const playerName = player ? `${player.firstName} ${player.lastName}` : null

                tableRows.push(
                    <tr key={seatIndex}>
                        <td>{seatIndex + 1}</td>
                        <td>{playerName}</td>
                    </tr>
                )
            }

            tables.push(<Col sm="3">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th colSpan="2" style={{ textAlign: "center" }}>{table.name}</th>
                        </tr>
                        <tr>
                            <th>Seat</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableRows}
                    </tbody>
                </Table>
            </Col>)
        })

        return (
            <div className="TablesView">
                <Row>
                    <Col>
                        <h1>Tables</h1>
                    </Col>
                </Row>
                <Row>
                    {tables}
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
