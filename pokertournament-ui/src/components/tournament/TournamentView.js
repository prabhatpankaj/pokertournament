import React, { Component } from "react";
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap';
import TournamentClock from './TournamentClock'
import TournamentLevel from './TournamentLevel'
import TournamentViewCard from './TournamentViewCard'
import TournamentPayouts from './TournamentPayouts'
import SockJsClient from "react-stomp";
import "../../Bootstrap/css/bootstrap.min.css";
import "./TournamentView.css";

// TODO: Use tabs for the different views: Clock, Players, Registration, Tables

class TournamentView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clientConnected: false,
            dateTimeStamp: "",
            statusMessage: ""
        }
    }

    onMessageReceive = (message, topic) => {
        switch (topic) {
            case "/topic/all":
                this.setState(prevState => ({
                    dateTimeStamp: message
                }))
                break;
            
            case "/topic/7":
                this.setState(prevState => ({
                    statusMessage: message
                }))
                break;
            
            default:
                break;
        }
    }

    sendMessage = (selfMsg) => {
        try {
            this.clientRef.sendMessage("/app/all", JSON.stringify(selfMsg));
            return true;
        } catch (e) {
            return false;
        }
    }

    render() {
        if (!this.props.tournament.id) {
            return (<div/>)
        }

        const wsSourceUrl = "/handler";
        const connectionStatus = this.state.clientConnected ? "Connected" : "Disconnected"
        const { name, description } = this.props.tournament
        const entries = 44
        const remaining = 42
        const rebuys = 6
        const chipCount = 3000 * (entries + rebuys)
        const chipCountDisplay = chipCount.toLocaleString()
        const averageChipStack = Math.round(chipCount / remaining)
        const averageChipStackDisplay = `$${averageChipStack}`
        const pool = 40 * (entries + rebuys)
        const poolDisplay = `$${pool}`
        const currentLevel = 3

        // TODO: May be better with Card Decks and Card Columns rather than Rows and Columns

        return (
            <div className="TournamentView">
                <SockJsClient
                    url={wsSourceUrl}
                    topics={["/topic/all", "/topic/7"]}
                    onMessage={this.onMessageReceive}
                    ref={(client) => {
                        this.clientRef = client
                    }}
                    onConnect={() => {
                        this.setState({ clientConnected: true })
                    }}
                    onDisconnect={() => {
                        this.setState({ clientConnected: false })
                    }}
                    debug={false} />

                <Row>
                    <Col sm="12">
                        <h1>{name}</h1>
                        <h2>{description}</h2>
                    </Col>
                </Row>
                <Row>
                    <Col sm="2">
                        <TournamentViewCard title='Entries' text={entries} />
                        <TournamentViewCard title='Remaining' text={remaining} />
                        <TournamentViewCard title='Rebuys' text={rebuys} />
                        <TournamentViewCard title='Chip Count' text={chipCountDisplay} />
                        <TournamentViewCard title='Average Stack' text={averageChipStackDisplay} />
                        <TournamentViewCard title='Pool' text={poolDisplay} />
                    </Col>
                    <Col sm="8">
                        <TournamentClock />
                        <TournamentLevel level={currentLevel} />
                        <TournamentLevel level={currentLevel+1} />
                    </Col>
                    <Col sm="2">
                        <TournamentViewCard title='Current Time' text='1:47:55 PM' />
                        <TournamentViewCard title='Elapsed Time' text='1:20:55' />
                        <TournamentViewCard title='Next Break' text='20:12' />
                        <TournamentViewCard title='Server Status' text={connectionStatus} />
                    </Col>
                </Row>
                <Row>
                    <Col sm="12">
                        <TournamentPayouts />
                    </Col>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        tournament: state.tournament
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TournamentView));
