import React from 'react';
import {
    Container,
    Divider,
    Dropdown,
    Grid,
    Header,
    Image,
    List,
    Menu,
    Segment,
} from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import Home from './Home'
import Vehicles from './Vehicles'

function App() {
    return (
        <Router>
            <div>
                <Menu fixed='top' inverted>
                    <Container>
                        <Menu.Item as={Link} header to='/'>
                            <Image size='mini' src={logo} style={{ marginRight: '1.5em' }} />
                            TasKing
                        </Menu.Item>
                        <Menu.Item as={Link} to='/vehiculos'>Vehículos</Menu.Item>
                    </Container>
                </Menu>

                <Grid>
                    <Grid.Row text style={{ marginTop: '7em' }}>
                        <Container>
                            <Route exact path="/" component={Home} />
                            <Route path="/vehiculos" component={Vehicles} />
                        </Container>
                    </Grid.Row>
                </Grid>

                <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
                    <Container textAlign='center'>
                    </Container>
                </Segment>
            </div>
        </Router>
    );
}

export default App;
