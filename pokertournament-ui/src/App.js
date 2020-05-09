import React, { Component } from 'react';
import { connect } from 'react-redux'
import PrivateRoute from './components/privateRoute/PrivateRoute';
import NavBar from './components/navbar/NavBar'
import LoginView from './components/login/LoginView';
import HomeView from './components/home/HomeView';
import PlayersView from './components/players/PlayersView';
import TournamentView from './components/tournament/TournamentView'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Logger from "js-logger";
import './App.css';

Logger.setLevel(Logger.DEBUG)

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
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

                        <PrivateRoute authed={this.props.user.enabled} path='/players'>
                            <PlayersView />
                        </PrivateRoute>

                        <PrivateRoute authed={this.props.user.enabled} path='/tournament'>
                            <TournamentView />
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
