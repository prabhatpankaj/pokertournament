import React, { Component } from 'react';
import { connect } from 'react-redux'
import PrivateRoute from './components/privateRoute/PrivateRoute';
import NavBar from './components/navbar/NavBar'
import LoginView from './components/login/LoginView';
import HomeView from './components/home/HomeView';
import TournamentsView from './components/tournaments/TournamentsView';
import PlayersView from './components/players/PlayersView';
import DashboardView from './components/dashboard/DashboardView';
import ClockView from './components/clock/ClockView';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import './App.css';

class App extends Component {

    // eslint-disable-next-line
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div>
                <BrowserRouter>

                    <NavBar />

                    <Switch>
                        <Route exact path="/">
                            <HomeView />
                        </Route>                        

                        <Route path='/login'>
                            <LoginView />
                        </Route>

                        <PrivateRoute authed={this.props.user.enabled} path='/dashboard'>
                            <DashboardView />
                        </PrivateRoute>

                        <PrivateRoute authed={this.props.user.enabled} path='/players'>
                            <PlayersView />
                        </PrivateRoute>

                        <PrivateRoute authed={this.props.user.enabled} path='/tournaments'>
                            <TournamentsView />
                        </PrivateRoute>
                        
                        <PrivateRoute authed={this.props.user.enabled} path='/clock'>
                            <ClockView />
                        </PrivateRoute>
                        
                    </Switch>
                </BrowserRouter>
            </div>
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
