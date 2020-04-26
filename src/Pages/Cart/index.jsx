import React, {useEffect, useState} from 'react';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";

import {changeCountInCart, removeFromCart} from 'Redux/Product/product.actions';

import {Grid, Header, Item, Segment, Button, Input} from 'semantic-ui-react';

const Cart = ({cart, changeCountInCart, removeFromCart}) => {
    const [totalPrice, setTotalPrice] = useState(0);

    const getTotalPrice = () => {
        setTotalPrice(cart.reduce((total, el) => {
            return total + el.price * el.count
        }, 0));
    }

    const onCountInputChange = (arrIndex) => (event) => {
        if (event.target.value < 0) event.target.value = 0;
        if (event.target.value > 999) event.target.value = 999;
        changeCountInCart({
            arrIndex,
            value: event.target.value
        });
    }

    const onDeleteItemClick = (arrIndex) => (event) => {
        removeFromCart(arrIndex);
    }

    const onDeleteAllItemsClick = (event) => {
        removeFromCart()
    }

    useEffect(getTotalPrice);

    return (
        <Grid columns='1' padded='vertically'>
            <Grid.Row centered>
                <Header as='h1' textAlign='center' >Cart</Header>
            </Grid.Row>
            {
                !cart.length ?
                    <Grid.Row centered>
                        <Grid.Column width={12}>
                                <Header
                                    as='h4'
                                    disabled
                                    textAlign='center'
                                >
                                    Cart is Empty
                                </Header>
                        </Grid.Column>
                    </Grid.Row>
                    :
                    <Grid.Row centered>
                        <Grid.Column width='12' padded='vertically' stretched>
                            <Item.Group divided>
                                {
                                    cart.map((el, index) => (
                                        <Item key={index}>
                                            <Item.Image size='tiny' src={el.image} />
                                            <Item.Content>
                                                <Item.Header as='a'>{el.name}</Item.Header>
                                                <Item.Extra>{`Price ${el.price} $`}</Item.Extra>
                                                <Item.Meta>
                                                    <span>Count: </span>
                                                    <Input
                                                        onChange={onCountInputChange(index)}
                                                        style={{width: '70px'}}
                                                        type='number'
                                                        defaultValue={el.count}
                                                    />
                                                </Item.Meta>
                                                <Button
                                                    onClick={onDeleteItemClick(index)}
                                                    as='button'
                                                    floated='right'
                                                    compact
                                                    basic
                                                    icon='delete'
                                                />
                                            </Item.Content>
                                        </Item>
                                    ))
                                }
                            </Item.Group>
                            <Segment basic>
                                <Header as='h5'>{`Total price: ${totalPrice}`}</Header>
                                <Button onClick={onDeleteAllItemsClick} floated='right'>Clear Cart</Button>
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
            }
        </Grid>
    );
}

function mapStateToProps({ product }) {
    return {
        cart: product.cart
    };
}

export default withRouter(
    connect(mapStateToProps, {changeCountInCart, removeFromCart})(Cart)
);

