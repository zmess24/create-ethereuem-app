import React, { Component } from 'react';
import { Menu, Input } from 'semantic-ui-react';

class Header extends Component {
    state = {  }
    render() {
        return (
            <Menu borderless size="large">
                <Menu.Item name='logo'><img src='../static/logo.jpg'/></Menu.Item>
                <Menu.Item header>Create Ethereum App</Menu.Item>
            </Menu>
        );
    }
}

export default Header;