import React, { Component } from "react";
import { connect } from "react-redux";
import { Table, Grid, Card, Divider, Form, Input, Label, Button, Message, Loader, Dimmer, Segment, Icon } from 'semantic-ui-react';

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

    renderCards() {
        const {
            numberOfBets,
            roundsWithOutWinner,
            totalBet,
            minimumBet,
            maxAmountofBets
        } = this.props.projects;

        const items = [
            {
                header: numberOfBets,
                meta: 'Number of Bets',
                description: 'The number of users who have placed a bet.',
                style: { overflowWrap: 'break-word' }
            },
            {
                header: roundsWithOutWinner,
                meta: 'Streak',
                description: 'The number of games that have been played since a winner was picked.'
            },
            {
                header: totalBet,
                meta: 'Ether',
                description: 'The total amount of Ether currently in the pot.'
            },
            {
                header: minimumBet,
                meta: 'Minimum Bet',
                description: 'The minimum of Ether bet.'
            },
            {
                header: maxAmountofBets,
                meta: 'Max Amount of Bets',
                description: 'Number of bets allowed before a winner is drawn.'
            }
        ];

        return <Card.Group stackable items={items} itemsPerRow={5} />
    }

    render() {
        return (
            <div className="DataShow">
                <div>
                    {!this.props.loaded ? this.renderLoading() : this.renderCards()}
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