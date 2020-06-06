import React, { Component } from "react";
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Row, Col, Tabs, Tab } from 'react-bootstrap';
import ReservationsView from '../reservations/ReservationsView';
import PlayersView from '../players/PlayersView';
import TournamentInProgress from './TournamentInProgress';
import TournamentViewCard from './TournamentViewCard'
import TournamenNextBreak from './TournamentNextBreak'
import TournamentPayouts from './TournamentPayouts'
import TournamentPreStart from "./TournamentPreStart";
import SockJsClient from "react-stomp";
import { setMenus, clearMenus, setTournamentState, setClock } from '../../actions';
import Logger from 'js-logger'
import fetch from "node-fetch";
import "../../Bootstrap/css/bootstrap.min.css";
import "./TournamentView.css";

class TournamentView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clientConnected: false,
            statusMessage: "No Status"
        }
        this.tournamentMenus = [
            {
                name: 'Tournament',
                items: [
                    { eventKey: 'prestart', text: 'Start Countdown', onSelect: this.onSelect },
                    { eventKey: 'start', text: 'Start', onSelect: this.onSelect },
                    { eventKey: 'pause', text: 'Pause', onSelect: this.onSelect },
                    { eventKey: 'resume', text: 'Resume', onSelect: this.onSelect },
                    { eventKey: 'stop', text: 'Stop', onSelect: this.onSelect },
                    { eventKey: 'reschedule', text: 'Reschedule', onSelect: this.onSelect }
                ]
            }
        ]
        this.mapEventKeyToDispatch = {
            "prestart": this.prestartTournament,
            "start": this.startTournament,
            "pause": this.pauseTournament,
            "resume": this.resumeTournament,
            "stop": this.stopTournament,
            "reschedule": this.rescheduleTournament,
        }
        this.topics = {
            event: `/topic/${props.tournament.id}/event`,
            clock: `/topic/${props.tournament.id}/clock`
        }
    }

    prestartTournament = (tournament) => {
        const url = `${process.env.REACT_APP_API_PATH}/tournaments/${tournament.id}?action=PRESTART`
        fetch(url, {
            method: 'PUT'
        })
            .then((response) => {
                if (response.ok) {
                    Logger.info(`Tournament ${tournament.id} prestarted`);
                } else {
                    throw response.statusText
                }
            })
            .catch(error => {
                Logger.error('Tournament start error');
                Logger.error(error);
            });
    }

    startTournament = (tournament) => {
        const url = `${process.env.REACT_APP_API_PATH}/tournaments/${tournament.id}?action=START`
        fetch(url, {
            method: 'PUT'
        })
            .then((response) => {
                if (response.ok) {
                    Logger.info(`Tournament ${tournament.id} started`);
                } else {
                    throw response.statusText
                }
            })
            .catch(error => {
                Logger.error('Tournament start error');
                Logger.error(error);
                alert(error)
            });
    }

    rescheduleTournament = (tournament) => {
        const url = `${process.env.REACT_APP_API_PATH}/tournaments/${tournament.id}?action=RESCHEDULE`
        fetch(url, {
            method: 'PUT'
        })
            .then((response) => {
                if (response.ok) {
                    Logger.info(`Tournament ${tournament.id} rescheduled`);
                } else {
                    throw response.statusText
                }
            })
            .catch(error => {
                Logger.error('Tournament reschedule error');
                Logger.error(error);
            });
    }

    pauseTournament = (tournament) => {
        const url = `${process.env.REACT_APP_API_PATH}/tournaments/${tournament.id}?action=PAUSE`
        fetch(url, {
            method: 'PUT'
        })
            .then((response) => {
                if (response.ok) {
                    Logger.info(`Tournament ${tournament.id} paused`);
                } else {
                    throw response.statusText
                }
            })
            .catch(error => {
                Logger.error('Tournament pause error');
                Logger.error(error);
            });
    }

    resumeTournament = (tournament) => {
        const url = `${process.env.REACT_APP_API_PATH}/tournaments/${tournament.id}?action=RESUME`
        fetch(url, {
            method: 'PUT'
        })
            .then((response) => {
                if (response.ok) {
                    Logger.info(`Tournament ${tournament.id} resumed`);
                } else {
                    throw response.statusText
                }
            })
            .catch(error => {
                Logger.error('Tournament resume error');
                Logger.error(error);
            });
    }

    stopTournament = (tournament) => {
        alert(`stopTournament ${tournament.id}`)
    }

    onSelect = (eventKey, event) => {
        event.preventDefault()

        this.mapEventKeyToDispatch[eventKey](this.props.tournament)
    }

    componentDidMount = () => {
        this.props.setMenus(this.tournamentMenus)
    }

    componentWillUnmount = () => {
        this.props.clearMenus()
    }

    onMessageReceive = (message, topic) => {
        switch (topic) {
            case this.topics.event:
                const tournamentState = message
                this.props.setTournamentState(tournamentState)
                this.setState(prevState => ({
                    statusMessage: tournamentState.levelStatusCode,
                    tournamentState: tournamentState
                }))
                break;

            case this.topics.clock:
                this.props.setClock(message)
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
            return (<div />)
        }

        const wsSourceUrl = `${process.env.REACT_APP_WS_PATH}/handler`
        const connectionStatus = this.state.clientConnected ? "Connected" : "Disconnected"
        const { name, description } = this.props.tournament
        const entries = 44
        const remaining = 42
        const rebuys = 6
        const entriesText = `${entries} with ${rebuys} rebuys`
        const chipCount = 3000 * (entries + rebuys)
        const chipCountDisplay = chipCount.toLocaleString()
        const averageChipStack = Math.round(chipCount / remaining)
        const averageChipStackDisplay = `$${averageChipStack}`
        const pool = 40 * (entries + rebuys)
        const poolDisplay = `$${pool}`

        const currentLevel = this.props.tournamentState ? this.props.tournamentState.currentLevel : -1
        const topics = [this.topics.event, this.topics.clock]

        return (
            <div className="TournamentView">
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

                <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                    <Tab eventKey="home" title="Home">
                        <Row className="tournamentNameRow">
                            <Col sm="12">
                                <h1>{name}</h1>
                                <h2>{description}</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="2">
                                <TournamentViewCard title='Entries' text={entriesText} />
                                <TournamentViewCard title='Remaining' text={remaining} />
                                <TournamentViewCard title='Chip Count' text={chipCountDisplay} />
                                <TournamentViewCard title='Average Stack' text={averageChipStackDisplay} />
                                <TournamentViewCard title='Pool' text={poolDisplay} />
                            </Col>
                            <Col sm="8">
                                {currentLevel === -1
                                    ? <TournamentPreStart />
                                    : <TournamentInProgress />
                                }
                            </Col>
                            <Col sm="2">
                                <TournamentViewCard title='Current Time' text='1:47:55 PM' />
                                <TournamentViewCard title='Elapsed Time' text='1:20:55' />
                                <TournamenNextBreak />
                                <TournamentViewCard title='Server Status' text={connectionStatus} />
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="12">
                                <TournamentPayouts />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h3>{this.state.statusMessage}</h3>
                            </Col>
                        </Row>
                    </Tab>
                    <Tab eventKey="reservations" title="Reservations">
                        <ReservationsView />
                    </Tab>
                    <Tab eventKey="buyins" title="Players">
                        <PlayersView />
                    </Tab>
                    <Tab eventKey="tables" title="Tables">
                    </Tab>
                </Tabs>

            </div>
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
        setMenus: menus => {
            dispatch(setMenus(menus))
        },
        clearMenus: () => {
            dispatch(clearMenus())
        },
        setTournamentState: tournamentState => {
            dispatch(setTournamentState(tournamentState))
        },
        setClock: clock => {
            dispatch(setClock(clock))
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TournamentView));
