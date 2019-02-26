import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import reducers from './reducer'
import "./index.css";
import App from "./App";
import Login from "./container/login/login";
import Register from "./container/register/register";
import BossInfo from "./container/bossinfo/bossinfo"
import AuthRoute from "./component/authroute/AuthRoute";
import { createStore } from "redux";
import { compose } from "redux";
import { applyMiddleware } from "redux";
import thunk from 'redux-thunk'



const store = createStore(reducers,compose(
  applyMiddleware(thunk),
  window.devToolsExtension?window.devToolsExtension():f=>f
))

// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store = {store}>
    <BrowserRouter basename="/">
      <div>
        <AuthRoute />
        <Route path="/" exact component={App} />
        <Route path="/bossinfo" exact component={BossInfo} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
