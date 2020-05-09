import React, { Component } from "react";
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
// import Logger from 'js-logger'
import "../../Bootstrap/css/bootstrap.min.css";
import "./Template.css";

class Template extends Component {

    constructor(props) {
        super(props);
        state = {
        }
    }

    render() {
        return (<div/>)
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Template));
