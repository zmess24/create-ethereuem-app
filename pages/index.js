import React, { Component } from 'react';
import Layout from '../components/Layout';
import DataShow from '../components/DataShow'
import withRedux from "next-redux-wrapper";
import initStore from '../store';


class HomePage extends Component {
    render() {
        return (
            <Layout>
                <div>
                    {/* <div>Prop from Redux {this.props.foo}</div>
                    <div>Prop from getInitialProps {this.props.custom}</div> */}
                    <h1>Hello World</h1>
                </div>
                <DataShow />
            </Layout>
        )
    }
}

export default withRedux(initStore, null, null)(HomePage);