import React, { Component } from "react";
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap';
import Tournaments from  '../tournaments/Tournaments'
import { TournamentStatus } from '../../constants'
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
                <Tournaments statusCode={TournamentStatus.IN_PROGRESS}/>
                <Tournaments statusCode={TournamentStatus.SCHEDULED}/>
                <Tournaments statusCode={TournamentStatus.COMPLETED}/>
                <Tournaments statusCode={TournamentStatus.CANCELED}/>
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
