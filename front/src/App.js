import React from "react";
import Menu, { routes } from "./components/Menu";
import { Route, BrowserRouter, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Switch>
        {routes.map((elem) => (
          <Route exact path={elem.ruta} component={elem.component} />
        ))}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
