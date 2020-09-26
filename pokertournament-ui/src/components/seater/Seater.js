import React, { Component } from "react";
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
// import Logger from 'js-logger'
import "./Seater.css";

class Template extends Component {

    constructor(props) {
        super(props);
        this.state = {
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Seater));
