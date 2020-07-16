import React from "react";
import "./scss/app.scss";

import {Route} from 'react-router-dom';
import {Header} from "./components";
import {Home, Cart} from "./pages";

const App = () => {

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" component={Home} exact />
        {/* <Route path="/cart" component={Cart} exact/> */}
        <Cart />
      </div>
    </div>
  );
};

export default App;
