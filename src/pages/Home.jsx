import React from "react";
import {Categories, SortPopup, Pizza} from '../components';

const Home = () => {
  const categories = [
    "Мясные",
    "Вегетерианские",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  const sortItems = ["Популярности", "Цене", "Алфавиту"];
  const pizzaItems = [
    {
      name: "Чизбургер-пицца",
      price: 395,
      image:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg",
    },
    {
      name: "Сырная",
      price: 450,
      image:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg",
    },
    {
      name: "Креветки по-азиатски",
      price: 290,
      image:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg",
    },
    {
      name: "Сырный цыпленок",
      price: 385,
      image:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg",
    },
    {
      name: "Чизбургер-пицца",
      price: 395,
      image:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg",
    },
    {
      name: "Сырная",
      price: 450,
      image:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg",
    },
    {
      name: "Креветки по-азиатски",
      price: 290,
      image:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg",
    },
    {
      name: "Сырный цыпленок",
      price: 385,
      image:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg",
    },
    {
      name: "Острый цыпленок",
      price: 385,
      image:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg",
    },
  ];
  const doughTypes = ["Тонкое", "Традиционное"];
  const sizes = [26, 30, 40];
  return (
    <div className="container">
      <div className="content__top">
        <Categories items={categories} />
        <SortPopup items={sortItems} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <Pizza items={pizzaItems} doughTypes={doughTypes} sizes={sizes} />
    </div>
  );
};

export default Home;
