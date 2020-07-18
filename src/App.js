import React, {useState} from "react";
import "./scss/app.scss";

import {Route} from "react-router-dom";
import {Header} from "./components";
import {Home, Cart} from "./pages";

const App = () => {
  const [pizzas, setPizzas] = useState([]);
  React.useEffect(() => {
    fetch("http://localhost:3000/db.json")
      .then((res) => res.json())
      .then((db) => setPizzas(db.pizzas));
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" render={() => <Home pizzas={pizzas} />} exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  );
};

export default App;
