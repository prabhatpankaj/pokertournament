import React, { Component } from "react";
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Card } from 'react-bootstrap';
import SockJsClient from "react-stomp";
import Logger from 'js-logger'
import formatSeconds from '../../utils/clockUtils'
import "../../Bootstrap/css/bootstrap.min.css";
import "./TournamentClock.css";
// import Logger from "js-logger";
var dateFormat = require('dateformat');

class TournamentClock extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clientConnected: false,
            timeLeftInLevel: ""
        }
        this.topics = {
            clock: `/topic/${props.tournament.id}/clock`
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

            default:
                break;
        }
    }


    render() {
        const wsSourceUrl = "/handler";
        const topics = [this.topics.clock]
        const currentLevel = this.props.tournamentState.currentLevel
        const scheduledStart = dateFormat(this.props.tournament.scheduledStart, "dddd, mmmm d, yyyy	h:MM TT")

        Logger.debug(`TournamentClock.render timeLeftInLevel=${this.state.timeLeftInLevel} currentLevel=${currentLevel}`)

        return (

            <div className="TournamentClock">
                {currentLevel >= 0
                    ?
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
                    : <React.Fragment />
                }

                <Card>
                    <Card.Body>
                        {currentLevel === -1
                            ? <h2>{scheduledStart}</h2>
                            : <React.Fragment><Card.Text className='clock'>{this.state.timeLeftInLevel}</Card.Text></React.Fragment>
                        }
                    </Card.Body>
                </Card>

            </div >
        )
    }

}

const mapStateToProps = state => {
    return {
        tournament: state.tournament,
        tournamentState: state.tournamentState
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TournamentClock));
