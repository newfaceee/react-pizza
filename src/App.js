import React, { useEffect } from "react";
import "./scss/app.scss";

import { Route } from "react-router-dom";
import { Header } from "./components";
import { Home, Cart } from "./pages";
import { useDispatch } from "react-redux";
import fetchPizzas from "./redux/actions/pizzas";

const App = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPizzas());
  }, []);
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" component={Home} exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  );
};

export default App;
