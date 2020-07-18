import React from "react";
import "./scss/app.scss";

import { Route } from "react-router-dom";
import { Header } from "./components";
import { Home, Cart } from "./pages";
import { connect } from "react-redux";
import setPizzas from "./redux/actions/pizzas";

const mapStateToProps = (state) => {
  return {
    pizzas: state.pizzas.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPizzas: (items) => dispatch(setPizzas(items)),
    dispatch  
  }
}

class App extends React.Component {
  componentDidMount() {
    fetch("http://localhost:3000/db.json")
      .then((res) => res.json())
      .then((db) => {
        this.props.setPizzas(db.pizzas)
      });
  }

  render() {
    return (
        <div className="wrapper">
          <Header />
          <div className="content">
            <Route path="/" render={() => <Home pizzas={this.props.pizzas} />} exact />
            <Route path="/cart" component={Cart} exact />
          </div>
        </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
