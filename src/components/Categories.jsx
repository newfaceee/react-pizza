import React, { memo } from 'react';

const Categories = memo(({ items, onClickItem, activeCategory }) => {
  return (
    <div className="categories">
      <ul>
        <li
          className={activeCategory === null ? 'active' : ''}
          onClick={() => onClickItem(null)}
        >
          Все
        </li>
        {items &&
          items.map((item, index) => {
            return (
              <li
                className={activeCategory === index ? 'active' : ''}
                onClick={() => {
                  onClickItem(index);
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
});

export default Categories;
