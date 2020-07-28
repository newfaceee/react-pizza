import React from 'react';
import classNames from 'classnames';

const Size = ({ sizes, onSizeClick, activeSize }) => {
  const allSizes = [26, 30, 40];

  return (
    <ul>
      {sizes &&
        allSizes.map((size, index) => {
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
