import React, { Component } from 'react';
import Layout from '../components/Layout';
import DataShow from '../components/DataShow'
import withRedux from "next-redux-wrapper";
import initStore from '../store';
import { fetchSummary } from '../actions/index';


class App extends Component {
    static getInitialProps() {
        fetchSummary();
    }
    render() {
        return (
            <Layout>
                <DataShow />
            </Layout>
        )
    }
}

export default withRedux(initStore, null, null)(App);