import React, {useEffect} from "react";
import "./scss/app.scss";

import {Route} from "react-router-dom";
import {Header} from "./components";
import {Home, Cart} from "./pages";
import {useDispatch} from "react-redux";
import setPizzas from "./redux/actions/pizzas";

const App = (props) => {

  const dispatch = useDispatch()


  useEffect(() => {
    fetch("http://localhost:3000/db.json")
      .then((res) => res.json())
      .then((db) => {
        dispatch(setPizzas(db.pizzas));
      });
  }, []);
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route
          path="/"
          component={Home}
          exact
        />
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  );
};

export default App;
