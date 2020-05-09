import React, { Component } from 'react';
import { connect } from 'react-redux'
import PrivateRoute from './components/privateRoute/PrivateRoute';
import LoginView from './components/login/LoginView';
import HomeView from './components/home/HomeView';
import TournamentsView from './components/tournaments/TournamentsView';
import PlayersView from './components/players/PlayersView';
import DashboardView from './components/dashboard/DashboardView';
import ClockView from './components/clock/ClockView';
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import './App.css';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

class App extends Component {

    // eslint-disable-next-line
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <BrowserRouter>
                <ListGroup>
                    <ListGroupItem><NavLink to="/">Home</NavLink></ListGroupItem>
                    <ListGroupItem><NavLink to="/login">Login</NavLink></ListGroupItem>
                    <ListGroupItem><NavLink to="/tournaments">Tournaments</NavLink></ListGroupItem>
                    <ListGroupItem><NavLink to="/players">Players</NavLink></ListGroupItem>
                    <ListGroupItem><NavLink to="/dashboard">Dashboard</NavLink></ListGroupItem>
                    <ListGroupItem><NavLink to="/clock">Clock</NavLink></ListGroupItem>
                </ListGroup>

                <Switch>
                    <Route path='/' exact component={HomeView} />
                    <Route path='/login' component={LoginView} />
                    <PrivateRoute authed={this.props.user.enabled} path='/tournaments' component={TournamentsView} />
                    <PrivateRoute authed={this.props.user.enabled} path='/players' component={PlayersView} />
                    <PrivateRoute authed={this.props.user.enabled} path='/dashboard' component={DashboardView} />
                    <PrivateRoute authed={this.props.user.enabled} path='/clock' component={ClockView} />
                </Switch>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
