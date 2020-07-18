import React from "react";
import {Categories, SortPopup, Pizza} from "../components";

const Home = ({pizzas}) => {
  const categories = [
    "Мясные",
    "Вегетерианские",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  const sortItems = [
    {name: "Популярности", type: "popular"},
    {name: "Цене", type: "price"},
    {name: "Алфавиту", type: "alphabet"},
  ];
  return (
    <div className="container">
      <div className="content__top">
        <Categories items={categories} />
        <SortPopup items={sortItems} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <Pizza items={pizzas} />
    </div>
  );
};

export default Home;
