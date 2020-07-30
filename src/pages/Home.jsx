import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { setCategory, setSortBy } from '../redux/actions/filters';
import { addPizzaToCart } from '../redux/actions/cart';

import { Categories, SortPopup, Pizza, PizzaLoadingBlock } from '../components';

import { CATEGORIES, SORT_ITEMS } from '../constants';
import { fetchPizzas } from '../redux/actions/pizzas';

const Home = () => {
  const dispatch = useDispatch();

  const { items, isLoaded } = useSelector(({ pizzas }) => pizzas);
  const { category, sortBy } = useSelector(({ filters }) => filters);
  const { items: itemsInCart } = useSelector(({ cart }) => cart);

  useEffect(() => {
    dispatch(fetchPizzas(category, sortBy));
  }, [category, sortBy]);

  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSortType = useCallback((index) => {
    dispatch(setSortBy(SORT_ITEMS[index].type));
  }, []);
  const onAddPizzaToCart = useCallback((pizza) => {
    dispatch(addPizzaToCart(pizza));
  });

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
          ? items.map((pizza) => {
              const count =
                itemsInCart[pizza.id] &&
                itemsInCart[pizza.id].reduce(
                  (acc, currPizza) => acc + currPizza.count,
                  0
                );
              return (
                <Pizza
                  onAddButtonClick={onAddPizzaToCart}
                  key={nanoid(4)}
                  pizza={pizza}
                  count={count}
                />
              );
            })
          : Array(12)
              .fill('')
              .map(() => {
                return <PizzaLoadingBlock key={nanoid(4)} />;
              })}
      </div>
    </div>
  );
};

export default Home;
