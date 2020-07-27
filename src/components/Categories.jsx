import React, { useState, memo } from "react";

const Categories = memo(({ items, onClickItem, activeCategory }) => {
  console.log(activeCategory);
  const onSelectItem = (index) => {
    onClickItem(index);
  };

  return (
    <div className="categories">
      <ul>
        <li
          className={activeCategory === null ? "active" : ""}
          onClick={() => onSelectItem(null)}
        >
          Все
        </li>
        {items &&
          items.map((item, index) => {
            return (
              <li
                className={activeCategory === index ? "active" : ""}
                onClick={() => {
                  onSelectItem(index);
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
