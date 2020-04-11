import React from 'react';
import {
    BrowserRouter as  Router,
    Switch,
    Route
} from 'react-router-dom';

import {ProductList} from "Pages/ProductList";
import {ProductDetails} from "Pages/ProductDetails";

import {Grid, Segment, Container} from 'semantic-ui-react';

import './App.css'

function App() {
  return (
    <Router>
        <Container fluid>
            <Segment
                as='header'
                attached='top'
                textAlign='center'
                inverted
                color='black'
                compact
            >
                Segment
            </Segment>
                <Grid padded className={'App'} centered verticalAlign='middle'>
                    <Grid.Row width={16}>
                        <Switch>
                            <Route exact path="/" children={ProductList} />
                            <Route path="/details" children={ProductDetails} />
                        </Switch>
                    </Grid.Row>
                </Grid>
            <Segment attached='bottom' compact>
                Segment
            </Segment>
        </Container>
    </Router>
  );
}

export default App;
