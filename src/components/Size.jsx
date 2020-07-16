import React, {useState} from "react";

const Size = ({sizes}) => {
  const [activeSize, setActiveSize] = useState(0);

  const sizeChangeHandler = (index) => {
    setActiveSize(index);
  }

  return (
    <ul>
      {sizes && sizes.map((size, index) => {
        return <li key={`${size}_${index}`} className={activeSize === index ? 'active' : ''} onClick={() => {
          sizeChangeHandler(index);
        }}>{size} см.</li>
      })}
    </ul>
  );
};

export default Size;
