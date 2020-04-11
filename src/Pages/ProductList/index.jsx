import React from 'react';
import {Grid } from 'semantic-ui-react';

import {Card as CardComponent} from './Blocks/Card';

const data = [
    {
        id: 1,
        name: 'Phone L1',
        image: 'https://asset.mediaw.it/wcsstore/MMCatalogAssetStore/asset/images/10/29/102910_5.jpg'
    },
    {
        id: 2,
        name: 'Phone L2',
        image: 'https://www.three.co.uk/static/images/device_pages/MobileVersion/Samsung/Galaxy_S10_Plus/Prism_White/carousel/4.jpg'
    },
    {
        id: 3,
        name: 'Phone L3',
        image: 'https://www.three.co.uk/static/images/device_pages/MobileVersion/Samsung/Galaxy_S10_Plus/Prism_White/carousel/4.jpg'
    }
];

export const ProductList = () => {
  return (
      <Grid columns='3'>
          {
              data.map((el) => {
                  return <Grid.Column>
                      <CardComponent el={el}/>
                  </Grid.Column>
              })
          }
      </Grid>
  );
}
