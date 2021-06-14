import React from "react";
import "./App.css";
import Search from "./components/Search";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import SearchResult from "./pages/SearchResult";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SearchPage} />
        <Route exact path="/search/:searchText" component={SearchResult} />
      </Switch>
    </Router>
  );
}
