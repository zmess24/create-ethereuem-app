import React, { Component } from 'react';
import { Segment, Container, Grid } from 'semantic-ui-react';

class Footer extends Component {
    state = {  }
    render() {
        return (
            <Segment textAlign="center">
                <Container>
                    <Grid>
                        <Grid.Row style={{ marginTop: "-10px" }}>
                            <Grid.Column>
                                <div>Created and maintained by <a href="http://www.zmess.co">Zac Messinger</a>. Source code and examples released under the <a href="https://github.com/zmess24/Ethereum-Casino/blob/master/LICENSE">MIT</a> license.</div>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </Segment>
        );
    }
}

export default Footer;