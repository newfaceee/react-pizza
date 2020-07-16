import React, {useState} from "react";

const DoughType = ({doughTypes}) => {
  const [activeDoughType, setActiveDoughType] = useState(0);

  const doughTypeChangeHandler = (index) => {
    setActiveDoughType(index);
  };
  return (
    <ul>
      {doughTypes &&
        doughTypes.map((doughType, index) => {
          return (
            <li
              className={activeDoughType === index ? "active" : ""}
              onClick={() => {
                doughTypeChangeHandler(index);
              }}
              key={`${doughType}_${index}`}
            >
              {doughType}
            </li>
          );
        })}
    </ul>
  );
};

export default DoughType;
