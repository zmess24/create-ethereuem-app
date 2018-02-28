import React, { Component } from 'react';
import { Menu, Input, Container } from 'semantic-ui-react';

class Header extends Component {
    state = {  }
    render() {
        return (
            <Container>
                <Menu borderless size="large">
                    <Menu.Item name='logo'><img src='../static/logo.jpg'/></Menu.Item>
                    <Menu.Item header>Create Ethereum App</Menu.Item>
                </Menu>
            </Container>
        );
    }
}

export default Header;