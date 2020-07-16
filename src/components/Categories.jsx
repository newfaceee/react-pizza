import React, {useState} from "react";

const Categories = ({items, onClick}) => {
  const initialState = null;
  const [activeItem, setActiveItem] = useState(initialState);
  const onSelectItem = (index) => {
    setActiveItem(index);
  };


  return (
    <div className="categories">
      <ul>
        <li className={activeItem === null ? 'active' : ''} onClick={() => onSelectItem(null)}>Все</li>
        {items && items.map((item, index) => {
          return (
            <li
              className={activeItem === index ? "active" : ''}
              onClick={() => {
                onSelectItem(index)
              }}
              key={`${item}_${index}`}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;