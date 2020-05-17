import React, { Component } from "react";
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Card } from 'react-bootstrap';
import SockJsClient from "react-stomp";
// import Logger from 'js-logger'
import formatSeconds  from '../../utils/clockUtils'
import "../../Bootstrap/css/bootstrap.min.css";
import "./TournamentClock.css";

class TournamentClock extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clientConnected: false,
            timeLeftInLevel: "",
            statusMessage: ""
        }
        this.topics = {
            clock: `/topic/${props.tournament.id}/clock`, 
            event: `/topic/${props.tournament.id}/event`
        }
    }

    onMessageReceive = (message, topic) => {
        switch (topic) {
            case this.topics.clock:
                const remainingSeconds = parseInt(message)
                const timeLeftInLevel = formatSeconds(remainingSeconds)

                this.setState(prevState => ({
                    timeLeftInLevel: timeLeftInLevel
                }))
                break;

            case this.topics.event:
                this.setState(prevState => ({
                    statusMessage: message
                }))
                break;

            default:
                break;
        }
    }


    render() {
        const wsSourceUrl = "/handler";
        const topics = [this.topics.clock, this.topics.event]

        return (
            <div className="TournamentClock">
                <SockJsClient
                    url={wsSourceUrl}
                    topics={topics}
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


                <Card>
                    <Card.Body>
                        <Card.Text className='clock'>{this.state.timeLeftInLevel}</Card.Text>
                    </Card.Body>
                </Card>

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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TournamentClock));
