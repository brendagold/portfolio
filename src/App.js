import React from "react";
// import { TinyButton as ScrollUpButton } from "react-scroll-up-button";
import ScrollToTop from "./components/Scroll-Up";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import NotFound from "./components/Not-Found";

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/portfolio/:portId">
          <Portfolio />
        </Route>
        <Route path="/not-found">
          <NotFound />
        </Route>
        <Redirect to="/not-found" />
      </Switch>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
