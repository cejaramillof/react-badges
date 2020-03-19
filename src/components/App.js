import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import BadgeNew from "../pages/BadgeNew";
import Badges from "../pages/Badges";
import Layout from "./Layout";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
// Lifecycle
// constructor (Initialice state or values)
// render

// Most importants
// componentDidMount (Is visible on view)
// componentDidUpdate (oldProps, OldState) (update childs)
// componentWillUnmount (clear memory)

// others like shouldcomponentUpdate, componentDidCatch, etc..

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BadgeNew} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
