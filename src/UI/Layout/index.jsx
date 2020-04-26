import React from 'react';
import {
    Switch,
    Route,
    Link,
    withRouter
} from 'react-router-dom';

import ProductList from "Pages/ProductList";
import {ProductDetails} from "Pages/ProductDetails";
import Cart from "Pages/Cart";

import {
    Grid,
    Segment,
    Container,
    Icon,
    Menu
} from 'semantic-ui-react';

import './App.css'

function Layout() {

    const emptyFunc = () => null;

  return (
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
            <Segment basic compact floated='right'>
                <Link to={'/cart'}>
                    <Icon inverted size='large' name='shopping basket' />
                </Link>
            </Segment>
        </Segment>
            <Grid className={'App'} centered>
                <Grid.Column width={4} stretched >
                    <Menu fluid vertical >
                        <Link to={'/'}>
                            <Menu.Item
                                name='Back to main'
                                onClick={emptyFunc}
                            >
                            </Menu.Item>
                        </Link>
                        <Link to={'/cart'}>
                            <Menu.Item
                                name='Cart'
                                onClick={emptyFunc}
                            >
                            </Menu.Item>
                        </Link>
                    </Menu>
                </Grid.Column>
                <Grid.Column width={12}>
                    {children}
                </Grid.Column>
            </Grid>
        <Segment
            attached='bottom'
            compact
            textAlign='center'
        >
           for Zenbit-Course
        </Segment>
    </Container>
  );
}

export default withRouter(La);
