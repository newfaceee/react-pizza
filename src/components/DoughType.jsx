import React, {useState} from "react";
import classNames from 'classnames';

const DoughType = ({doughTypes}) => {
  const [activeDoughType, setActiveDoughType] = useState(doughTypes[0]);
  const typeNames = ['тонкое', 'традиционное'];
  const doughTypeChangeHandler = (index) => {
    setActiveDoughType(index);
  };
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
                doughTypeChangeHandler(index);
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
