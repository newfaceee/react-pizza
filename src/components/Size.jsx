import React, { useState } from "react";
import classNames from "classnames";

const Size = ({ sizes }) => {
  const [activeSize, setActiveSize] = useState(0);
  const allSizes = [26, 30, 40];
  const sizeChangeHandler = (index) => {
    setActiveSize(index);
  };

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
                sizeChangeHandler(index);
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
