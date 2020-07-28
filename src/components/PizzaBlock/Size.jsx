import React from 'react';
import classNames from 'classnames';

import { SIZES } from '../../constants';

const Size = ({ sizes, onSizeClick, activeSize }) => {
  return (
    <ul>
      {sizes &&
        SIZES.map((size, index) => {
          return (
            <li
              key={`${size}_${index}`}
              className={classNames({
                active: activeSize === index,
                disabled: !sizes.includes(size),
              })}
              onClick={() => {
                onSizeClick(index);
              }}
            >
              {size} см.
            </li>
          );
        })}
    </ul>
  );
};

export default Size;
