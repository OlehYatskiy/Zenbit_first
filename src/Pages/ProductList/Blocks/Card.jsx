import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import { Card as CardItem, Image } from 'semantic-ui-react';
import ReactCardFlip from "react-card-flip";

export const Card = ({el}) => {
  const [isFlipped, setFlip] = useState(false);

  return (
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
          <CardItem onClick={() => setFlip(!isFlipped)}>
            <Image src={el.image} wrapped ui={false} />
            <CardItem.Content>
                <Link to={'/details'}>
                    <CardItem.Header>{el.name}</CardItem.Header>
                </Link>
            </CardItem.Content>
          </CardItem>
          <CardItem onClick={() => setFlip(!isFlipped)}>
              <Image src={el.image} wrapped ui={false} />
              <CardItem.Content>
                  <Link to={'/details'}>
                      <CardItem.Header>{'Back Side'}</CardItem.Header>
                  </Link>
              </CardItem.Content>
          </CardItem>
      </ReactCardFlip>
  );
}
