import React, { Component } from "react";
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Card } from 'react-bootstrap';
import SockJsClient from "react-stomp";
// import Logger from 'js-logger'
import "../../Bootstrap/css/bootstrap.min.css";
import "./TournamentClock.css";

class TournamentClock extends Component {

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


    render() {
        const wsSourceUrl = "/handler";

        return (
            <div className="TournamentClock">
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


                <Card>
                    <Card.Body>
                        <Card.Text className='clock'>{this.state.dateTimeStamp}</Card.Text>
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
