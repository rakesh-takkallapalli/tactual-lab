import React from "react";
import { Switch, Route } from "react-router-dom";
import Inventory from "./components/Inventory";
import Cart from "./components/Cart";
import OrderHistory from "./components/OrderHistory";
import Product from "./components/Product";
import Stock from "./components/Stock";

function RouteConfig() {
  return (
    <Switch>
      <Route path="/cart">
        <Cart />
      </Route>
      <Route path="/inventory/products/:productId">
        <Product />
      </Route>
      <Route path="/orderHistory">
        <OrderHistory />
      </Route>
      <Route path="/addStock">
        <Stock />
      </Route>
      <Route path="/inventory">
        <Inventory />
      </Route>
      <Route path="*">
        <Inventory />
      </Route>
    </Switch>
  );
}

export default RouteConfig;
