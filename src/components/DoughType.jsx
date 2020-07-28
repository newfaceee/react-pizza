import React, { useState } from 'react';
import classNames from 'classnames';

const DoughType = ({ doughTypes, onDoughTypeClick, activeDoughType }) => {
  const typeNames = ['тонкое', 'традиционное'];

  return (
    <ul>
      {doughTypes &&
        typeNames.map((type, index) => {
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
