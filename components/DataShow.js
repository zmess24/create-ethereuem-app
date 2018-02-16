import React, { Component } from "react";
import { connect } from "react-redux";

class DataShow extends Component {

    componentWillReceiveProps(props) {
        console.log(props);
    }

    renderDataItem(key, value, i) {
        return (
            <div className="DataItem" key={i}>
                <div className="key"><span>Key:</span> {key} </div>
                <div className="value"><span>Value:</span> {value}</div>
            </div>
        );
    }

    renderLoading() {
        return (
            <p>Please wait 2 seconds, loading data from localforage...</p>
        );
    }

    renderContent() {
        const items = this.props.projects.map(project => {
            return (
                <li key={project}>{project}</li>
            )
        });
        
        return (
            <ul>
                {items}
            </ul>
        );
    }

    render() {
        return (
            <div className="DataShow">
                <div>
                    <div>Your data:</div>
                    <br />
                    <br />
                    {!this.props.loaded ? this.renderLoading() : this.renderContent()}
                    {/* {!this.props.loaded ? <h2>Loading</h2> : this.renderContent()} */}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        projects: state.projects.projects,
        loaded: state.projects.status.loaded
    }
};

export default connect(mapStateToProps, null)(DataShow);