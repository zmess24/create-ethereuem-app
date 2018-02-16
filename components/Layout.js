import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import Header from './Header';
import Footer from './Footer';
import Head from 'next/head';

export default props => {
    return (
        <div>
            <Head>
                <title>Create Ethereum App</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="author" content="Zac Messinger" />
                <meta name="keywords" content="Ethereum, DAPP, Zac, Messinger, zmess, zmess24, Ether" />
                <meta http-equiv="content-type" content="text/html;charset=UTF-8" />
                <link rel="shortcut icon" type="image/png" href="../static/favicon.png" />

                <meta name="description" content="Decentralized application built on Ethereum using the Rinkeby Network that allows users to bet on a number to win Ether." />
                <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>
            </Head>
            <Header />
            <Container>
                {props.children}
            </Container>
            <Footer />
        </div>
    )
}