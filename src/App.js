import React from "react";
import logo from "./logo.svg";
import "./App.css";
import configureStore from "store/configureStore";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import BlogList from "pages/BlogList";
import BlogDetail from "pages/BlogDetail";
const store = configureStore({});

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/blogs/:postId" component={BlogDetail} />
          <Route path="/" component={BlogList} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
