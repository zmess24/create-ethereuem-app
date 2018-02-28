import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as betActions from '../actions/index';
import Router from 'next/router';
import { Table, Grid, Card, Divider, Form, Input, Label, Button, Message, Loader, Dimmer, Segment, Icon } from 'semantic-ui-react';

class DataShow extends Component {
    state = {
        ether: '',
        numberSelected: 0
    }

    renderCards() {
        const {
            numberOfBets,
            roundsWithOutWinner,
            totalBet,
            minimumBet,
            maxAmountofBets
        } = this.props.summary;

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

    renderNumbers() {
        const numbers = [
            '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'
        ]

        return (
            <div>
                {numbers.map(number => (
                    <Button disabled={this.props.loading} animated="vertical" key={number} secondary onClick={event => this.setState({ numberSelected: parseInt(number), success: false })}>
                        <Button.Content visible>{number}</Button.Content>
                        <Button.Content hidden>Bet</Button.Content>
                    </Button>
                ))}
            </div>
        )
    }

    onSubmit = async (event) => {
        event.preventDefault();
        const { ether, numberSelected } = this.state;
        await this.props.betAction.submitBet(ether, numberSelected)
            .then(
                Router.push('/', {
                    shallow: true
                })
            )
    }

    render() {
        const { Row, Column } = Grid;
        return (
            <Grid>
                <Row>
                    <Column>
                        {this.renderCards()}
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <Divider />
                    </Column>
                </Row>
                <Row>
                    <Column width={8}>
                        <h2>Place a bet:</h2>
                        <Row>
                            <Column>
                                <Form onSubmit={this.onSubmit}>
                                    <Form.Field>
                                        <label>How much Ether do you want to bet?</label>
                                        <Input
                                            size="small"
                                            type="number"
                                            label="ether"
                                            disabled={this.props.loading}
                                            labelPosition="right"
                                            placeholder="0.1"
                                            value={this.state.ether}
                                            onChange={event => this.setState({ ether: event.target.value, success: false })}
                                        >
                                        </Input>

                                    </Form.Field>
                                    <Form.Field>
                                        <label>Select a Number:</label>
                                    </Form.Field>
                                    {this.renderNumbers()}
                                </Form>

                                <Message success hidden={!this.props.success} icon>
                                    <Icon name="checkmark" />
                                    <Message.Content>
                                        <Message.Header>Status: Success!</Message.Header>
                                        <p>Transaction had been processed.</p>
                                    </Message.Content>
                                </Message>

                                <Message hidden={this.props.loading} negative={this.props.error}>
                                    <Message.Header>Status: {this.props.statusHeader}</Message.Header>
                                    <p>{this.props.statusMessage}</p>
                                </Message>

                                <Message color="yellow" hidden={!this.props.loading} icon>
                                    <Icon name='circle notched' loading />
                                    <Message.Content>
                                        <Message.Header>Status: Processing Bet</Message.Header>
                                        <p>Transaction is currently bieng mined. Average transaction takes 15 seconds to process</p>
                                    </Message.Content>
                                </Message>

                            </Column>
                        </Row>
                    </Column>
                    <Column width={8}>
                        <Segment>
                            <h2>How to Play:</h2>
                            <ol>
                                <li>Download the <strong><a target="_blank" href="https://metamask.io/">MetaMask Chrome Extension</a></strong>.</li>
                                <li>Create an account on the Rinkeby Network (Test Network).
                                        <ul>
                                        <li>The Rinkeby option is in the top left dropdown with the yellow square when you open MetaMask.</li>
                                    </ul>
                                </li>
                                <li>Recieve test Ether for your account <strong><a target="_blank" href="https://faucet.rinkeby.io/">here</a></strong>.
                                        <ul>
                                        <li>You can copy your Ethereum address by clicking on the "..." dropdown in MetaMask</li>
                                        <li>I recommend using Google Plus for grabbing the post url per the instructions</li>
                                        <li>It's completly safe, don't worry :) Ether's on test accounts don't hold actual value</li>
                                    </ul>
                                </li>
                                <li>Place a bet!</li>
                            </ol>
                        </Segment>
                    </Column>
                </Row>
            </Grid>
        );
    }
}

const mapStateToProps = state => {
    return {
        summary: state.summary,
        loading: state.bet.status.loading,
        ether: state.bet.ether,
        numberSelected: state.bet.numberSelected,
        statusHeader: state.bet.status.statusHeader,
        statusMessage: state.bet.status.statusMessage,
        success: state.bet.status.success,
        error: state.bet.status.error
    }
};

function mapDispatchToProps(dispatch) {
    return {
        betAction: bindActionCreators(betActions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DataShow);