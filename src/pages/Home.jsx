import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCategory } from "../redux/actions/filters";

import { Categories, SortPopup, Pizza } from "../components";
import { CATEGORIES, SORT_ITEMS } from "../constants";
import { fetchPizzas } from "../redux/actions/pizzas";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPizzas());
  }, []);

  const items = useSelector(({ pizzas }) => {
    return pizzas.items;
  });

  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories onClickItem={onSelectCategory} items={CATEGORIES} />
        <SortPopup items={SORT_ITEMS} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <Pizza items={items} />
    </div>
  );
};

export default Home;
