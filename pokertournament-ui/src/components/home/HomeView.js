import React, { Component } from "react";
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap';
import TournamentsTable from  '../tournamentsTable/TournamentsTable'
import { TournamentStatus } from '../../constants'
import "../../Bootstrap/css/bootstrap.min.css";
import "./HomeView.css";

class TournamentsView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            scheduledTournaments: [],
            inProgressTournaments: [],
            completedTournaments: [],
            canceledTournaments: []
        }
    }

    render() {

        return (
            <div className="TournamentsView">
                <Row>
                    <Col sm="4" />
                    <Col sm="4">
                        <h1>Tournaments</h1>
                    </Col>
                    <Col sm="4" />
                </Row>
                <TournamentsTable statusCode={TournamentStatus.IN_PROGRESS}/>
                <TournamentsTable statusCode={TournamentStatus.SCHEDULED}/>
                <TournamentsTable statusCode={TournamentStatus.COMPLETED}/>
                <TournamentsTable statusCode={TournamentStatus.CANCELED}/>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TournamentsView));
