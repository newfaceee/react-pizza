import React from 'react';
import classNames from 'classnames';

import { DOUGH_TYPES } from '../../constants';

const DoughType = ({ doughTypes, onDoughTypeClick, activeDoughType }) => {
  return (
    <ul>
      {doughTypes &&
        DOUGH_TYPES.map((type, index) => {
          return (
            <li
              className={classNames({
                active: activeDoughType === index,
                disabled: !doughTypes.includes(index),
              })}
              onClick={() => {
                onDoughTypeClick(index);
              }}
              key={`${type}_${index}`}
            >
              {type}
            </li>
          );
        })}
    </ul>
  );
};

export default DoughType;
