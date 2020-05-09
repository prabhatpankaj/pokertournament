import React, { Component } from "react";
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap';
import SockJsClient from "react-stomp";
import "../../Bootstrap/css/bootstrap.min.css";
import "./ClockView.css";

class ClockView extends Component {

    constructor(props) {
        super(props);
        this.form = {};
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

    onChange = event => {
        const { name, value } = event.target;
        this.form[name] = value;
    }

    render() {
        const wsSourceUrl = "/handler";
        const connectionStatus = this.state.clientConnected ? "Connected" : "Disconnected"

        return (
            <div className="ClockView">
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
                    <Col sm="2" />
                    <Col sm="8">
                        <h1>Tournament Clock</h1>
                        <h2>{connectionStatus}</h2>
                        <p className='clock'>{this.state.dateTimeStamp}</p>
                        <p>{this.state.statusMessage}</p>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ClockView));
