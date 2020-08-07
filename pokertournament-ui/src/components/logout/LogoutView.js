import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { setUser } from '../../actions';
import { API } from '../../constants'
import Logger from 'js-logger'
import fetch from "node-fetch";

class LogoutView extends Component {

    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const url = `${process.env.REACT_APP_API_PATH}${API.LOGOUT_URL}`
        fetch(url, {
            method: 'POST'
        })
            .then((response) => {
                if (response.ok) {
                    Logger.info('logout success');
                    this.props.setUser(null)
                } else {
                    throw response.statusText
                }
            })
            .catch(error => {
                Logger.error('Logout error');
                Logger.error(error);
            });
    }

    render() {
        // return (<div>This is LogoutView</div>)
        return <Redirect to='/login' />
    }

}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setUser: user => {
            dispatch(setUser(user))
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LogoutView));
