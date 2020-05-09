import React, { Component } from "react";
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Row, Col, Table } from 'react-bootstrap';
import { TournamentStatusDescription } from '../../constants'
import toLocaleDateTime from '../../utils/dateUtils'
import "../../Bootstrap/css/bootstrap.min.css";
import "./TournamentsTable.css";

class TournamentsTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tournaments: [],
        }
    }

    componentDidMount() {
        this.fetchTournaments()
    }

    fetchTournaments() {
        const url = `${process.env.REACT_APP_API_PATH}/tournaments?statusCode=${this.props.statusCode}`
        const that = this

        fetch(url)
            .then(response => response.json())
            .then(tournaments => {
                that.setState({
                    tournaments: tournaments
                });
            });
    }

    getTournamentRows(tournaments) {
        const tournamentRows = []
        for (const [index, tournament] of tournaments.entries()) {
            tournamentRows.push(
                <tr key={index}>
                    <td>{tournament.name}</td>
                    <td>{toLocaleDateTime(tournament.scheduledStart)}</td>
                    <td>{tournament.location}</td>
                </tr>)
        }
        return tournamentRows
    }

    render() {
        const tournamentRows = this.getTournamentRows(this.state.tournaments)

        return (
            <div className="TournamentsTable">
                <Row>
                    <Col sm="4" />
                    <Col sm="4">
                        <h2>{TournamentStatusDescription[this.props.statusCode]}</h2>
                    </Col>
                    <Col sm="4" />
                </Row>
                <Row>
                    <Col sm="1" />
                    <Col sm="10">
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Scheduled Start</th>
                                    <th>Location</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tournamentRows}
                            </tbody>
                        </Table>
                    </Col>
                    <Col sm="1" />
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TournamentsTable));

