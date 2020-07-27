import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { setCategory, setSortBy } from "../redux/actions/filters";

import { Categories, SortPopup, Pizza, PizzaLoadingBlock } from "../components";

import { CATEGORIES, SORT_ITEMS } from "../constants";
import { fetchPizzas } from "../redux/actions/pizzas";

const Home = () => {
  const dispatch = useDispatch();

  const { items, isLoaded } = useSelector(({ pizzas }) => pizzas);
  const { category, sortBy } = useSelector(({ filters }) => filters);
  useEffect(() => {
    dispatch(fetchPizzas(category, sortBy));
  }, [category, sortBy]);

  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSortType = useCallback((index) => {
    dispatch(setSortBy(SORT_ITEMS[index].type));
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClickItem={onSelectCategory}
          items={CATEGORIES}
        />
        <SortPopup
          activeSortType={sortBy}
          onClickItem={onSelectSortType}
          items={SORT_ITEMS}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((pizza) => <Pizza key={nanoid(4)} pizza={pizza} />)
          : Array(12)
              .fill("")
              .map(() => {
                return <PizzaLoadingBlock key={nanoid(4)} />;
              })}
      </div>
    </div>
  );
};

export default Home;
