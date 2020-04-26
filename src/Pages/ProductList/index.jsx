import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import * as productActions from 'Redux/Product/product.actions';

import {Grid } from 'semantic-ui-react';

import {Card as CardComponent} from './Blocks/Card';

const ProductList = (
    {
        products,
        cart,
        changeCountInCart,
        addToCart
    }) => {

    const onAddToCartClick = (element) => {
        const arrIndex = cart.findIndex((el) => (el.id === element.id));
        if (arrIndex === -1)
            addToCart(element);
        else
            changeCountInCart({
                arrIndex,
                value: ++cart[arrIndex].count
            });
        alert(`Product ${element.name} was added to cart`)
    }

  return (
      <Grid columns='3' padded='vertically'>
          {
              products.map((el) => {
                  return <Grid.Column key={el.id}>
                      <CardComponent
                          el={el}
                          onAddToCartClick={onAddToCartClick}/>
                  </Grid.Column>
              })
          }
      </Grid>
  );
}

function mapStateToProps({ product }) {
    return {
        products: product.products,
        cart: product.cart
    };
}

export default withRouter(
    connect(mapStateToProps, {...productActions})(ProductList)
);

