import React, { Component } from 'react';
import { Menu, Input } from 'semantic-ui-react';

class Header extends Component {
    state = {  }
    render() {
        return (
            <Menu>
                <Menu.Item name='explore'>Submit</Menu.Item>
                <Menu.Item name='start'>Start a Project</Menu.Item>
                {/* <Menu.Menu position='middle'>
                    <Menu.Item name='logo'>Create Ethereum App</Menu.Item>
                </Menu.Menu> */}
                <Menu.Menu position='right'>
                    <Input transparent={true} className='icon' icon='search' placeholder='Search...' />
                </Menu.Menu>
            </Menu>
        );
    }
}

export default Header;