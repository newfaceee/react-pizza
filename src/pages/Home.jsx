import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCategory, setSortBy } from "../redux/actions/filters";

import { Categories, SortPopup, Pizza, PizzaLoadingBlock } from "../components";

import { CATEGORIES, SORT_ITEMS } from "../constants";
import { fetchPizzas } from "../redux/actions/pizzas";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPizzas());
  }, []);

  const { items, isLoaded } = useSelector(({ pizzas }) => pizzas);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSortType = useCallback((index) => {
    dispatch(setSortBy(SORT_ITEMS[index].type));
  });

  return (
    <div className="container">
      <div className="content__top">
        <Categories onClickItem={onSelectCategory} items={CATEGORIES} />
        <SortPopup onClickItem={onSelectSortType} items={SORT_ITEMS} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((pizza) => <Pizza pizza={pizza} />)
          : Array(12).fill(<PizzaLoadingBlock />)}
      </div>
    </div>
  );
};

export default Home;
