import { Component } from "react";

class PreventUpdate extends Component {
    shouldComponentUpdate = (nextProps) => {
        return nextProps.shouldPreventUpdate
    };

    render() {
        return this.props.children;
    }
}

export default PreventUpdate